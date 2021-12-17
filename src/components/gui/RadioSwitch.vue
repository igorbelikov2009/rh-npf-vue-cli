<template>
  <div class="switch">
    <div class="switch">
      <RadioSwitchItem
        v-for="(itemRadio, index) in itemsRadio"
        v-bind:key="index"
        :name="name"
        :value="itemRadio.value"
        :isActive="itemRadio.value === valueRadio"
        :title="itemRadio.title"
        @change="onChangeRadio"
      />
    </div>
  </div>
</template>

<script>
import RadioSwitchItem from '../gui/RadioSwitchItem.vue';

export default {
  name: 'RadioSwitch',

  data() {
    return {
      valueRadio: this.defaultValue,
      name: this.switchName,

      itemsRadio: [
        {
          value: this.firstValue,
          title: this.firstTitle,
        },
        {
          value: this.secondValue,
          title: this.secondTitle,
        },
      ],
    };
  },

  props: {
    defaultValue: { type: Number },
    switchName: { type: String },
    firstValue: { type: Number },
    firstTitle: { type: String },
    secondValue: { type: Number },
    secondTitle: { type: String },
  },

  methods: {
    onChangeRadio(value) {
      this.valueRadio = value;
      // console.log(this.valueRadio)

      this.$emit('onChangeRadio', this.valueRadio);
    },
  },

  components: {
    RadioSwitchItem,
  },
};
</script>

<style lang="scss" scoped>
// * switch Двойной переключатель *
.switch {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// * switch Двойной переключатель *
</style>
