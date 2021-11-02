<template>
  <div class="main-page">
    <TopMenu />
    <TopBlock />
    <Info />
    <Statistics />
    <Calculator />
  </div>
</template>

<script>
import TopMenu from '../topMenu/TopMenu'
import TopBlock from '../mainPage/TopBlock'
import Info from '../mainPage/Info'
import Statistics from '../mainPage/statistics/Statistics'
import Calculator from '../mainPage/calculator/Calculator'

export default {
  name: 'MainPage',

  components: {
    TopMenu,
    TopBlock,
    Info,
    Statistics,
    Calculator,
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
