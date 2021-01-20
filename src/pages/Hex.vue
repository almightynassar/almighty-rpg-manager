<template>
  <div class="q-ma-md" style="display: inline-flex">
    <canvas
      id="canvas"
      :width='cols%2 === 0 ? (width * (cols / 2)) + ((width/2) * (cols/2)) + (width/4) : (width * Math.ceil(cols/2)) + ((width/2) * Math.floor(cols/2))'
      :height='(height * rows) + (height / 2)'
    />
    <span class="q-ma-md">
      <span v-if="curHex">q: {{ curHex.q + offset.q + (offset.q * longitude) }}; r: {{ curHex.r + offset.r + (offset.r * latitude) }}</span>
      <div>
        <q-btn flat label="-" @click="longitude += 1; latitude -= 1; clear(); curHex = null; drawMap()" />
        Longitude
        <q-btn flat label="+" @click="longitude -= 1; latitude += 1; clear(); curHex = null; drawMap()" />
      </div>
      <div>
        <q-btn flat label="-" @click="latitude -= 1; clear(); curHex = null; drawMap()" />
        Latitude
        <q-btn flat label="+" @click="latitude += 1; clear(); curHex = null; drawMap()" />
      </div>
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
        r: -Math.floor(this.cols / 4)
      }
    }
  },
  methods: {
    clear () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    drawMap  () {
      const self = this
      this.clear()
      this.grid.map.map((h) => {
        const mm = HexMaps.find(obj => obj.q === (h.q + self.offset.q + (self.offset.q * self.longitude)) && obj.r === (h.r + self.offset.r + (self.offset.r * self.latitude)))
        const fill = mm && mm.type ? Hex.terrain[mm.type] : Hex.terrain.ocean
        self.drawHex(h, fill)
        if (mm && mm.feature) {
          this.drawText(h, Hex.legend[mm.feature], Hex.font)
        }
      })
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
    loaded () {
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
    },
    setHex ({ x, y }) {
      const hex = this.grid.hexAtPoint({ x, y })
      // no need to re-render inside the same hex.
      if (this.curHex && `${hex.q}.${hex.r}.${hex.s}` === `${this.curHex.q}.${this.curHex.r}.${this.curHex.s}`) return
      this.curHex = hex
    }
  },
  mounted () {
    const self = this
    window.addEventListener('load', (event) => {
      this.loaded()
      this.canvas.addEventListener('click', ({ offsetX: x, offsetY: y }) => self.setHex({ x, y }))
    })
  },
  updated () {
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
