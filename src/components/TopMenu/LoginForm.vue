<template>
  <form class="login-form" @submit.prevent="checkForm">
    <!-- submit  на предке работает только на тэге <form><form/>  -->
    <h1 class="login-form__heading">Вход</h1>

    <div class="login-form__block-of-forms">
      <div class="login-form__input-container">
        <PhoneInput v-model.trim="form.phone" />
      </div>

      <div class="login-form__input-container">
        <EmailInpit />
      </div>

      <div class="login-form__input-container">
        <PasswordInput />
      </div>

      <div class="login-form__button-container">
        <button class="my-button__button primary-button">
          Продолжить
        </button>
        <!--    :disabled="!registrationPassed" -->
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

    <button class="login-form__cross-switch" @click="closeLoginForm">
      <img class="login-form__cross-image" src="@/assets/icons/triple/Cross/Dark.svg" alt="cross" />
    </button>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email, numeric } from 'vuelidate/lib/validators'

import PhoneInput from '../gui/PhoneInput'
import EmailInpit from '../gui/EmailInpit'
import PasswordInput from '../gui/PasswordInput'

export default {
  mixins: [validationMixin],

  data() {
    return {
      isBottomMyFormTitle: true,
      registrationPassed: false,
      form: { phone: '', email: '', password: '' },
    }
  },

  validations: {
    form: {
      phone: { required, numeric, minLength: minLength(11), maxLength: maxLength(11) },
      email: { required, email },
      password: { required, minLength: minLength(12) },
    },
  },

  methods: {
    closeLoginForm() {
      console.log(this.isHideLoginForm)
      this.$emit('closeLoginForm')
    },

    checkForm() {
      console.log('Ok')
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.registrationPassed = true
        console.log('Валидация прошла успешно', this.form)
      }
    },
  },
  components: {
    PhoneInput,
    EmailInpit,
    PasswordInput,
  },
}
</script>

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
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  background: #f3f5f7;
  box-shadow: 0px 4px 6px rgba(26, 65, 101, 0.15);
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);

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

  &__block-of-forms {
    width: 100%;
  }

  &__heading {
    font-size: 34px;
    line-height: 48px;
    color: #28323c;
    text-align: center;
    margin-bottom: 24px;
  }

  &__input-container {
    width: 100%;
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

  &__cross-image {
    width: 24px;
    height: 24px;
  }
}
// login-form

// transition name="login-form"
.login-form-enter-active,
.login-form-leave-active {
  transition: all 0.5s;
}

.login-form-enter,
.login-form-leave-to {
  opacity: 0;
  transform: scale(0.01);
}
</style>
