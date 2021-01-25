<template>
  <div class="q-ma-md" style="display: inline-flex">
    <canvas
      id="canvas"
      :width='cols%2 === 0 ? (width * (cols / 2)) + ((width/2) * (cols/2)) + (width/4) : (width * Math.ceil(cols/2)) + ((width/2) * Math.floor(cols/2))'
      :height='(height * rows) + (height / 2)'
      @click="({ offsetX: x, offsetY: y }) => setHex({ x, y })"
      @keydown="keydown"
    />
    <span class="q-ma-md">
      <span v-if="curHex">q: {{ curHex.q + offset.q + (offset.q * longitude) }}; r: {{ curHex.r + offset.r + (offset.r * latitude) }}</span>
      <q-btn-group>
        <q-btn flat icon="keyboard_arrow_left" @click="incLong(1)" />
        <q-btn flat icon="keyboard_arrow_up" @click="incLat(1)" />
        <q-btn flat icon="keyboard_arrow_down" @click="incLat(-1)" />
        <q-btn flat icon="keyboard_arrow_right" @click="incLong(-1)" />
      </q-btn-group>
    </span>
  </div>
</template>

<script>
// https://www.redblobgames.com/grids/hexagons/
// https://www.redblobgames.com/grids/hexagons/implementation.html
// https://github.com/cefleet/hexAPI
import { Grid } from 'hexapi'
import Hex from 'src/assets/data/Hex'
import HexMaps from 'src/assets/data/HexMaps'

export default {
  name: 'Hex',
  data: function () {
    return {
      grid: null,
      canvas: null,
      ctx: null,
      hexSize: {
        x: 35,
        y: 35
      },
      curHex: null,
      rows: 13,
      cols: 13,
      type: 'flat',
      longitude: 0,
      latitude: 0
    }
  },
  computed: {
    height () {
      return this.hexSize.y * Math.sqrt(3)
    },
    width () {
      return this.hexSize.x * 2
    },
    offset () {
      return {
        q: -Math.floor(this.cols / 2),
        r: -Math.floor(this.rows / 2) + Math.floor(this.cols / 4)
      }
    }
  },
  methods: {
    clear () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    drawMap  () {
      const self = this
      this.grid.map.map((h) => {
        const mm = HexMaps.find(obj => obj.q === (h.q + self.offset.q + (self.offset.q * self.longitude)) && obj.r === (h.r + self.offset.r + (self.offset.r * self.latitude)))
        const fill = mm && mm.type ? Hex.terrain[mm.type] : Hex.terrain.ocean
        self.drawHex(h, fill)
        if (mm && mm.feature) {
          this.drawText(h, Hex.legend[mm.feature], Hex.font)
        }
      })
      this.canvas.tabIndex = 1
      this.canvas.focus()
    },
    drawHex (h, fill = false, color = '#000') {
      const self = this
      const corners = this.grid.cornersOfHex(h)
      this.ctx.strokeStyle = color
      this.ctx.beginPath()
      corners.forEach((c, idx) => {
        if (idx === 0) return self.ctx.moveTo(c.x, c.y)
        self.ctx.lineTo(c.x, c.y)
      })
      this.ctx.lineTo(corners[0].x, corners[0].y)
      this.ctx.closePath()
      if (fill) {
        this.ctx.fillStyle = fill
        this.ctx.fill()
      }
      this.ctx.stroke()
    },
    drawText (h, text, font = '1em Arial', color = '#000') {
      const center = this.grid.centerOfHex(h)
      this.ctx.fillStyle = color
      this.ctx.font = font
      const textWidth = this.ctx.measureText(text).width
      const textHeight = this.ctx.measureText(text).actualBoundingBoxAscent + this.ctx.measureText(text).actualBoundingBoxDescent
      this.ctx.fillText(text, center.x - (textWidth / 2), center.y + (textHeight / 2))
      this.ctx.stroke()
    },
    setHex ({ x, y }) {
      const hex = this.grid.hexAtPoint({ x, y })
      // no need to re-render inside the same hex.
      if (this.curHex && `${hex.q}.${hex.r}.${hex.s}` === `${this.curHex.q}.${this.curHex.r}.${this.curHex.s}`) return
      this.curHex = hex
    },
    incLong (factor) {
      this.longitude += factor
      this.latitude -= factor
      this.clear()
      this.curHex = null
      this.drawMap()
    },
    incLat (factor) {
      this.latitude += factor
      this.clear()
      this.curHex = null
      this.drawMap()
    },
    keydown (e) {
      switch (e.key) {
        case 'ArrowUp':
          this.incLat(1)
          break
        case 'ArrowDown':
          this.incLat(-1)
          break
        case 'ArrowLeft':
          this.incLong(1)
          break
        case 'ArrowRight':
          this.incLong(-1)
      }
    }
  },
  mounted () {
    this.canvas = document.querySelector('#canvas')
    this.ctx = this.canvas.getContext('2d')
    this.grid = Grid({
      hexSize: this.hexSize,
      cols: this.cols,
      rows: this.rows,
      type: this.type,
      origin: {
        x: this.width / 2,
        y: this.height / 2
      }
    })
    this.drawMap()
    window.addEventListener('load', () => {
      this.drawMap()
    })
  },
  updated () {
    this.clear()
    this.drawMap()
  }
}
</script>

<style scoped>
canvas {
  background: #fff;
  border:6px solid #333;
}
</style>
