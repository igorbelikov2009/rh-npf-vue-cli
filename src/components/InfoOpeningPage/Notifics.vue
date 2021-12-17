<template>
  <section class="notifics">
    <div class="notifics__container">
      <h2 class="notifics__heading">Уведомления</h2>

      <div class="notifics__triple-switch">
        <div class="triple-switch">
          <div class="triple-switch__label-container">
            <label class="triple-switch__label triple-switch__label_chosen">
              <input class="triple-switch__field" type="radio" name="information" value="1" />
            </label>

            <label class="triple-switch__label">
              <input class="triple-switch__field" type="radio" name="information" value="2" />
            </label>

            <label class="triple-switch__label">
              <input class="triple-switch__field" type="radio" name="information" value="3" />
            </label>
          </div>
        </div>
      </div>

      <div class="notifics__content">
        <div class="notifics__content-visible">
          <p class="notifics__paragraph">
            <span class="notifics__paragraph-small">12.01.2021</span>

            <span class="notifics__paragraph-small"
              >АО НПФ «Ренессанс пенсии» заключил договор доверительного управления пенсионными
              резервами №311220/1 от 31 декабря 2020 года с Акционерным обществом «Управляющая
              компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001
              года).</span
            >
          </p>
        </div>

        <div class="notifics__content-not-visible">
          <p class="notifics__paragraph">
            <span class="notifics__paragraph-small">21.02.2020</span>

            <span class="notifics__paragraph-small"
              >АО НПФ «Ренессанс пенсии» заключил договоры доверительного управления пенсионными
              резервами №200220/1 от 20 февраля 2020 года и №200220/2 от 20 февраля 2020 года с
              Акционерным обществом «Управляющая компания «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия №
              21-000-1-00054 от 3 декабря 2001 года).</span
            >
          </p>
        </div>

        <div class="notifics__content-not-visible">
          <p class="notifics__paragraph">
            <span class="notifics__paragraph-small">29.05.2018</span>

            <span class="notifics__paragraph-small"
              >НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» заключил договор доверительного управления пенсионными
              резервами № 250518/1 от 25 мая 2018 года с Акционерным обществом «Управляющая компания
              «СПУТНИК-УПРАВЛЕНИЕ КАПИТАЛОМ» (лицензия № 21-000-1-00054 от 3 декабря 2001
              года).</span
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Notifics',
};
</script>

<style lang="scss" scoped>
// notifics
.notifics {
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

  &__heading {
    display: block;
    width: 100%;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 48px;
    }
  }

  &__triple-param-switch {
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }

  &__content {
    width: 100%;
  }

  // notifics__content-visible
  &__content-visible {
    display: block;
  }

  // notifics__content-not-visible
  &__content-not-visible {
    display: none;
  }

  &__paragraph {
    display: block;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin-top: 24px;
    margin-bottom: 12px;
    color: #5a646e;
  }

  &__paragraph-small {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    font-style: normal;
    font-weight: 400;
  }
}
// notifics

//  triple-switch
.triple-switch {
  display: flex;

  &__label-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #f3f5f7;
    padding: 4px;
    border-radius: 28px;
    box-sizing: border-box;
  }

  &__label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    background-color: #dfe6ec;
    opacity: 1;
    //
    transition: color 0.3s, background 0.4s;
    transition-property: color, background;
    transition-duration: 0.3s, 0.4s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;

    @media screen and (min-width: 1160px) {
      padding: 24px;
      border-radius: 24px;
    }

    &:hover {
      opacity: 0.8;
    }

    //  triple-switch__label_chosen
    &_chosen {
      background: #50287d;
    }
  }

  &__field {
    display: none;
  }
} // triple-switch
</style>
