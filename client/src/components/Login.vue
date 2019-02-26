<template lang="html">
  <v-layout column>
    <v-flex lg5>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            v-model="email"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
          ></v-text-field>
          <br>
          <div
            class="error"
            v-html="error" />
          <br>
          <v-btn
            class="cyan"
            @click="login"
            dark>
            Login
          </v-btn>
        </div>
      </div>
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
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style lang="css" scoped>
.error {
  color: red;
}
</style>
