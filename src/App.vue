<script>
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'

//TO ADD PROPS AND LOADING MESSAGE

export default {
  name: 'App',
  data() {

    return {

      store

    }
  },
  components: {
    AppHeader,
    AppMain
  },
}
</script>

<template>

  <AppHeader></AppHeader>

  <AppMain></AppMain>

</template>

<style lang="scss">
</style>
