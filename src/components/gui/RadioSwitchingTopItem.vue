<template>
  <label class="switching__top-button" :class="{ 'switching__top-button_active': isActive }">
    {{ name }}
    <input
      class="switching__top-input"
      type="radio"
      :value="value"
      :name="name"
      @click="emitValue"
    />
  </label>
</template>

<script>
export default {
  name: 'RadioSwitchingTopItem',

  props: {
    isActive: { type: Boolean, default: false },
    name: { type: String },
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
.switching {
  &__top-button {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    padding: 19px 16px;
    font-size: 14px;
    line-height: 18px;
    color: #28323c;
    transition: color 0.3s, background 0.4s;
    font-weight: 400;
    cursor: pointer;

    //  switching__top-button_active
    &_active {
      padding: 18px 16px;
      font-size: 16px;
      color: white;
      background: #50287d;
      transition: color 0.3s, background 0.4s;
    }
  }

  &__top-input {
    display: none;
  }
}
</style>
