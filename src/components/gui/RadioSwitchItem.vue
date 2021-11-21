<template>
  <label class="switch-item" :class="{ 'switch-item_active': isActive }">
    <input
      class="switch-item__field"
      type="radio"
      :name="name"
      :value="value"
      @change="emitValue"
    />
    <p class="switch-item__title">{{ title }}</p>
  </label>
</template>

<script>
export default {
  name: 'RadioSwitchItem',

  props: {
    name: { type: String },
    value: { type: Number, required: true },
    title: { type: String },
    isActive: { type: Boolean, default: false },
  },

  methods: {
    emitValue(event) {
      // console.log(event)
      this.$emit('change', Number(event.target.value))
    },
  },
}
</script>

<style lang="scss" scoped>
// * switch-item  переключатель *
.switch-item {
  cursor: pointer;
  width: 64px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 24px;
  display: flex;
  opacity: 1;
  background-color: #b5bdc8;
  transition: background-color 0.5s;

  &_active {
    background-color: #50287d;
    transition: all 0.5;
  }

  &:hover {
    border: 2px solid #50287d;
    transition: all 0.5;
    opacity: 0.8;
  }

  &:hover .switch-item__title {
    opacity: 1;
  }

  &__field {
    display: none;
  }

  &__title {
    opacity: 0.7;
    font-size: 16px;
    color: #ffffff;
    margin: auto;
  }
}
// * switch-item  переключатель *
</style>
