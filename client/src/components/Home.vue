<template lang="html">
  <div class="search">
    <h1 class="title">Search by doctor names</h1>
    <v-text-field
      v-model="search"
      label="Search"
    ></v-text-field>
    <div
      class="error"
      v-html="error" />
    <v-btn
      class="blue"
      @click="searchDoctors"
      dark>
      Search
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      error: null
    }
  },
  methods: {
    async searchDoctors () {
      try {
        const route = {
          name: 'search'
        }
        if (this.search !== '') {
          route.query = {
            search: this.search
          }
        }
        this.$router.push(route)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style lang="css" scoped>
.search {
  margin-top: 150px;
}
.title {
  color: gray;
}
</style>
