<template>
  <div class="main-page">
    <Header />
    <TopBlock />
  </div>
</template>

<script>
import Header from '../header/Header'
import TopBlock from '../mainPage/TopBlock'

export default {
  name: 'MainPage',

  components: {
    Header,
    TopBlock,
  },
}
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
