<template>
  <div class="q-pa-md">
    <q-input v-model="size" type="number" label="Example Text font size (px)" />
    <q-input v-model="example" label="Example Text" />
    <q-markup-table flat dense wrap-cells>
        <thead>
            <th>Name</th>
            <th>Rarity</th>
            <th>Spoken by</th>
            <th>Description</th>
        </thead>
        <tbody>
            <template v-for="l in languages">
              <tr :key="l.name">
                  <td>{{ l.name }}</td>
                  <td>{{ l.rarity }}</td>
                  <td>{{ l.spoken }}</td>
                  <td>{{ l.description }}</td>
              </tr>
              <tr :key="l.name + '-example'">
                <td colspan=4>
                  <span :class="l.script" :style="'font-size: ' + size + 'px'">{{ example }}</span>
                </td>
              </tr>
            </template>
        </tbody>
    </q-markup-table>
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
