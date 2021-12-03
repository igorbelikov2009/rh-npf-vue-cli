<template>
  <header class="top-menu">
    <div class="top-menu__container">
      <div class="top-menu__row">
        <div class="top-menu__left-block">
          <button class="top-menu__button-lines" @click="openMenuMobil">
            <div class="top-menu__line"></div>
            <div class="top-menu__line"></div>
            <div class="top-menu__line"></div>
          </button>

          <div class="top-menu__logotype">
            <Logotypes @click.native="$router.push({ name: 'main' })" />
          </div>

          <div class="top-menu__nav">
            <a class="top-menu__link" href="../templates/aboutFund.html">О фонде</a>
            <a class="top-menu__link" href="../templates/invest.html"
              >Инвестиционная деятельность</a
            >
            <router-link class="top-menu__link" :to="{ name: 'business' }">Бизнесу</router-link>
            <a class="top-menu__link" href="../templates/supportService.html">Поддержка</a>
            <a class="top-menu__link" href="../templates/contacts.html">Контакты</a>
          </div>
        </div>

        <div class="top-menu__right-block">
          <div class="top-menu__contacts">
            <div class="top-menu__phone">
              <a class="top-menu__phone-link" href="tel:+78002004766">
                <p class="top-menu__phone-number">8 800 200-47-66</p>
              </a>

              <button class="top-menu__call-back" @click="openCallBack">
                Обратный звонок
              </button>
            </div>
          </div>

          <div
            class="top-menu__button-switch"
            @click="openLoginForm"
            @mouseover="isLKButtonHovered = true"
            @mouseout="isLKButtonHovered = false"
          >
            <button class="top-menu__button-icons">
              <TripleIcon :hovered="isLKButtonHovered" light icon="User" />
            </button>

            <p class="top-menu__button-title">Личный кабинет</p>
          </div>
        </div>
      </div>
    </div>

    <transition name="call-back">
      <CallBackForm v-if="isHideCallBackForm" @closeCallBack="openCallBack" />
    </transition>

    <transition name="login-form">
      <LoginForm v-show="isHideLoginForm" @closeLoginForm="openLoginForm" />
    </transition>

    <transition name="menu-mobil">
      <MenuMobil v-if="isHideMenuMobil" @closeMenuMobil="openMenuMobil" />
    </transition>
  </header>
</template>

<script>
import Logotypes from '../general/Logotypes.vue';
import LoginForm from './LoginForm.vue';
import CallBackForm from './CallBackForm.vue';
import MenuMobil from './MenuMobil.vue';
// import userColored from '../../../public/icons/triple/User/colored.svg';
// import userLight from '../../../public/icons/triple/User/light.svg';
// import userDark from '../../../public/icons/triple/User/dark.svg';
import TripleIcon from '@/components/general/TripleIcon.vue';

export default {
  name: 'TopMenu',

  data() {
    return {
      isLKButtonHovered: false,
      // userColored: userColored,
      // userLight: userLight,
      // userDark: userDark,
      isHideLoginForm: false,
      isHideCallBackForm: false,
      isHideMenuMobil: false,

      // icons: [
      //   { isIconVisible: false, imgUrl: userColored },
      //   { isIconVisible: false, imgUrl: userLight },
      //   { isIconVisible: true, imgUrl: userDark },
      // ],
    };
  },
  components: {
    Logotypes,
    LoginForm,
    CallBackForm,
    MenuMobil,
    TripleIcon,
  },
  methods: {
    openLoginForm() {
      this.isHideLoginForm = !this.isHideLoginForm;
    },
    openCallBack() {
      this.isHideCallBackForm = !this.isHideCallBackForm;
    },
    openMenuMobil() {
      this.isHideMenuMobil = !this.isHideMenuMobil;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-menu {
  width: 100%;
  height: 72px;
  position: absolute;
  top: 0;

  // top-menu__news
  &_news {
    position: relative;
    border-bottom: 1px solid #e4e4e4;
  }

  &__container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 24px 18px;

    @media screen and (min-width: 576px) {
      padding-left: 28px;
      padding-right: 28px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__left-block {
    flex: content;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

  &__button-lines {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 18px;
    height: 17px;
    margin-right: 18px;
    position: absolute;
    top: 27.5px;
    left: 18px;

    @media screen and (min-width: 576px) {
      left: 36px;
    }

    @media screen and (min-width: 1300px) {
      display: none;
    }
  }

  &__line {
    width: 18px;
    height: 3px;
    background: rgba(255, 255, 255, 0.6);

    &:first-of-type {
      background: #ffffff;
    }

    &:last-of-type {
      background: rgba(255, 255, 255, 0.3);
    }

    // top-menu__line_news
    &_news {
      background: #6f7479;

      &:first-of-type {
        background: black;
      }

      &:last-of-type {
        background: rgba(27, 27, 27, 0.3);
      }
    }
  }

  &__logotype {
    display: block;

    margin-left: 36px;

    @media screen and (min-width: 576px) {
      margin-left: 54px;
    }

    @media screen and (min-width: 1300px) {
      margin-left: 0;
    }
  }

  &__nav {
    display: none;
    justify-content: space-between;

    @media screen and (min-width: 1300px) {
      display: flex;
      margin-left: 12px;
    }
  }

  &__link {
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    color: #b5bdc8;
    margin-left: 12px;
    margin-right: 12px;

    &:hover {
      color: white;
    }

    @media screen and (min-width: 1440px) {
      font-size: 16px;
      margin-left: 16px;
      margin-right: 16px;
    }

    &_news {
      color: #78828c;

      &:hover {
        color: #000;
      }
    }
  }

  &__right-block {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  &__contacts {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  &__phone {
    min-width: 124px;
    margin-right: 64px;
  }

  &__phone-link {
    text-decoration: none;
  }

  &__phone-number {
    color: white;

    &_news {
      color: #000;
    }
  }

  &__call-back {
    cursor: pointer;
    position: absolute;
    top: 24px;
    left: 0px;
    font-size: 11px;
    color: #b5bdc8;

    &:hover {
      color: white;
    }

    &_news {
      color: #78828c;

      &:hover {
        color: #000;
      }
    }
  }

  &__button-switch {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    &:hover .top-menu__button-title {
      color: #b5bdc8;
    }

    &:hover .icon-user__icon:first-of-type {
      display: block;
    }

    &:hover .icon-user__icon:nth-of-type(2) {
      display: none;
    }
  }

  &__button-icons {
    width: 24px;
    height: 24px;
    position: relative;
  }

  &__button-title {
    margin-left: 12px;
    cursor: pointer;
    display: none;
    color: white;

    @media screen and (min-width: 768px) {
      display: block;
    }

    &_news {
      color: #78828c;

      &:hover {
        color: #000;
      }
    }
  }
}

.icon-user__icon {
  &:first-of-type {
    display: none;
  }
}
</style>
