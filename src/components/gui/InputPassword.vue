<template>
  <div class="my-form__label-container">
    <label class="my-form__label">
      <transition name="my-form__title">
        <p class="my-form__title" v-if="isBottomMyFormTitle">Пароль</p>
      </transition>

      <transition name="my-form__title-else">
        <p class="my-form__title-else" v-if="!isBottomMyFormTitle">Пароль</p>
      </transition>

      <input
        class="my-form__field"
        type="text"
        name="password"
        @focus="onPasswordFocus"
        @blur="onPasswordBlur"
        :class="$v.form.password.$error ? 'my-form__field_invalid' : ''"
        v-model.trim="form.password"
      />
      <p class="my-form__error" v-if="$v.form.password.$dirty && !$v.form.password.required">
        Обязательное поле
      </p>

      <p class="my-form__error" v-if="$v.form.password.$dirty && !$v.form.password.minLength">
        Минимальное количество символов 12
      </p>
    </label>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email, numeric } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'InputPassword',

  data() {
    return {
      isBottomMyFormTitle: true,
      form: { password: '' },
    }
  },
  validations: {
    form: {
      password: { required, minLength: minLength(12) },
    },
  },
  methods: {
    onPasswordFocus() {
      this.isBottomMyFormTitle = false
    },

    onPasswordBlur() {
      this.$v.form.password.$touch()
      if (this.$v.form.password.required) {
        this.isBottomMyFormTitle = false
      } else {
        this.isBottomMyFormTitle = true
      }
    },
  },
}
</script>
