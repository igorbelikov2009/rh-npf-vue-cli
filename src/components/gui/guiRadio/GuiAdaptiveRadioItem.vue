<template>
  <label class="adaptive-radio-item " :class="{ 'adaptive-radio-item_active': isActive }">
    {{ date }}
    <input
      class="adaptive-radio-item__input"
      type="radio"
      :value="value"
      :name="date"
      @click="emitValue"
    />
  </label>
</template>

<script>
export default {
  name: 'GuiAdaptiveRadioItem',

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
.adaptive-radio-item {
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  font-size: 13px;
  line-height: 24px;
  color: #b5bdc8;
  padding: 12px 16px;
  border-radius: 24px;
  transition: color 0.3s, background 0.4s;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #50287d;
  }

  // adaptive-radio-item_active
  &_active {
    background: #50287d;
    color: #fff;

    &:hover {
      color: #fff;
    }
  }

  &__input {
    display: none;
  }
}
// switching
</style>
