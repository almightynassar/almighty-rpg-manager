<template>
  <div class="q-pa-md">
    <q-table
      title="Rules Reference"
      :data="reference"
      :columns="columns"
      :pagination.sync="pagination"
      :filter="filter"
      row-key="name"
      flat
    >

      <template v-slot:top-right>
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
          <q-th auto-width />
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props"
          >
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <q-btn size="sm" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'keyboard_arrow_down' : 'keyboard_arrow_right'" />
          </q-td>
        </q-tr>

        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left text-primary table-row-wrap">{{ props.row.description }}</div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script >
import Reference from 'src/assets/data/Reference'

export default {
  name: 'ReferenceList',
  data: function () {
    return {
      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'type', required: true, label: 'Type', align: 'left', field: row => row.type, format: val => `${val}`, sortable: true },
        { name: 'short', required: true, label: 'Short', align: 'left', field: row => row.short, format: val => `${val}`, sortable: false },
        { name: 'source', required: true, label: 'Source', align: 'right', field: row => row.source, format: val => `${val}`, sortable: false }
      ],
      reference: Reference,
      filter: '',
      pagination: {
        rowsPerPage: 25
      }
    }
  }
}
</script>
