<template>
  <div class="radio-round">
    <div class="radio-round__label-container">
      <GuiRadioRoundLabel
        v-for="(switchItem, index) in switchItems"
        :key="index"
        :value="switchItem.value"
        :title="switchItem.title"
        :isActive="switchItem.value === switchValue"
        @change="onChangeRadio"
      />
    </div>
  </div>
</template>

<script>
import GuiRadioRoundLabel from '@/components/gui/guiRadio/GuiRadioRoundLabel.vue';

export default {
  name: 'GuiRadioRound',
  data() {
    return {
      switchValue: 0,
    };
  },
  props: {
    switchItems: { type: Array },
    value: { type: Boolean },
  },
  methods: {
    onChangeRadio(value) {
      this.switchValue = value;
      // console.log(this.switchValue);

      this.$emit('onChangeRadio', this.switchValue);
    },
  },

  components: {
    GuiRadioRoundLabel,
  },
};
</script>

<style lang="scss" scoped>
.radio-round {
  display: flex;

  &__label-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #f3f5f7;
    padding: 4px;
    border-radius: 28px;
    box-sizing: border-box;
  }
}
</style>
