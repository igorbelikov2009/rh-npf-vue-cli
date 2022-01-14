<template>
  <label class="selection-option" :class="{ 'selection-option_active': isActive }">
    {{ date }}
    <input
      class="selection-option__input"
      type="radio"
      :value="value"
      :name="date"
      @click="emitValue"
    />
  </label>
</template>

<script>
export default {
  name: 'GuiSelectionOption',

  props: {
    isActive: { type: Boolean, default: false },
    date: { type: String, required: true },
    value: { type: Number, required: true },
  },

  methods: {
    emitValue(event) {
      // console.log(Number(event.target.value));
      this.$emit('change', Number(event.target.value));
    },
  },
};
</script>

<style lang="scss" scoped>
.selection-option {
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  padding: 19px 16px;
  font-size: 14px;
  line-height: 18px;
  background-color: #fff;
  color: #28323c;
  transition: color 0.3s, background 0.4s;
  font-weight: 400;
  cursor: pointer;

  //  selection-option_active
  &_active {
    padding: 18px 16px;
    font-size: 16px;
    color: white;
    background: #50287d;
    transition: color 0.3s, background 0.4s;
  }

  &__input {
    display: none;
  }
}
</style>
