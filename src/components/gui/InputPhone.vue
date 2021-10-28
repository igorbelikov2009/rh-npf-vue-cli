<template>
  <div class="my-form__label-container">
    <label class="my-form__label">
      <transition name="my-form__title">
        <p class="my-form__title" v-if="isBottomMyFormTitle">Телефон</p>
      </transition>

      <transition name="my-form__title-else">
        <p class="my-form__title-else" v-if="!isBottomMyFormTitle">Телефон</p>
      </transition>

      <input
        class="my-form__field  tel-number"
        type="number"
        name="phone"
        autocomplete="on"
        @focus="onPhoneFocus"
        @blur="onPhoneBlur"
        :class="$v.form.phone.$error ? 'my-form__field_invalid' : ''"
        v-model.trim="form.phone"
      />

      <p class="my-form__error" v-if="$v.form.phone.$dirty && !$v.form.phone.required">
        Обязательное поле
      </p>

      <p
        class="my-form__error"
        v-if="$v.form.phone.$dirty && $v.form.phone.required && $v.form.phone.$invalid"
      >
        Некорректный номер телефона
      </p>
    </label>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email, numeric } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'InputPhone',

  data() {
    return {
      isBottomMyFormTitle: true,
      form: { phone: '' },
    }
  },
  validations: {
    form: {
      phone: { required, numeric, minLength: minLength(11), maxLength: maxLength(11) },
    },
  },
  methods: {
    onPhoneFocus() {
      this.isBottomMyFormTitle = false
      console.log('onPhoneFocus')
    },
    //
    onPhoneBlur() {
      console.log('onPhoneBlur')
      this.$v.form.phone.$touch()
      if (this.$v.form.phone.required) {
        this.isBottomMyFormTitle = false
      } else {
        this.isBottomMyFormTitle = true
      }
    },
  },
}
</script>
