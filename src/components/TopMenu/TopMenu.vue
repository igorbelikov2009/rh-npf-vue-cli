<template>
  <header class="top-menu" :class="{ 'top-menu_news': ifBackgroundWhite }">
    <div class="top-menu__container">
      <div class="top-menu__row">
        <div class="top-menu__left-block">
          <button class="top-menu__button-lines" @click="openMenuMobil">
            <TripleIcon :light="!ifBackgroundWhite" icon="Hamburger" />
          </button>

          <div class="top-menu__logotype">
            <Logotypes
              :isBackgroundWhite="ifBackgroundWhite"
              @click.native="$router.push({ name: 'main' })"
            />
          </div>

          <div class="top-menu__nav">
            <router-link
              class="top-menu__link"
              :to="{ name: 'aboutFund' }"
              :class="{ 'top-menu__link_news': ifBackgroundWhite }"
              >О фонде</router-link
            >

            <router-link
              class="top-menu__link"
              :to="{ name: 'invest' }"
              :class="{ 'top-menu__link_news': ifBackgroundWhite }"
              >Инвестиционная деятельность</router-link
            >

            <router-link
              class="top-menu__link"
              :to="{ name: 'business' }"
              :class="{ 'top-menu__link_news': ifBackgroundWhite }"
              >Бизнесу</router-link
            >

            <router-link
              class="top-menu__link"
              :to="{ name: 'supportServiсe' }"
              :class="{ 'top-menu__link_news': ifBackgroundWhite }"
              >Поддержка</router-link
            >
            <router-link
              class="top-menu__link"
              :to="{ name: 'contacts' }"
              :class="{ 'top-menu__link_news': ifBackgroundWhite }"
              >Контакты</router-link
            >
          </div>
        </div>

        <div class="top-menu__right-block">
          <div class="top-menu__contacts">
            <div class="top-menu__phone">
              <a class="top-menu__phone-link" href="tel:+78002004766">
                <p
                  class="top-menu__phone-number"
                  :class="{ 'top-menu__button-title_news': ifBackgroundWhite }"
                >
                  8 800 200-47-66
                </p>
              </a>

              <button
                class="top-menu__call-back"
                @click="openCallBack"
                :class="{ 'top-menu__call-back_news': ifBackgroundWhite }"
              >
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
              <TripleIcon :hovered="isLKButtonHovered" :light="!ifBackgroundWhite" icon="User" />
            </button>

            <p
              class="top-menu__button-title"
              :class="{ 'top-menu__button-title_news': ifBackgroundWhite }"
            >
              Личный кабинет
            </p>
          </div>
        </div>
      </div>
    </div>

    <transition name="call-back">
      <CallBackForm v-if="isCallBackFormVisible" @closeCallBack="closeCallBack" />
    </transition>

    <transition name="login-form">
      <LoginForm v-show="isLoginFormVisible" @closeLoginForm="closeLoginForm" />
    </transition>

    <transition name="menu-mobil">
      <MenuMobil v-if="isMenuMobilVisible" @closeMenuMobil="closeMenuMobil" />
    </transition>
  </header>
</template>

<script>
import Logotypes from '../general/Logotypes.vue';
import LoginForm from './LoginForm.vue';
import CallBackForm from './CallBackForm.vue';
import MenuMobil from './MenuMobil.vue';
import TripleIcon from '@/components/general/TripleIcon.vue';

export default {
  name: 'TopMenu',

  data() {
    return {
      isMenuMobilVisible: false,

      isLKButtonHovered: false,
      isLoginFormVisible: false,
      isCallBackFormVisible: false,
    };
  },
  props: {
    ifBackgroundWhite: { type: Boolean, default: false },
  },
  components: {
    Logotypes,
    LoginForm,
    CallBackForm,
    MenuMobil,
    TripleIcon,
  },
  methods: {
    openCallBack() {
      this.isCallBackFormVisible = !this.isCallBackFormVisible;
      if (this.isCallBackFormVisible === false) {
        document.body.style.overflow = '';
      }
      document.body.style.overflow = 'hidden';
    },
    closeCallBack() {
      this.isCallBackFormVisible = false;
      document.body.style.overflow = '';
    },
    openLoginForm() {
      this.isLoginFormVisible = !this.isLoginFormVisible;
      if (this.isLoginFormVisible === false) {
        document.body.style.overflow = '';
      }
      document.body.style.overflow = 'hidden';
    },
    closeLoginForm() {
      this.isLoginFormVisible = false;
      document.body.style.overflow = '';
    },
    openMenuMobil() {
      this.isMenuMobilVisible = true;
      document.body.style.overflow = 'hidden';
    },
    closeMenuMobil() {
      this.isMenuMobilVisible = false;
      document.body.style.overflow = '';
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

  // top-menu_news
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
    align-items: center;
  }

  &__button-lines {
    cursor: pointer;
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 18px;
    position: absolute;
    top: 27.5px;
    left: 18px;

    @media screen and (min-width: 576px) {
      left: 36px;
    }

    @media screen and (min-width: 1300px) {
      display: none;
      // display: block;
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
    // top-menu__link_news
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

    // top-menu__button-title_news
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

    // top-menu__call-back_news
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

    // top-menu__button-title_news
    &_news {
      color: #78828c;

      &:hover {
        color: #000;
      }
    }
  }
}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

.icon-user__icon {
  &:first-of-type {
    display: none;
  }
}
</style>
