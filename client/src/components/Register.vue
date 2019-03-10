<template lang="html">
  <v-layout column>
    <v-flex lg5>
      <panel title="Register">
          <form
            name="sign-up-form"
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
            <v-text-field
              v-model="userName"
              label="User Name"
            ></v-text-field>
            <v-text-field
              v-model="age"
              label="Age"
            ></v-text-field>
            <v-text-field
              v-model="phoneNumber"
              label="Phone Number"
            ></v-text-field>
          </form>
          <br>
          <div
            class="error"
            v-html="error" />
          <br>
          <v-btn
            class="blue"
            @click="register"
            dark>
            Register
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
      userName: '',
      age: null,
      phoneNumber: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          userName: this.userName,
          age: this.age,
          phoneNumber: this.phoneNumber
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
