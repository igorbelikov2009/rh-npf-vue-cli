<template>
  <input
    class="my-input__field"
    :type="type"
    :name="name"
    :value="value"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    @input="emitValue"
    :class="{ 'my-input__field_invalid': hasError }"
  />
</template>

<script>
export default {
  name: 'GuiInputFieldCopy',

  props: {
    type: { type: String },
    name: { type: String },
    value: { type: String },
    hasError: { type: Boolean },
  },

  methods: {
    emitValue(event) {
      this.$emit('input', String(event.target.value));
    },
  },
};
</script>

<style lang="scss" scoped>
// my-input
.my-input {
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
