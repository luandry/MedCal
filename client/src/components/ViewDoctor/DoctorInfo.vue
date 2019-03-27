<template lang="html">
  <panel title="Doctor Info">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex md6>
          <v-card flat>
            <v-card-title primary class="headline">{{ doctor.name }}</v-card-title>

            <v-text-field
              readonly
              outline
              v-model="doctor.bio"
              v-if="!isEmpty(doctor.bio)"
              label="Doctor Bio">
            </v-text-field>

            <v-text-field
              readonly
              outline
              v-model="doctor.address"
              v-if="!isEmpty(doctor.address)"
              label="Address">
            </v-text-field>

            <v-text-field
              readonly
              outline
              v-model="doctor.phone"
              v-if="!isEmpty(doctor.phone)"
              label="Phone Number">
            </v-text-field>

            <v-text-field
              readonly
              outline
              v-model="doctor.mail"
              v-if="!isEmpty(doctor.mail)"
              label="Email">
            </v-text-field>
          </v-card>
        </v-flex>

        <v-flex d-flex md6>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card flat>
                <img class="doctor-image" :src="doctorImage" />
              </v-card>
            </v-flex>

            <v-flex d-flex md10 offset-md1>
              <GmapMap
                :center="{lat:parseFloat(doctor.lat), lng:parseFloat(doctor.long)}"
                :zoom="12"
                map-type-id="terrain"
                style="width: 500px; height: 400px">
                <GmapMarker
                  :position="google && new google.maps.LatLng(doctor.lat, doctor.long)"
                  :clickable="true"
                  :draggable="true"
                  @click="center=google && new google.maps.LatLng(doctor.lat, doctor.long)"
                />
              </GmapMap>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </panel>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'

export default {
  data () {
    return {
      doctorImage: null
    }
  },
  props: [
    'doctor'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    isEmpty (data) {
      if (data == null || data === '') {
        return true
      } return false
    }
  },
  watch: {
    doctor: function (val) {
      if (this.doctor.photoUrl === '' || this.doctor.photoUrl == null) {
        this.doctorImage = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
      } else this.doctorImage = this.doctor.photoUrl
    }
  },
  computed: {
    google: gmapApi
  }
}
</script>

<style lang="css" scoped>
.label {
  font-weight: bold
}

.doctor-image {
  width: 70%;
  margin: 10px auto
}
</style>
