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

    <p
      class="my-input__error"
      v-if="
        ($v.valueInput.$dirty && !$v.valueInput.minLength) ||
          !$v.valueInput.maxLength ||
          !$v.valueInput.numeric
      "
    >
      {{ buttomError }}
    </p>
  </label>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators';

import InputTitle from '../gui/InputTitle.vue';
import InputField from '../gui/InputField.vue';

export default {
  mixins: [validationMixin],
  name: 'InputPhone',

  data() {
    return {
      isActive: false,
      hasError: false,
      type: 'text',
      valueInput: '',
      name: 'valueInput',
      title: 'Ваш телефон',
      topError: 'Обязательное поле',
      buttomError: 'Некорректный номер',
      classError: 'my-input__field_invalid',
    };
  },

  validations: {
    valueInput: { required, numeric, minLength: minLength(11), maxLength: maxLength(11) },
  },
  methods: {
    onFocus() {
      this.isActive = true;
    },

    onBlur() {
      this.$v.valueInput.$touch();
      if (this.$v.valueInput.required) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    onInput(event) {
      this.value = event;
      this.valueInput = this.value;
      this.hasError = this.$v.valueInput.$invalid;
      // console.log(this.valueInput, this.value)

      this.$emit('emitInputValues', this.valueInput);
    },
  },
  components: {
    InputTitle,
    InputField,
  },
};
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

  &__title {
    position: absolute;
    top: 24px;
    left: 0px;
    font-size: 16px;
    color: #78828c;
  }

  // transition name="my-input__title"
  &__title-leave-active,
  &__title-enter-active {
    transition: all 0.5s;
  }

  &__title-leave-to,
  &__title-enter {
    top: 0px;
    font-size: 11px;
  }

  // transition name="my-input__title-else"
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
