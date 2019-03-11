<template lang="html">
  <panel title="Doctor Info">
    <v-layout>
      <v-flex xs6>
        <div class="doctor-name">
          {{doctor.name}}
        </div>
      </v-flex>
      <add-to-calendar title="VueConf"
                 location="WROCŁAW, POLAND"
                 :start="new Date()"
                 :end="new Date((new Date).setDate((new Date).getDate() + 1))"
                 details="The first Official Vue.js Conference in the world!"
                 inline-template>
  <div>

    <google-calendar id="google-calendar">
      <i class="fa fa-google"></i> Add to Google calendar
    </google-calendar>

  </div>
</add-to-calendar>
      <v-flex xs6>
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
