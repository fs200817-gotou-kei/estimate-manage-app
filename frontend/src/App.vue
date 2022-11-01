<template>
  <AppHeader />
  <EstimatesSearch />
</template>

<script>
import EstimatesSearch from './components/EstimatesSearch.vue'
import AppHeader from './components/AppHeader.vue'
import './css/app.css'

export default {
  name: 'App',
  components: {
    AppHeader,
    EstimatesSearch
  }
}
</script>