<template>
  <div id="nav">
    <router-link to="/" class="home-button">MedCal</router-link>
    <router-link to="/login">Log In</router-link>
    <router-link to="/signup">Sign Up</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
  export default {
    name: 'header',
    components: {

    }
  }
</script>

<style>
#nav {
  color: blue;
  margin: -50px 10px 10px 10px;
  overflow: hidden;
  border-bottom: 1px;
  border-style: solid;
  border-color: gray;
}

#nav a {
  float: right;
  font-size: 32px;
  text-decoration: none;
  color: teal;
  margin: 20px;
}

#nav .home-button {
  float: left;
}
</style>
