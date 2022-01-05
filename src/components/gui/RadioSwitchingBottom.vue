<template>
  <div class="switching__list-bottom-buttons">
    <RadioSwitchingBottomItem
      v-for="(switchItem, index) in switchItems"
      :key="index"
      :name="switchItem.name"
      :value="switchItem.value"
      :isActive="switchItem.value === switchValue"
      @change="onChangeRadioBottom"
    />
  </div>
</template>

<script>
import RadioSwitchingBottomItem from '@/components/gui/RadioSwitchingBottomItem.vue';

export default {
  name: 'RadioSwitchingBottom',

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
    onChangeRadioBottom(value) {
      this.switchValue = value;
      // console.log('switchValue: ' + this.switchValue);
      this.$emit('onChangeRadioBottom', this.switchValue);
    },
  },

  components: {
    RadioSwitchingBottomItem,
  },
};
</script>

<style lang="scss" scoped>
.switching {
  &__list-bottom-buttons {
    display: none;
    padding: 4px;
    min-height: 56px;
    background: #f3f5f7;
    border-radius: 28px;
    justify-content: space-between;

    @media screen and (min-width: 576px) {
      display: inline-flex;
      align-items: center;
    }
  }
}
</style>
