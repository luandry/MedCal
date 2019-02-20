<template lang="html">
  <div class="log-in">
    <h1>Log In</h1>
    <LogInForm />
  </div>
</template>

<script>
import LogInForm from '../components/LogInForm.vue'

export default {
  name: 'log-in',
  components: {
    LogInForm
  }
}
</script>

<style lang="css" scoped>
</style>
