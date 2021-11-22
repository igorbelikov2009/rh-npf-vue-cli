<template>
  <section class="menu-mobil">
    <div>
      <div class="menu-mobil__logos">
        <img class="menu-mobil__logo-small" src="@/assets/logotype/logoColoredSmall.svg" alt="" />

        <img class="menu-mobil__logo-big" src="@/assets/logotype/logoColored.svg" alt="" />
      </div>

      <p class="menu-mobil__title">О Фонде</p>

      <a class="menu-mobil__link" href="../templates/fundManagement.html">Руководство Фондом</a>

      <a class="menu-mobil__link" href="../templates/infoOpening.html">Раскрытие информации</a>

      <a class="menu-mobil__link" href="../templates/invest.html">Инвестиционная деятельность</a>

      <p class="menu-mobil__title">Клиентам</p>

      <a class="menu-mobil__link" href="../templates/forBusiness.html">Для бизнеса</a>

      <a class="menu-mobil__link" href="../templates/main.html#calculator">Калькулятор</a>

      <a class="menu-mobil__link" href="../templates/supportService.html#write-to-us"
        >Написать нам</a
      >

      <a class="menu-mobil__link" href="../templates/supportService.html#questions-and-answers"
        >Вопросы и ответы</a
      >

      <div class="menu-mobil__phone">
        <a class="menu-mobil__phone-link" href="tel:+78002004766">
          <p class="menu-mobil__phone-number">8 800 200-47-66</p>
        </a>
      </div>
    </div>

    <div>
      <p class="menu-mobil__copy-right">© 2009-2019 НПФ Ренессанс. Пенсии</p>

      <p class="menu-mobil__copy-right">
        Лицензия № 383/2 от 16 июня 2009 года
      </p>
    </div>

    <button class="menu-mobil__cross-switch">
      <img
        class="menu-mobil__cross-image"
        src="@/assets/icons/triple/Cross/Dark.svg"
        alt="cross"
        @click="closeMenuMobil"
      />
    </button>
  </section>
</template>

<script>
export default {
  methods: {
    closeMenuMobil() {
      this.$emit('closeMenuMobil')
    },
  },
}
</script>

<style lang="scss" scoped>
// menu-mobil
.menu-mobil {
  position: absolute;
  top: 0;
  right: 20%;
  width: 80%;
  padding: 20px 24px;
  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(26, 65, 100, 0.24);

  &__logos {
    height: 24px;
    margin-bottom: 38px;

    @media screen and (min-width: 576px) {
      margin-bottom: 56px;
    }
  }

  &__logo-small {
    height: 24px;
    margin-left: 32px;
    display: block;

    @media screen and (min-width: 576px) {
      display: none;
    }
  }

  &__logo-big {
    height: 24px;
    margin-left: 80px;
    display: none;

    @media screen and (min-width: 576px) {
      display: block;
    }
  }

  &__title {
    font-size: 13px;
    color: #b5bdc8;
    margin-bottom: 8px;
    display: block;

    @media screen and (min-width: 576px) {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }

  &__link {
    text-decoration: none;
    font-size: 18px;
    line-height: 24px;
    color: #5a646e;
    display: block;
    margin-bottom: 16px;

    &:hover {
      color: #28323c;
    }

    &:nth-of-type(3) {
      margin-bottom: 32px;
    }

    &:nth-of-type(8) {
      margin-bottom: 24px;
    }

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 24px;

      &:nth-of-type(3) {
        margin-bottom: 48px;
      }

      &:nth-of-type(8) {
        margin-bottom: 96px;
      }
    }
  }

  &__phone {
    width: 100%;
    position: relative;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }

  &__phone-link {
    text-decoration: none;
  }

  &__phone-number {
    font-size: 18px;
  }

  &__copy-right {
    font-size: 11px;
    color: #5a646e;
  }

  &__cross-switch {
    width: 24px;
    height: 24px;
    line-height: 12px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 20px;

    @media screen and (min-width: 576px) {
      top: 24px;
      left: 24px;
    }

    &:hover {
      border: 1px solid #50287d;
    }
  }

  &__cross-image {
    width: 24px;
    height: 24px;
  }
}

// transition name="menu-mobil"
.menu-mobil-enter-active,
.menu-mobil-leave-active {
  transition: all 0.5s;
}

.menu-mobil-enter,
.menu-mobil-leave-to {
  opacity: 0;
  right: 100%;
}
// menu-mobil
</style>
