<template>
  <label class="my-input__label">
    <div>
      <GuiInputTitle :title="title" :isActive="isActive" />
    </div>

    <GuiInputFieldCopy
      :type="type"
      :name="name"
      :value="valueInput"
      :hasError="hasError"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
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

import GuiInputTitle from '@/components/gui/guiInput/GuiInputTitle.vue';
import GuiInputField from '@/components/gui/guiInput/GuiInputField.vue';
import GuiInputFieldCopy from '../../../components/gui/guiInput/GuiInputFieldCopy.vue';

export default {
  mixins: [validationMixin],
  name: 'GuiPhoneInputCopy',

  data() {
    return {
      title: 'Ваш телефон',
      isActive: false,
      type: 'text',
      name: 'phone',
      valueInput: '',
      hasError: false,
      topError: 'Обязательное поле',
      buttomError: 'Некорректный номер',
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
      //  Метод $touch() выставит флагу $v.valueInput.$dirty значение true.
      // Смотри в консоль Vue, computed, $v: object.... $dirty
      // после того, как $dirty примет значение true, будет происходить дальнейшая проверка
      this.$v.valueInput.$touch(); // Метод $touch()
      if (this.$v.valueInput.required) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    onInput(event) {
      this.valueInput = event;
      this.hasError = this.$v.valueInput.$invalid;
      // console.log(this.valueInput)

      this.$emit('emitInputValues', this.valueInput);
    },
  },

  components: {
    GuiInputTitle,
    GuiInputField,
    //
    GuiInputFieldCopy,
  },
};
</script>

<style lang="scss" scoped>
.my-input {
  &__label {
    width: 100%;
    padding-bottom: 20px;
    position: relative;
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
</style>
