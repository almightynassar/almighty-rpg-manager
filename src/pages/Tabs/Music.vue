<template>
  <div class="q-pa-md">
    <q-table
      title="Music"
      :data="music"
      :columns="columns"
      :pagination.sync="pagination"
      :filter="filter"
      row-key="name"
      flat
    >

      <template v-slot:top-right>
        <q-input dense debounce="300" v-model="prefix" placeholder="Copy prefix" label="Copy prefix"></q-input>
        <span style="width: 1em;"></span>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
          <q-th auto-width>Copy</q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <template v-if="col.name == 'url'">
                <a :href="col.value">Link</a>
            </template>
            <template v-else>
              {{ col.value }}
            </template>
          </q-td>
          <q-td auto-width>
            <input :id="'link-' + props.rowIndex" type="hidden" :value="prefix + props.row.url">
            <q-btn size="sm" round dense @click="copyLink(props.rowIndex)" icon="content_copy" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import Music from 'src/assets/data/resources/music'
export default {
  name: 'Music',
  data: function () {
    return {
      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'category', required: true, label: 'Category', align: 'left', field: row => row.category, format: val => `${val}`, sortable: true },
        { name: 'url', required: true, label: 'URL', align: 'left', field: row => row.url, format: val => `${val}`, sortable: false }
      ],
      music: Music,
      filter: '',
      pagination: {
        page: 1,
        rowsPerPage: 30,
        sortBy: 'name'
      },
      prefix: '!play '
    }
  },
  methods: {
    copyLink (id) {
      var copyElement = document.querySelector('#link-' + id)
      copyElement.setAttribute('type', 'text')
      copyElement.select()

      try {
        document.execCommand('copy')
      } catch (err) {
        console.error('Oops, unable to copy')
        this.$q.notify({
          position: 'top',
          timeout: 1000,
          color: 'negative',
          caption: 'Could not copy the link code',
          icon: 'report_problem',
          message: 'Error'
        })
      }

      /* unselect the range */
      copyElement.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    }
  },
  computed: {
    pagesNumber () {
      return Math.ceil(this.music.length / this.pagination.rowsPerPage)
    }
  }
}
</script>
