<template>
  <section class="login-form" ref="loginForm" :class="{ 'login-form__hide': isHideLoginForm }">
    <h1 class="login-form__heading">Вход</h1>

    <div class="my-form">
      <div class="my-form__label-container">
        <label class="my-form__label">
          <transition name="my-form__title">
            <p class="my-form__title" v-if="isBottomFormTitle">Телефон</p>
          </transition>

          <transition name="my-form__title-else">
            <p class="my-form__title-else" v-if="!isBottomFormTitle">Телефон</p>
          </transition>

          <input
            class="my-form__field tel-number"
            type="number"
            name="phone"
            autocomplete="on"
            tabindex="1"
            @focus="focus"
            @blur="blur"
            @input="input"
            v-model.trim="$v.phone.$model"
          />

          <p class="my-form__error"></p>
        </label>
      </div>

      <div class="my-form__label-container">
        <label class="my-form__label">
          <p class="my-form__title">Электронная почта</p>

          <input
            class="my-form__field"
            type="email"
            name="email"
            autocomplete="on"
            tabindex="2"
            v-model.trim="email"
          />

          <p class="my-form__error"></p>
        </label>
      </div>

      <div class="my-form__label-container">
        <label class="my-form__label">
          <p class="my-form__title">Пароль</p>

          <input
            class="my-form__field"
            type="text"
            name="password"
            tabindex="3"
            v-model.trim="password"
          />

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

    <button class="login-form__cross-switch" @click="closeLoginForm">
      <img src="@/assets/icons/crossSwitch.svg" alt="" />
    </button>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, numeric } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  props: {
    isHideLoginForm: { type: Boolean, default: false },
  },
  data() {
    return {
      isBottomFormTitle: true,
      phone: '',
      email: '',
      password: '',
    }
  },

  validations: {
    phone: { required, numeric },
    /*
     phone: {
      fieldValidation(value) {
        console.log(value)
        return value.length >= 1
      },
    },
    */
  },

  methods: {
    closeLoginForm() {
      console.log(this.isHideLoginForm)
      this.$emit('closeLoginForm')
    },

    focus() {
      this.isBottomFormTitle = false
      console.log('focus')
    },
    blur() {
      if (this.$v.phone.required && this.$v.phone.numeric) {
        this.isBottomFormTitle = false
      } else {
        this.isBottomFormTitle = true
      }
    },
    input() {
      console.log('input')
    },
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
  z-index: 6;
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

// my-form
.my-form {
  width: 100%;

  &__label-container {
    width: 100%;
  }

  &__label {
    width: 100%;
    padding-bottom: 20px;
    position: relative;
  }

  &__title {
    position: absolute;
    top: 24px;
    left: 0px;
    font-size: 16px;
    color: #78828c;
  }

  &__title-leave-active,
  &__title-enter-active {
    transition: all 0.5s;
  }

  &__title-leave-to,
  &__title-enter {
    top: 0px;
    font-size: 11px;
  }

  &__title-else {
    position: absolute;
    top: 0;
    left: 0px;
    font-size: 11px;
    color: #78828c;
  }

  &__title-else-enter-active {
    transition: all 0.01s 0.49s;
  }

  &__title-else-enter {
    opacity: 0;
  }

  &__field {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    padding: 24px 0 8px;
    color: #28323c;
    border-bottom: 1px solid #b5bdc8;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      line-height: 23px;
      border-bottom: 2px solid #50287d;
    }

    &:focus {
      line-height: 23px;
      border-bottom: 2px solid #50287d;
    }
  }

  &__error {
    display: block;
    position: absolute;
    top: 67px;
    left: 0;
    font-size: 12px;
    line-height: 12px;
    color: red;
  }

  &__button-container {
    width: 100%;
    max-width: 184px;
    margin-bottom: 24px;
  }

  &__button {
    &[disabled] {
      background-color: #d2dce6;
    }
  }
} // my-form

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.01);
}

// .my-form__title-leave-active {
//   transition: all 2s;
// }

// .my-form__title-leave-to {
//   top: 0px;
//   font-size: 11px;
// }
</style>
