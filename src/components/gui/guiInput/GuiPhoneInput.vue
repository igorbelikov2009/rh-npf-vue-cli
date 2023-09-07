<template>
  <label class="my-input__label">
    <div>
      <GuiInputTitle :title="title" :isActive="isActive" />
    </div>

    <GuiInputField
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

export default {
  mixins: [validationMixin],
  name: 'GuiPhoneInput',
  //   import GuiPhoneInput from '@/components/gui/guiInput/GuiPhoneInput.vue';

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
      // console.log(this.valueInput, this.value);

      this.$emit('emitInputValues', this.valueInput);
    },
  },
  components: {
    GuiInputTitle,
    GuiInputField,
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
