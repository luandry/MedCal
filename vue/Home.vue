<template>
  <div class="home">
    <h1>Search</h1>
    <input type="text" placeholder="search...">
    <button type="submit">search</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
    }
  }
}
</script>

<style>
input {
  height: 25px;
  width: 60%;
  border: 1px;
  border-color: gray;
  border-style: solid;
}
button {
  margin-left: -5px;
  padding: 4px 8px 5px 8px;
  color: white;
  background-color: rgb(0, 179, 205);
  font-size: 17px;
  border: none;
}
</style>
