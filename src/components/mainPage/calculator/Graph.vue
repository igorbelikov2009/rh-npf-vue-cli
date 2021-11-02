<template>
  <div class="graph">
    <div class="graph__diagram">
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
      <div class="graph__vertical-line"></div>
    </div>
    <div class="graph__years">
      <p class="graph__year">2021</p>
      <p class="graph__year">2024</p>
      <p class="graph__year">2027</p>
      <p class="graph__year">2030</p>
      <p class="graph__year">2033</p>
      <p class="graph__year">2036</p>
      <p class="graph__year">2040</p>
      <p class="graph__year">2043</p>
    </div>
    <div class="graph__sub">
      <div class="graph__subheading">
        <div class="graph__point-purple"></div>
        <p class="graph__title">Инвестиционный доход</p>
      </div>

      <div class="graph__subheading">
        <div class="graph__point-yellow"></div>
        <p class="graph__title">Ежемесячные взносы</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// graph
.graph {
  width: 100%;

  &__diagram {
    width: 100%;
    height: 191px;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 576px) {
      height: 200px;
      margin-bottom: 8px;
    }

    @media screen and (min-width: 1024px) {
      height: 144px;
      margin-bottom: 16px;
    }
  }

  &__vertical-line {
    height: 100%;
    width: 1px;
    background: #e4e4e4;
  }

  &__years {
    width: 100%;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 576px) {
      margin-bottom: 12px;
    }

    @media screen and (min-width: 1024px) {
      margin-bottom: 24px;
    }
  }

  &__year {
    display: block;
    font-size: 11px;
    color: #96a0aa;
  }

  &__sub {
    width: 100%;
    display: block;

    @media screen and (min-width: 576px) {
      display: flex;
    }
  }

  &__subheading {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    &:first-of-type {
      margin-right: 43px;
      margin-bottom: 12px;

      @media screen and (min-width: 576px) {
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: 576px) {
      justify-content: space-between;
    }
  }

  &__point-purple {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: rgb(105, 16, 156);
    margin-right: 12px;
  }

  &__point-yellow {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: yellow;
    margin-right: 12px;
  }

  &__title {
    font-size: 13px;
    color: #5a646e;
    position: relative;
  }
}
// graph
</style>
