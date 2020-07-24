<template>
  <div class="q-pa-md">
    <q-input v-model="size" type="number" label="Example Text font size (px)" />
    <q-input v-model="example" label="Example Text" />
    <q-table
      title="Languages"
      :data="languages"
      :columns="columns"
      :pagination.sync="pagination"
      :filter="filter"
      row-key="id"
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
          <q-td v-for="col in props.cols" :key="col.name" :props="props" >
            <span v-if="col.name === 'example'" :class="col.value" :style="'font-size: ' + size + 'px'">{{ example }}</span>
            <span v-else>{{ col.value }}</span>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script >
import Languages from 'src/assets/data/Languages'

export default {
  name: 'LanguageList',
  data: function () {
    return {
      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'rarity', required: true, label: 'Rarity', align: 'left', field: row => row.rarity, format: val => `${val}`, sortable: true },
        { name: 'description', required: true, label: 'Description', align: 'left', field: row => row.description, format: val => `${val}`, sortable: true },
        { name: 'example', required: true, label: 'Example', align: 'left', field: row => row.script, format: val => `${val}`, sortable: false }
      ],
      example: 'This is example text',
      languages: Languages,
      filter: '',
      pagination: {
        rowsPerPage: 25
      },
      size: 14
    }
  }
}
</script>
