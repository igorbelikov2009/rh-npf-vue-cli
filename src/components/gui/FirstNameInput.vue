<template>
  <label class="my-input__label">
    <transition name="my-input__title">
      <p class="my-input__title" v-if="isBottomMyFormTitle">Ваше имя</p>
    </transition>

    <transition name="my-input__title-else">
      <p class="my-input__title-else" v-if="!isBottomMyFormTitle">Ваше имя</p>
    </transition>

    <input
      class="my-input__field"
      type="text"
      name="firstName"
      @focus="onFocus"
      @blur="onBlur"
      v-model.trim="firstName"
      @input="$emit('input', $event.target.value)"
      :class="$v.firstName.$error ? 'my-input__field_invalid' : ''"
    />
    <p class="my-input__error" v-if="$v.firstName.$dirty && !$v.firstName.required">
      Обязательное поле
    </p>

    <p class="my-input__error" v-if="$v.firstName.$dirty && !$v.firstName.minLength">
      Некорректное имя
    </p>
  </label>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'FirstNameInput',

  data() {
    return {
      isBottomMyFormTitle: true,
      firstName: '',
    }
  },
  validations: {
    firstName: { required, minLength: minLength(4) },
  },
  methods: {
    onFocus() {
      this.isBottomMyFormTitle = false
    },

    onBlur() {
      this.$v.firstName.$touch()
      if (this.$v.firstName.required) {
        this.isBottomMyFormTitle = false
      } else {
        this.isBottomMyFormTitle = true
      }
    },
  },
}
</script>
