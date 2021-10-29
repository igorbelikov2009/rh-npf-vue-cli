<template>
  <label class="my-input__label">
    <transition name="my-input__title">
      <p class="my-input__title" v-if="isBottomMyFormTitle">Электронная почта</p>
    </transition>

    <transition name="my-input__title-else">
      <p class="my-input__title-else" v-if="!isBottomMyFormTitle">Электронная почта</p>
    </transition>

    <input
      class="my-input__field"
      type="email"
      name="email"
      autocomplete="on"
      @focus="onEmailFocus"
      @blur="onEmailBlur"
      :class="$v.form.email.$error ? 'my-input__field_invalid' : ''"
      v-model.trim="form.email"
    />

    <p class="my-input__error" v-if="$v.form.email.$dirty && !$v.form.email.required">
      Обязательное поле
    </p>

    <p
      class="my-input__error"
      v-if="$v.form.email.$dirty && $v.form.email.required && !$v.form.email.email"
    >
      Некорректный email
    </p>
  </label>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email, numeric } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'InputEmail',

  data() {
    return {
      isBottomMyFormTitle: true,
      form: { email: '' },
    }
  },

  validations: {
    form: {
      email: { required, email },
    },
  },

  methods: {
    onEmailFocus() {
      this.isBottomMyFormTitle = false
      //
      console.log('onEmailFocus')
    },

    onEmailBlur() {
      console.log('onEmailBlur')
      //
      this.$v.form.email.$touch()
      if (this.$v.form.email.required) {
        this.isBottomMyFormTitle = false
      } else {
        this.isBottomMyFormTitle = true
      }
    },
  },
}
</script>
