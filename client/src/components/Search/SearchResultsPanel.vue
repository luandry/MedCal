<template lang="html">
  <panel title="Doctors">
    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="doctor in doctors"
        :key="doctor.id">

        <template v-slot:header>
          <div>{{doctor.name}}</div>
        </template>

        <v-card>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
          <v-layout justify-center>
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
          </v-layout>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
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
