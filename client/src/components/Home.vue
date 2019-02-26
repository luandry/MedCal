<template lang="html">
  <div class="search">
    <h1 class="title">Search by doctor names</h1>
    <v-text-field
      v-model="searchRequest"
      label="Search"
    ></v-text-field>
    <v-btn
      class="cyan"
      @click="search"
      dark>
      Search
    </v-btn>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      searchRequest: '',
      error: null
    }
  },
  methods: {
    async search () {
      try {
        await AuthenticationService.searchRequest({
          searchRequest: this.searchRequest
        })
      } catch (error) {
        this.error = error.response.data.error
      }
      this.$router.push({name: 'search-result'})
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
