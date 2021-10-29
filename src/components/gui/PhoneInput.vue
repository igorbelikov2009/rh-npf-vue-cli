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
      @focus="onFocus"
      @blur="onBlur"
      v-model.trim="phone"
      @input="$emit('input', $event.target.value)"
      :class="$v.phone.$error ? 'my-input__field_invalid' : ''"
    />

    <p class="my-input__error" v-if="$v.phone.$dirty && !$v.phone.required">
      Обязательное поле
    </p>

    <p class="my-input__error" v-if="$v.phone.$dirty && $v.phone.required && $v.phone.$invalid">
      Некорректный номер телефона
    </p>
  </label>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'

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
      phone: '',
    }
  },

  validations: {
    phone: { required, numeric, minLength: minLength(11), maxLength: maxLength(11) },
  },
  methods: {
    onFocus() {
      this.isBottomMyFormTitle = false
    },
    //
    onBlur(event) {
      this.$v.phone.$touch()
      if (this.$v.phone.required) {
        this.isBottomMyFormTitle = false
      } else {
        this.isBottomMyFormTitle = true
      }
    },
  },
}
</script>
