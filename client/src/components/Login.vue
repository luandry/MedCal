<template lang="html">
  <v-layout column>
    <v-flex lg5>
      <panel title="Login">
          <form
            name="login-form"
            autocomplete="off">
            <v-text-field
              v-model="email"
              label="Email"
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="password"
              label="Password"
            ></v-text-field>
          </form>
          <br>
          <div
            class="error"
            v-html="error" />
          <br>
          <v-btn
            class="blue"
            @click="login"
            dark>
            Login
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
