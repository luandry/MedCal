<template lang="html">
  <div class="front-page">
    <v-carousel
      prev-icon="chevron_left"
      next-icon="chevron_right"
      delimiter-icon="lens">
      <v-carousel-item
        dark
        v-for="banner in banners"
        :key="banner.id"
        :src="banner.imageUrl"
      ></v-carousel-item>
    </v-carousel>

    <div class="mt-2 mb-5">
      <h1 class="display-3">Search by doctor names</h1>
      <v-text-field
        outline
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      banners: [
        {
          id: 1,
          imageUrl: 'http://www.apexcartage.com/wp-content/uploads/2014/05/placeholder-blue.png'
        },
        {
          id: 2,
          imageUrl: 'https://www.hyduke.com/wp-content/uploads/2017/10/placeholder-red.png'
        },
        {
          id: 3,
          imageUrl: 'http://www.apexcartage.com/wp-content/uploads/2014/05/placeholder-blue.png'
        },
        {
          id: 4,
          imageUrl: 'https://www.hyduke.com/wp-content/uploads/2017/10/placeholder-red.png'
        }
      ],
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
</style>
