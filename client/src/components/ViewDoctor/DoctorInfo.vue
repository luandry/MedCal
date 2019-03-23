<template lang="html">
  <panel title="Doctor Info">
    <v-layout row justify-center>
      <v-flex>
        <div class="doctor-name">
          {{doctor.name}}
        </div>
      </v-flex>

      <GmapMap
    :center="{lat:50, lng:10}"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px">
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  </GmapMap>


      <v-flex>
        <img class="doctor-image" :src="doctor.photoUrl" />
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
export default {
  props: [
    'doctor'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}







</script>

<style lang="css" scoped>
.doctor-name {
  font-size: 30px
}

.doctor-image {
  width: 70%;
  margin: 0 auto
}
</style>
