<template lang="html">
  <div class="ui-form">
    <div class="text-field">
      <label>Email</label>
      <br>
      <input type="email">
      <br>
      <label>Password</label>
      <br>
      <input type="password">
    </div>
    <button type="submit">Log In</button>
  </div>
</template>

<script>
export default {
  name: 'log-in-form'
}
</script>

<style lang="css" scoped>
.text-field {
  margin: auto;
  border: 1px;
  border-color: gray;
  border-style: solid;
  padding: 10px;
  width: 250px;
}
.text-field input {
  border: 1px;
  border-color: gray;
  border-style: solid;
  width: 100%;
}
.text-field label {
  float: left;
}
</style>
