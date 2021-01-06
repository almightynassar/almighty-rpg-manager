<template>
  <q-item
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'ItemLink',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>
