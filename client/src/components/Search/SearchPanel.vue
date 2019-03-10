<template lang="html">
  <panel title="search">
    <v-text-field
      label="Search by doctor name"
      v-model="search">
    </v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ' '
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      // dynamically update the router query according to user input so the page can be bookmarked
      const route = {
        name: 'search'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
