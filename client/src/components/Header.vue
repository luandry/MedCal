<template lang="html">
  <nav>
    <v-toolbar app class="blue" dark>
      <v-toolbar-side-icon
        @click="drawer = !drawer">
        <v-icon>menu</v-icon>
      </v-toolbar-side-icon>

      <v-toolbar-title
        @click="navigateTo({name: 'home'})">
        <span class="headline">MedCal</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          flat
          dark
          @click="navigateTo({name: 'search'})">
          <v-icon left>search</v-icon>
          Search
        </v-btn>

        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
          dark
          @click="googleSignIn">
          <v-icon left>donut_small</v-icon>
          Google Login
        </v-btn>

        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
          dark
          @click="navigateTo({name: 'login'})">
          Login
        </v-btn>

        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
          dark
          @click="navigateTo({name: 'register'})">
          Sign Up
        </v-btn>

        <v-btn
          v-if="$store.state.isUserLoggedIn"
          flat
          dark
          @click="googleSignOut">
          Log Out
          <v-icon right>logout</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      class="blue">

      <v-toolbar
        v-if="$store.state.isUserLoggedIn"
        flat
        class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="google.imageUrl">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title class="white--text">
                {{ google.name }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="blue lighten-1">
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route">

          <v-list-tile-action>
            <v-icon class="white--text">
              {{ link.icon }}
            </v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              {{ link.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      google: {
        name: null,
        imageUrl: null,
        email: null
      },
      links: [
        {
          icon: 'home',
          text: 'Home',
          route: '/'
        },
        {
          icon: 'search',
          text: 'Search',
          route: '/search'
        },
        {
          icon: 'event_note',
          text: 'Calendar'
        },
        {
          icon: 'settings',
          text: 'Settings'
        }
      ]
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    googleSignOut () {
      this.$gAuth.signOut()
        .then(() => {
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
          this.$router.push({name: 'home'})
        })
        .catch(error => {
          console.log(error)
        })
    },
    googleSignIn () {
      this.$gAuth.signIn()
        .then(GoogleUser => {
          console.log('user', GoogleUser)
          this.$store.dispatch('setToken', GoogleUser.getAuthResponse().id_token)
          this.$store.dispatch('setUser', GoogleUser.getId())

          const basicProfile = GoogleUser.getBasicProfile()
          this.google.name = basicProfile.getName()
          this.google.imageUrl = basicProfile.getImageUrl()
          this.google.email = basicProfile.getEmail()

          this.$router.push({name: 'home'})
          this.isSignIn = this.$gAuth.isAuthorized
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="css" scoped>
.v-toolbar__title {
  cursor: pointer;
}
</style>
