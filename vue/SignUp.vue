<template lang="html">
  <div class="sign-up">
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue'

export default {
  name: 'sign-up',
  components: {
    SignUpForm
  }
}
</script>

<style lang="css" scoped>
</style>
