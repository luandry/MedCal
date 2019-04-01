<template lang="html">
  <panel title="Make a Booking">
    <v-layout row wrap>
      <v-flex md4>
        <add-to-calendar
          title="Appointment with Dr. Doe"
          :location="doctor.address"
          :start="new Date('2019-04-01T13:00:00')"
          :end="new Date('2019-04-01T14:00:00')"
          details="Looking at progress with knee injury"
          inline-template>

          <div>
            <google-calendar id="google-calendar">
              <i class="fa fa-google"></i>
              <v-btn large>
                8:00-9:00
              </v-btn>
            </google-calendar>
          </div>
        </add-to-calendar>
      </v-flex>

      <v-flex md4>
        <add-to-calendar
          title="Appointment with Dr. Doe"
          :location="doctor.address"
          :start="new Date((new Date).setDate((new Date).getDate() + 3))"
          :end="new Date((new Date).setDate((new Date).getDate() + 3))"
          details="Looking at progress with knee injury"
          inline-template>

          <div>
            <google-calendar id="google-calendar">
              <i class="fa fa-google"></i>
              <v-btn large>
                9:00-10:00
              </v-btn>
            </google-calendar>
          </div>
        </add-to-calendar>
      </v-flex>

      <v-flex md4>
        <add-to-calendar
          title="Appointment with Dr. Doe"
          :location="doctor.address"
          :start="new Date((new Date).setDate((new Date).getDate() + 3))"
          :end="new Date((new Date).setDate((new Date).getDate() + 3))"
          details="Looking at progress with knee injury"
          inline-template>

          <div>
            <google-calendar id="google-calendar">
              <i class="fa fa-google"></i>
              <v-btn large>
                13:00-14:00
              </v-btn>
            </google-calendar>
          </div>
        </add-to-calendar>
      </v-flex>

      <v-flex md4>
        <add-to-calendar
          :location="doctor.address"
          :start="new Date((new Date).setDate((new Date).getDate() + 3))"
          :end="new Date((new Date).setDate((new Date).getDate() + 3))"
          details="Looking at progress with knee injury"
          inline-template>

          <div>
            <google-calendar id="google-calendar">
              <i class="fa fa-google"></i>
              <v-btn large>
                14:00-15:00
              </v-btn>
            </google-calendar>
          </div>
        </add-to-calendar>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
export default {
  props: [
    'doctor'
  ]
}
</script>

<style lang="css" scoped>

</style>
