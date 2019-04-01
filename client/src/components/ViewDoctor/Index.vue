<template lang="html">
  <v-layout>
    <v-flex>
      <doctor-info :doctor="doctor" />
      <make-booking class="mt-2 mb-5" :doctor="doctor" />
    </v-flex>
  </v-layout>
</template>

<script>
import DoctorInfo from '@/components/ViewDoctor/DoctorInfo'
import MakeBooking from '@/components/ViewDoctor/MakeBooking'
import SearchService from '@/services/SearchService'

export default {
  data () {
    return {
      doctor: {}
    }
  },
  async mounted () {
    const doctorId = this.$store.state.route.params.doctorId
    this.doctor = (await SearchService.show(doctorId)).data
  },
  components: {
    DoctorInfo,
    MakeBooking
  }
}
</script>

<style lang="css" scoped>
</style>
