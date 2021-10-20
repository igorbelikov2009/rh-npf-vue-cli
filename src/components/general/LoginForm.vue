<template>
  <section class="login-form login-form__hide login-form__scale-1">
    <h1 class="login-form__heading">Вход</h1>

    <div class="my-form">
      <div class="my-form__label-container">
        <label class="my-form__label">
          <p class="my-form__title">Телефон</p>

          <input
            class="my-form__field tel-number"
            type="number"
            name="phone"
            autocomplete="on"
            tabindex="1"
          />

          <p class="my-form__error"></p>
        </label>
      </div>

      <div class="my-form__label-container">
        <label class="my-form__label">
          <p class="my-form__title">Электронная почта</p>

          <input class="my-form__field" type="email" name="email" autocomplete="on" tabindex="2" />

          <p class="my-form__error"></p>
        </label>
      </div>

      <div class="my-form__label-container">
        <label class="my-form__label">
          <p class="my-form__title">Пароль</p>

          <input class="my-form__field" type="text" name="password" tabindex="3" />

          <p class="my-form__error"></p>
        </label>
      </div>

      <div class="login-form__button-container">
        <button class="my-form__button primary-button" tabindex="4" disabled>
          Продолжить
        </button>
      </div>
    </div>

    <p class="login-form__title">
      Вход для клиентов
      <span class="login-form__title_span"> НПФ "Ренессанс - пенсии"</span>
    </p>

    <p class="login-form__subtitle">
      Нажимая кнопку «Продолжить», вы выражаете согласие на обработку своих персональных данных и
      принимаете условия соглашения
    </p>

    <button class="login-form__cross-switch">
      <img src="@/assets/icons/crossSwitch.svg" alt="" />
    </button>
  </section>
</template>

<style lang="scss" scoped>
// login-form
.login-form {
  width: 100%;
  max-width: 320px;
  padding-top: 48px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 36px;
  box-sizing: border-box;
  position: absolute;
  z-index: 6;
  background: #f3f5f7;
  box-shadow: 0px 4px 6px rgba(26, 65, 101, 0.15);

  @media screen and (min-width: 375px) {
    max-width: 375px;
    padding-left: 48px;
    padding-right: 48px;
  }

  @media screen and (min-width: 576px) {
    max-width: 432px;
    padding-left: 76.5px;
    padding-right: 76.5px;
  }

  // login-form__hide
  &__hide {
    // opacity: 0;
    opacity: 0.5;
  }

  // login-form__visible
  &__visible {
    opacity: 1;
  }

  // login-form__scale-01
  &__scale-01 {
    transform: scale(0.01);
    transition: transform 5000ms, opacity 500ms ease;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-delay: 0s;
  }

  // login-form__scale-1
  &__scale-1 {
    transform: scale(1);
    transition: transform 0.01ms, opacity 500ms ease;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-delay: 0s;
  }

  &__heading {
    font-size: 34px;
    line-height: 48px;
    color: #28323c;
    text-align: center;
    margin-bottom: 24px;
  }

  &__button-container {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  &__title {
    font-size: 13px;
    color: #50287d;
    text-align: center;
    margin-bottom: 28px;

    &_span {
      display: block;
      font-size: inherit;
      color: inherit;
      text-align: inherit;
    }
  }

  &__subtitle {
    font-size: 11px;
    color: #b5bdc8;
    text-align: center;
  }

  &__cross-switch {
    line-height: 12px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 6px;

    &:hover {
      border: 1px solid #50287d;
    }
  }
}
// login-form
</style>
