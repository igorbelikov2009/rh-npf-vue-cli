<template>
  <header class="header">
    <div class="header__container">
      <div class="header__row">
        <div class="header__left-bloc">
          <button class="header__button-lines">
            <div class="header__line"></div>
            <div class="header__line"></div>
            <div class="header__line"></div>
          </button>

          <div class="header__logotype">
            <Logotypes />
          </div>

          <div class="header__nav">
            <a class="header__link" href="../templates/aboutFund.html">О фонде</a>
            <a class="header__link" href="../templates/invest.html">Инвестиционная деятельность</a>
            <a class="header__link" href="../templates/forBusiness.html">Бизнесу</a>
            <a class="header__link" href="../templates/supportService.html">Поддержка</a>
            <a class="header__link" href="../templates/contacts.html">Контакты</a>
          </div>
        </div>

        <div class="header__right-bloc">
          <div class="header__contacts">
            <div class="header__phone">
              <a class="header__phone-link" href="tel:+78002004766">
                <p class="header__phone-number">8 800 200-47-66</p>
              </a>

              <button class="header__obratnyy-zvonok">Обратный звонок</button>
            </div>
          </div>

          <div class="header__button-switch">
            <button class="header__button-icons">
              <IconUser
                v-for="(icon, index) in icons"
                v-bind:key="index"
                :isIconVisible="icon.isIconVisible"
                :imgUrl="icon.imgUrl"
              />
            </button>

            <p class="header__button-title">Личный кабинет</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logotypes from '../general/Logotypes'
import IconUser from '../general/IconUser'
import userColored from '@/assets/icons/generals/user/colored.svg'
import userLight from '@/assets/icons/generals/user/light.svg'
import userDark from '@/assets/icons/generals/user/dark.svg'

export default {
  name: 'Header',

  data() {
    return {
      userColored: userColored,
      userLight: userLight,
      userDark: userDark,

      icons: [
        { isIconVisible: false, imgUrl: userColored },
        { isIconVisible: false, imgUrl: userLight },
        { isIconVisible: true, imgUrl: userDark },
      ],
    }
  },
  components: {
    Logotypes,
    IconUser,
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 72px;
  position: absolute;
  top: 0;

  // header_news
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

  &__left-bloc {
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
    z-index: 2;

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

    // header__line_news
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
    z-index: 3;

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
    z-index: 2;

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

  &__right-bloc {
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

  &__obratnyy-zvonok {
    cursor: pointer;
    position: absolute;
    z-index: 2;
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
    z-index: 3;

    &:hover .header__button-title {
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
