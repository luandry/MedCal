<template lang="html">
  <v-layout>
    <v-flex xs6>
      <doctor-info :doctor="doctor" />
    </v-flex>
  </v-layout>
</template>

<script>
import DoctorInfo from '@/components/ViewDoctor/DoctorInfo'
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
    DoctorInfo
  }
}
</script>

<style lang="css" scoped>
</style>
