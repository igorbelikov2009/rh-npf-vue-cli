<template>
  <input class="carousel__radio" type="radio" :value="valueRadio" @click="emitValue" />
</template>

<script>
export default {
  name: 'InputRadio',
  data() {
    return {
      valueRadio: this.radioValue,
    };
  },
  props: {
    radioValue: {
      type: String,
    },
  },
  methods: {
    emitValue(event) {
      this.valueRadio = Number(event.target.value);
      this.$emit('emitValueRadio', this.valueRadio);
      // console.log('radioValue: ' + this.valueRadio);
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel__radio {
  display: none;
}
</style>
