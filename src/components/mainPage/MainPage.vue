<template>
  <div class="main-page">
    <TopMenu />
    <TopBlock />
    <Info />
    <Statistics />
    <Calculator />
    <CalculatorImages />
  </div>
</template>

<script>
import TopMenu from '../TopMenu/TopMenu'
import TopBlock from '../mainPage/TopBlock'
import Info from '../mainPage/Info'
import Statistics from '../mainPage/statistics/Statistics'
import Calculator from '../mainPage/calculator/Calculator'
import CalculatorImages from '../mainPage/CalculatorImages'

export default {
  name: 'MainPage',

  components: {
    TopMenu,
    TopBlock,
    Info,
    Statistics,
    Calculator,
    CalculatorImages,
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
