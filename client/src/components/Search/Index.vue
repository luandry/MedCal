<template lang="html">
  <v-layout>
    <v-flex>
      <search-panel />
      <search-results-panel class="mt-3" />
    </v-flex>
  </v-layout>
</template>

<script>
import SearchPanel from '@/components/Search/SearchPanel'
import SearchResultsPanel from '@/components/Search/SearchResultsPanel'

export default {
  components: {
    SearchPanel,
    SearchResultsPanel
  }
}
</script>

<style lang="css" scoped>
</style>
