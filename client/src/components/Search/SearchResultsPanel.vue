<template lang="html">
  <panel title="Doctors">
    <div
      v-for="doctor in doctors"
      v-bind:key="doctor.id">
      <v-layout>
        <v-flex xs6>
          <div class="doctor-name">
            {{doctor.name}}
          </div>
          <v-btn
            class="blue"
            dark
            @click="navigateTo({
              name: 'doctor',
              params: {
                doctorId: doctor._id
              }
            })">
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="doctor-image" :src="doctor.photoUrl" />
        </v-flex>
      </v-layout>
      <hr>
    </div>
  </panel>
</template>

<script>
import SearchService from '@/services/SearchService'

export default {
  data () {
    return {
      doctors: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.doctors = (await SearchService.index(value)).data
      }
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
