<template>
  <section class="info">
    <div class="info__head">
      <h1 class="info__heading">
        Ренессанс пенсии входит в число десяти крупнейших негосударственных пенсионных фондов России
      </h1>

      <p class="info__subheading">
        По состоянию на 31 марта 2019 фонд ведет более 150 корпоративных пенсионных планов, объем
        резервов которых превышает 18 млрд. рублей.
      </p>
    </div>

    <div class="info__row">
      <div class="info__block">
        <img class="info__image" src="/images/main/girl.jpg" alt="girl" />

        <div class="info__offer">
          <h1 class="info__title">Для себя</h1>

          <p class="info__subtitle">
            Сохраните уровень дохода после окончания карьеры — оформите индивидуальный пенсионный
            план и формируйте собственную пенсию.
          </p>
          <div class="info__button-container">
            <button class="info__button primary-button">
              Хочу знать больше
            </button>
          </div>
        </div>
      </div>

      <div class="info__block">
        <img class="info__image" src="/images/main/building.jpg" alt="building" />

        <div class="info__offer">
          <h1 class="info__title">Для бизнеса</h1>

          <p class="info__subtitle">
            Корпоративные пенсионные программы дополнят соц пакет сотрудников и станут долгосрочным
            инструментом мотивации персонала.
          </p>
          <div class="info__button-container">
            <button class="info__button primary-button">
              Отправить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// info
.info {
  width: 100%;
  max-width: 960px;
  background-color: #fff;
  margin: 0 auto;
  padding: 24px;
  padding-bottom: 72px;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 72px;
    // padding-bottom: 120px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }

  &__head {
    width: 100%;
    padding: 0;
    margin-bottom: 48px;

    @media screen and (min-width: 768px) {
      margin-bottom: 72px;
    }
  }

  &__heading {
    display: block;
    width: 100%;
    max-width: 680px;
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    color: #28323c;

    @media screen and (min-width: 768px) {
      font-size: 34px;
      line-height: 48px;
    }

    @media screen and (min-width: 1024px) {
      max-width: 860px;
    }
  }

  &__subheading {
    display: block;
    width: 100%;
    max-width: 440px;
    font-size: 13px;
    color: #78828c;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1024px) {
      max-width: 560px;
    }
  }

  &__row {
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__block {
    width: 100%;
    padding: 0;
    position: relative;

    @media screen and (min-width: 576px) {
      max-width: 50%;
    }

    &:first-of-type .info__image {
      position: static;

      @media screen and (min-width: 576px) {
        position: relative;
        margin-top: 90px;
        margin-bottom: 87px;
      }

      @media screen and (min-width: 1024px) {
        margin-top: 120px;
        margin-bottom: 112px;
      }
    }

    &:last-of-type .info__image {
      position: static;

      @media screen and (min-width: 576px) {
        position: absolute;
        top: 0;
        right: 0;
      }
    }

    &:last-of-type .info__offer {
      position: static;

      @media screen and (min-width: 576px) {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }

  &__image {
    aspect-ratio: 660 / 440;
    width: 100%;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      width: calc(100% + 56px);
    }

    @media screen and (min-width: 768px) {
      width: calc(100% + 80px);
    }
  }

  &__offer {
    width: 100%;
    max-width: 100%;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      max-width: 254px;
    }

    @media screen and (min-width: 768px) {
      max-width: 320px;
    }

    @media screen and (min-width: 1300px) {
      max-width: 360px;
    }
  }

  &__title {
    font-size: 18px;
    line-height: 24px;
    color: #28323c;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      font-size: 34px;
      line-height: 48px;
    }
  }

  &__subtitle {
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  &__button-container {
    max-width: 200px;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 0;
    }
  }
}
// info
</style>
