<template>
  <label class="radio-list-option" :class="{ 'radio-list-option_active': isActive }">
    {{ date }}
    <input
      class="radio-list-option__input"
      type="radio"
      :value="value"
      :id="id"
      :name="date"
      @click="emitValue"
    />
  </label>
</template>

<script>
export default {
  name: 'GuiRadioListOption',

  props: {
    isActive: { type: Boolean, default: false },
    date: { type: String, required: true },
    value: { type: Number, required: true },
    id: { type: Number },
  },

  methods: {
    emitValue(event) {
      // console.log(event.target.value, this.id);
      this.$emit('change', Number(event.target.value), this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
// radio-list-option
.radio-list-option {
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

  //  radio-list-option_active
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
