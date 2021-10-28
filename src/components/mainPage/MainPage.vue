<template>
  <div class="main-page">
    <TopMenu />
    <TopBlock />
  </div>
</template>

<script>
import TopMenu from '../TopMenu/TopMenu'
import TopBlock from '../mainPage/TopBlock'

export default {
  name: 'MainPage',

  components: {
    TopMenu,
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
