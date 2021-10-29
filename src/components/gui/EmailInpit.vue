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
      @focus="onFocus"
      @blur="onBlur"
      v-model.trim="email"
      @input="$emit('input', $event.target.value)"
      :class="$v.email.$error ? 'my-input__field_invalid' : ''"
    />

    <p class="my-input__error" v-if="$v.email.$dirty && !$v.email.required">
      Обязательное поле
    </p>

    <p class="my-input__error" v-if="$v.email.$dirty && $v.email.required && !$v.email.email">
      Некорректный email
    </p>
  </label>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'InputEmail',

  data() {
    return {
      isBottomMyFormTitle: true,
      email: '',
    }
  },

  validations: {
    email: { required, email },
  },

  methods: {
    onFocus() {
      this.isBottomMyFormTitle = false
    },

    onBlur() {
      this.$v.email.$touch()
      if (this.$v.email.required) {
        this.isBottomMyFormTitle = false
      } else {
        this.isBottomMyFormTitle = true
      }
    },
  },
}
</script>
