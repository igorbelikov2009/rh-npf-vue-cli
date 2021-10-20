<template>
  <div class="main-page">
    <Header />
    <LoginForm />
    <TopBlock />
  </div>
</template>

<script>
import Header from '../general/Header'
import LoginForm from '../general/LoginForm'
import TopBlock from '../mainPage/TopBlock'
export default {
  name: 'MainPage',

  components: {
    Header,
    TopBlock,
    LoginForm,
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
