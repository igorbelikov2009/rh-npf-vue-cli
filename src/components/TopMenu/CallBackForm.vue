<template>
  <form class="call-back" @submit.prevent="checkForm">
    <div class="call-back__input-container">
      <FirstNameInput v-model.trim="$v.form.firstName.$model" />
    </div>

    <div class="call-back__input-container">
      <PhoneInput v-model.trim="$v.form.phone.$model" />
    </div>

    <div class="call-back__button-container">
      <button class="my-button__button primary-button">
        Отправить
      </button>
    </div>

    <button class="call-back__cross-switch" @click="closeCallBack">
      <img class="call-back__cross-image" src="@/assets/icons/triple/Cross/Dark.svg" alt="cross" />
    </button>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'

import PhoneInput from '../gui/PhoneInput'
import FirstNameInput from '../gui/FirstNameInput'
export default {
  mixins: [validationMixin],

  name: 'CallBackForm',
  data() {
    return {
      isBottomMyFormTitle: true,
      registrationPassed: false,

      form: {
        firstName: '',
        phone: '',
      },
    }
  },
  validations: {
    form: {
      firstName: { required, minLength: minLength(4) },
      phone: { required, numeric, minLength: minLength(11), maxLength: maxLength(11) },
    },
  },
  methods: {
    closeCallBack() {
      this.$emit('closeCallBack')
    },

    checkForm() {
      this.$v.form.$touch()

      if (!this.$v.form.$error) {
        this.registrationPassed = true
        console.log('Валидация прошла успешно', this.form)
        this.$emit('closeCallBack')
      }
    },
  },

  components: {
    FirstNameInput,
    PhoneInput,
  },
}
</script>

<style lang="scss" scoped>
// call-back
.call-back {
  width: 100%;
  max-width: 320px;
  padding: 36px;
  padding-top: 48px;
  background: #f3f5f7;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 576px) {
    top: 18%;
  }

  &__input-container {
    width: 100%;
  }

  &__button-container {
    margin-top: 24px;
    margin-bottom: 36px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
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

// transition name="call-back"
.call-back-enter-active,
.call-back-leave-active {
  transition: all 0.5s;
}

.call-back-enter,
.call-back-leave-to {
  opacity: 0;
  left: 0%;
  top: 0%;
}
// call-back
</style>
