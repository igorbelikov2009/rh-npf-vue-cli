<template>
  <label class="my-input__label">
    <div>
      <GuiInputTitle :title="title" :isActive="isActive" />
    </div>

    <GuiInputField
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

    <p class="my-input__error" v-if="$v.valueInput.$dirty && !$v.valueInput.minLength">
      {{ buttomError }}
    </p>
  </label>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

import GuiInputTitle from '@/components/gui/guiInput/GuiInputTitle.vue';
import GuiInputField from '@/components/gui/guiInput/GuiInputField.vue';

export default {
  mixins: [validationMixin],

  name: 'GuiNameInput',
  //   import GuiNameInput from '@/components/gui/guiInput/GuiNameInput.vue';

  data() {
    return {
      isActive: false,
      hasError: false,
      type: 'text',
      valueInput: '',
      name: 'firstName',
      title: 'Ваше имя',
      topError: 'Обязательное поле',
      buttomError: 'Некорректное имя',
      classError: 'my-input__field_invalid',
    };
  },

  validations: {
    valueInput: { required, minLength: minLength(2) },
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
    top: 67px;
    top: 56px;
    left: 0;
    font-size: 12px;
    line-height: 12px;
    color: red;
  }
}
</style>
