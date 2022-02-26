<template>
  <section class="contacts-header">
    <div class="contacts-header__container">
      <div class="contacts-header__row">
        <div class="contacts-header__column">
          <h2 class="contacts-header__header">Контакты</h2>

          <p class="contacts-header__title">Телефон</p>

          <p class="contacts-header__paragraph">
            <span class="contacts-header__paragraph_span">Для звонков из Москвы</span>
            <a class="contacts-header__paragraph_link" href="tel:+4959334766"> +7 495 933-47-66</a>
          </p>

          <p class="contacts-header__paragraph">
            <span class="contacts-header__paragraph_span"
              >Для звонков из других регионов России</span
            >
            <a class="contacts-header__paragraph_link" href="tel:+8002004766"> 8 800 200-47-66</a>
          </p>

          <p class="contacts-header__paragraph">
            <span class="contacts-header__paragraph_span">Email</span>
            <a class="contacts-header__paragraph_link" href="#">
              info_npf@renpensions.com
            </a>
          </p>

          <p class="contacts-header__paragraph">
            <br />
          </p>

          <p class="contacts-header__paragraph">
            <a class="contacts-header__paragraph_link" href=""> Написать нам</a>
          </p>
        </div>

        <div class="contacts-header__column">
          <h2 class="contacts-header__header_address">Адрес</h2>

          <p class="contacts-header__paragraph">
            115114, Россия, Москва, Дербеневская набережная, 7, стр. 22, подъезд B, 3 этаж
          </p>

          <p class="contacts-header__paragraph_heading">Время работы</p>

          <p class="contacts-header__paragraph">
            Понедельник - пятница: с 9:00 до 19:00 (МСК) <br />
            Суббота и воскресенье: выходной
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts',
};
</script>

<style lang="scss" scoped>
// contacts-header
.contacts-header {
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
  }

  &__column {
    width: 100%;

    @media screen and (min-width: 576px) {
      width: 50%;
    }

    &:first-of-type {
      margin-bottom: 48px;

      @media screen and (min-width: 576px) {
        margin-bottom: 0;
      }
    }
  }

  &__header {
    display: block;
    width: 100%;
    font-size: 34px;
    line-height: 48px;
    color: #000;
    margin-bottom: 24px;

    &_address {
      display: block;
      width: 100%;
      font-size: 34px;
      line-height: 48px;
      color: #000;
      margin-bottom: 24px;

      @media screen and (min-width: 576px) {
        margin-bottom: 68px;
      }
    }
  }

  &__title {
    display: block;
    color: #28323c;
    font-size: 18px;
    line-height: 1.5rem;
    font-weight: 500;
    margin: 24px 0;
  }

  &__paragraph {
    display: block;
    color: #5a646e;
    line-height: 1.5rem;
    margin: 12px 0;
    font-weight: 500;

    &_span {
      display: block;
      font-size: 13px;
      line-height: 24px;
      font-style: italic;
      color: #5a646e;
    }

    &_link {
      display: block;
      font-size: 16px;
      line-height: 24px;
      color: #50287d;
      text-decoration: none;
      outline: none;
    }

    &_heading {
      display: block;
      color: #28323c;
      font-size: 18px;
      line-height: 1.5rem;
      font-weight: 500;
      margin: 24px 0;
    }
  }
} // contacts-header
</style>
