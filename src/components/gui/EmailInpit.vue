<template>
  <label class="my-input__label">
    <div>
      <InputTitle :title="title" :isActive="isActive" />
    </div>

    <InputField
      :type="type"
      :name="name"
      :value="valueInput"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      :hasError="hasError"
    />

    <p class="my-input__error" v-if="$v.valueInput.$dirty && !$v.valueInput.required">
      {{ topError }}
    </p>

    <p class="my-input__error" v-if="$v.valueInput.$dirty && !$v.valueInput.email">
      {{ buttomError }}
    </p>
  </label>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

import InputTitle from '../gui/InputTitle'
import InputField from '../gui/InputField'

export default {
  mixins: [validationMixin],

  name: 'EmailInput',

  data() {
    return {
      isActive: false,
      hasError: false,
      type: 'text',
      valueInput: '',
      name: 'email',
      title: 'Электронная почта',
      topError: 'Обязательное поле',
      buttomError: 'Некорректный email',
      classError: 'my-input__field_invalid',
    }
  },

  validations: {
    valueInput: { required, email },
  },
  methods: {
    onFocus() {
      this.isActive = true
    },

    onBlur() {
      this.$v.valueInput.$touch()
      if (this.$v.valueInput.required) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    },

    onInput(event) {
      this.value = event
      this.valueInput = this.value
      this.hasError = this.$v.valueInput.$invalid

      this.$emit('emitInputValues', this.valueInput)
    },
  },
  components: {
    InputTitle,
    InputField,
  },
}
</script>

<style lang="scss" scoped>
// my-input
.my-input {
  width: 100%;

  &__label {
    width: 100%;
    padding-bottom: 20px;
    position: relative;
  }

  &__field {
    width: 100%;
    font-size: 16px;
    line-height: 23px;
    padding: 24px 0 8px;
    color: #28323c;
    border-bottom: 1px solid #b5bdc8;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      line-height: 22px;
      border-bottom: 2px solid #50287d;
    }

    &:focus {
      line-height: 22px;
      border-bottom: 2px solid #50287d;
    }

    // my-input__field_invalid
    &_invalid {
      border-bottom: 1px solid red;
    }
  }

  &__error {
    display: block;
    position: absolute;
    top: 56px;
    left: 0;
    font-size: 12px;
    line-height: 12px;
    color: red;
  }
}
// my-input
</style>
