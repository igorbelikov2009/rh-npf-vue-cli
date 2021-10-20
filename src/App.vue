<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from '../src/components/mainPage/MainPage'

export default {
  name: 'app',

  components: {
    MainPage,
  },
}
</script>

<style scoped>
#app {
  width: 100%;
  margin: 0 auto;
}
</style>
