<template>
  <label class="my-input__label">
    <transition name="my-input__title">
      <p class="my-input__title" v-if="isBottomMyFormTitle">Телефон</p>
    </transition>

    <transition name="my-input__title-else">
      <p class="my-input__title-else" v-if="!isBottomMyFormTitle">Телефон</p>
    </transition>

    <input
      class="my-input__field  tel-number"
      type="number"
      name="phone"
      autocomplete="on"
      @focus="onPhoneFocus"
      @blur="onPhoneBlur"
      @input="$emit('input', $event.target.value)"
      :class="$v.form.phone.$error ? 'my-input__field_invalid' : ''"
    />

    <p class="my-input__error" v-if="$v.form.phone.$dirty && !$v.form.phone.required">
      Обязательное поле
    </p>

    <p
      class="my-input__error"
      v-if="$v.form.phone.$dirty && $v.form.phone.required && $v.form.phone.$invalid"
    >
      Некорректный номер телефона
    </p>
  </label>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, email, numeric } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'InputPhone',
  // новое
  model: {
    // здесь связь модуля v-model="searchText2" с родительским компонентом ProductList
    prop: 'value',
    event: 'input',
  },
  // новое

  data() {
    return {
      isBottomMyFormTitle: true,
      // form: { phone: '' },
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
    onPhoneBlur(event) {
      console.log('onPhoneBlur', event.target.value.length)
      // this.$v.form.phone.$touch()
      if (event.target.value.length > 0) {
        console.log('123')
        this.isBottomMyFormTitle = false
      } else {
        this.isBottomMyFormTitle = true
        console.log('0')
      }
    },
  },
}
</script>
