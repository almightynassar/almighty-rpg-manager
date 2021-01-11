<template>
    <div class="q-pa-md">
        <p>You are using version {{ version }}.</p>
        <p>The latest version is {{ tag }}.</p>
        <p>You can see the available version at the <a href="https://github.com/almightynassar/almighty-rpg-manager/releases">releases page</a></p>
    </div>
</template>

<script>
import { version } from '../../package.json'

export default {
  name: 'About',
  data: function () {
    return {
      tag: 'v' + version,
      version: 'v' + version
    }
  },
  mounted () {
    this.$axios.get('https://api.github.com/repos/almightynassar/almighty-rpg-manager/releases/latest')
      .then((response) => {
        this.tag = response.data.tag_name
      })
      .finally(() => {
        if (this.tag) {
          if (this.tag !== this.version) {
            this.$q.notify({
              position: 'top',
              timeout: 20000,
              color: 'negative',
              caption: 'Your version is ' + this.version + ', while the latest version is ' + this.tag + '.',
              icon: 'report_problem',
              message: 'Warning: Version does not match',
              closeBtn: true
            })
          }
        } else {
          this.$q.notify({
            position: 'top',
            timeout: 20000,
            color: 'negative',
            caption: 'Could not get the latest version number; Is your internet on?',
            icon: 'report_problem',
            message: 'Error: Version Number',
            closeBtn: true
          })
        }
      })
  }
}
</script>
