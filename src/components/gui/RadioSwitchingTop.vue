<template>
  <div class="switching__container" @click="onClickTopBlockButtons">
    <div class="switching__scrollable-block">
      <RadioSwitchingTopItem
        v-for="(switchItem, index) in switchItems"
        :key="index"
        :name="switchItem.name"
        :value="switchItem.value"
        :isActive="switchItem.value === switchValue"
        @change="onChangeRadioTop"
      />
    </div>
  </div>
</template>

<script>
import RadioSwitchingTopItem from '@/components/gui/RadioSwitchingTopItem.vue';

export default {
  name: 'RadioSwitchingTop',
  data() {
    return {
      switchValue: 0,
    };
  },

  props: {
    switchItems: { type: Array },
    name: { type: String },
    value: { type: Number },
  },

  methods: {
    onChangeRadioTop(value) {
      this.switchValue = value;
      // console.log('switchValue: ' + this.switchValue);
      this.$emit('onChangeRadioTop', this.switchValue);
    },
    onClickTopBlockButtons() {
      this.$emit('onClickTopBlockButtons');
    },
  },

  components: {
    RadioSwitchingTopItem,
  },
};
</script>

<style lang="scss" scoped>
.switching {
  // switching__container
  &__container {
    overflow: hidden;
  }

  &__scrollable-block {
    height: 224px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
}
</style>
