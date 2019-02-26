<template lang="html">
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      MedCal
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark
        @click="navigateTo({name: 'home'})">
        Home
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark
        @click="navigateTo({name: 'login'})">
        Log In
      </v-btn>
      <v-btn flat dark
        @click="navigateTo({name: 'register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
