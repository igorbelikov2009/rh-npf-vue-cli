<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__header">
        <div class="footer__logotype">
          <Logotypes
            :isBackgroundWhite="ifBackgroundWhite"
            @click.native="$router.push({ name: 'main' })"
          />
        </div>

        <div>
          <img class="footer__logos-items" src="/icons/logoNapf.svg" alt="logo" />

          <img class="footer__logos-items" src="/icons/logoAeb.svg" alt="logo" />

          <img src="/icons/logoExpert.svg" alt="logo" />
        </div>
      </div>
      <div class="footer__phone">
        <h2 class="footer__phone-number">8 800 200-47-66</h2>
      </div>

      <div class="footer__menu">
        <div class="footer__nav">
          <div class="footer__column">
            <router-link class="footer__link " :to="{ path: '/support#form' }"
              >Написать нам</router-link
            >

            <router-link class="footer__link" :to="{ path: 'support#questionsAnswers' }"
              >Вопросы и ответы</router-link
            >

            <router-link class="footer__link" :to="{ name: 'aboutFund' }">О Фонде</router-link>

            <router-link class="footer__link" :to="{ name: 'management' }"
              >Руководство Фондом</router-link
            >
          </div>

          <div class="footer__column">
            <router-link class="footer__link" :to="{ name: 'infoOpening' }"
              >Раскрытие информации</router-link
            >

            <router-link class="footer__link" :to="{ name: 'invest' }"
              >Инвестиционная деятельность</router-link
            >

            <router-link class="footer__link" :to="{ name: 'business' }">Для бизнеса</router-link>

            <router-link class="footer__link" :to="{ path: '/main#calculator' }"
              >Калькулятор</router-link
            >
          </div>

          <div class="footer__column">
            <router-link class="footer__link" :to="{ name: 'newsPage' }">Новости</router-link>

            <router-link class="footer__link" :to="{ name: 'newPage' }"
              >Новости страница (Налогообложение)</router-link
            >
          </div>
        </div>

        <div class="footer__copyright-wrapper">
          <div class="footer__copyright">
            <a
              class="footer__copyright-link"
              href="/pdf/infoOpening/archive-aktsionerov/01 Beneficiaries structure 16.03.2021.pdf"
            >
              Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых
              находится Фонд (соответствует информации, направленной в Банк России 16.03.2021 г. для
              размещения на официальном сайте Банка России).</a
            >

            <p class="footer__copyright-npf">
              ©2009-2019 НПФРенессанс. Пенсии.
            </p>

            <p class="footer__copyright-license">
              Лицензия № 383/2 от 16 июня 2009 года
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logotypes from '@/components/general/Logotypes.vue';

export default {
  name: 'Footer',
  data() {
    return {
      ifBackgroundWhite: true,
    };
  },
  components: {
    Logotypes,
  },
};
</script>

<style lang="scss" scoped>
// footer
.footer {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  padding: 24px 0 32px;
  border-top: 1px solid #e4e4e4;

  @media screen and (min-width: 576px) {
    padding-top: 48px;
  }

  &__container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 24px;

    @media screen and (min-width: 576px) {
      padding: 0 28px;
    }
  }

  &__header {
    width: 100%;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      display: flex;
      justify-content: space-between;
      margin-bottom: 48px;
    }
  }

  &__logotype {
    text-decoration: none;
    outline: none;
    margin-bottom: 32px;

    @media screen and (min-width: 576px) {
      margin-bottom: 0;
    }
  }

  &__logos-items {
    margin-right: 0;

    @media screen and (min-width: 768px) {
      margin-right: 24px;
    }
  }

  &__phone {
    width: 100%;
    margin-bottom: 24px;
  }

  &__phone-number {
    font-size: 18px;
    line-height: 24px;
    color: #28323c;
  }

  &__menu {
    width: 100%;
    display: block;

    @media screen and (min-width: 1160px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  &__nav {
    width: 100%;
    display: block;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    @media screen and (min-width: 1160px) {
      width: 75%;
      margin-bottom: 0;
    }
  }

  &__column {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    padding-left: 0px;
    padding-right: 0px;

    @media screen and (min-width: 768px) {
      width: calc(33.33% - 16px);
      padding-left: 12px;
      padding-right: 12px;
      margin-right: 40px;
    }

    &:first-of-type {
      @media screen and (min-width: 768px) {
        padding-left: 0px;
      }
    }

    &:last-of-type {
      @media screen and (min-width: 768px) {
        padding-right: 0px;
      }

      @media screen and (min-width: 1160px) {
        padding-right: 12px;
      }
    }

    @media screen and (min-width: 1160px) {
      width: calc(33.33% - 20px);
      margin-bottom: 0;
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 0;
    color: #78828c;

    &:hover {
      color: #28323c;
    }

    &:last-of-type {
      margin-right: 0;
      margin-bottom: 0;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 16px;
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__copyright-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media screen and (min-width: 1160px) {
      width: 25%;
    }
  }

  &__copyright {
    margin-top: 0px;
    width: 100%;
    display: block;
    text-align: left;

    @media screen and (min-width: 1160px) {
      text-align: right;
      margin-top: 48px;
      width: calc(100% - 24px);
    }
  }

  &__copyright-link {
    text-decoration: none;
    display: block;
    font-size: 11px;
    line-height: 15px;
    margin-bottom: 16px;
    color: #78828c;

    &:hover {
      color: #28323c;
    }
  }

  &__copyright-npf {
    color: #78828c;
    font-size: 11px;
    line-height: 24px;
    margin-right: 0;
  }

  &__copyright-license {
    color: #78828c;
    font-size: 11px;
    line-height: 24px;
  }
}
// footer
</style>
