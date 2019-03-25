<template lang="html">
  <panel
    title="Doctors"
    class="mb-5">
    <v-spacer slot="action"></v-spacer>

    <div slot="action">
      <v-btn
        dark
        depressed
        v-if="!expanded"
        class="blue lighten-1"
        @click="all">
        expand all
      </v-btn>

      <v-btn
        dark
        depressed
        v-if="expanded"
        class="blue lighten-1"
        @click="none">
        retract all
      </v-btn>
    </div>

    <v-expansion-panel
      expand
      v-model="panel">
      <v-expansion-panel-content
        v-for="doctor in doctors"
        :key="doctor._id"
        expand-icon="expand_more">

        <div slot="header">{{doctor.name}}</div>

        <v-card>
          <v-card-text>{{doctor.bio}}</v-card-text>
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

    <v-layout row justify-center>
      <v-flex md2>
        <v-btn
          dark
          class="blue lighten-q"
          @click="prevPage">
          <v-icon>chevron_left</v-icon>
        </v-btn>
      </v-flex >
      <v-flex md1>
        <v-btn disabled>
          <span class="page-number">{{ pageIndex+1 }}/{{ maxPage+1 }}</span>
        </v-btn>
      </v-flex>
      <v-flex md2>
        <v-btn
          dark
          class="blue lighten-1"
          @click="nextPage">
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import SearchService from '@/services/SearchService'

export default {
  data () {
    return {
      panel: [],
      expanded: false,
      pageIndex: 0,
      maxPage: 0,
      searchResults: null,
      doctors: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    all () {
      this.panel = []
      for (let i = 0; i < this.doctors.length; i++) {
        this.panel[i] = true
      }
      this.expanded = true
    },
    none () {
      this.panel = []
      this.expanded = false
    },
    prevPage () {
      if (this.pageIndex > 0) {
        this.pageIndex--
      }
    },
    nextPage () {
      if (this.pageIndex < this.maxPage) {
        this.pageIndex++
      }
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.searchResults = (await SearchService.index(value)).data
        this.doctors = []
        for (let i = 0; i < 10; i++) {
          if (this.searchResults[i] != null) {
            this.doctors[i] = this.searchResults[i]
          }
        }
        this.maxPage = Math.ceil(this.searchResults.length / 10) - 1
      }
    },
    pageIndex: function (val) {
      this.doctors = []
      let resultsIndex = this.pageIndex * 10
      for (let i = resultsIndex; i < resultsIndex + 10; i++) {
        if (this.searchResults[i] != null) {
          this.doctors[i - resultsIndex] = this.searchResults[i]
        }
      }
      this.none()
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

.page-number {
  color: gray;
  font-weight: bold;
  font-size: 1.6em
}
</style>
