<template>
  <div class="triple-switch">
    <div class="triple-switch__label-container">
      <TripleSwitchItem
        v-for="(switchItem, index) in switchItems"
        :key="index"
        :value="switchItem.value"
        :isActive="switchItem.value === switchValue"
        @change="onChangeRadio"
      />
    </div>
  </div>
</template>

<script>
import TripleSwitchItem from '@/components/gui/TripleSwitchItem.vue';

export default {
  name: 'TripleSwitch',
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
    TripleSwitchItem,
  },
};
</script>

<style lang="scss" scoped>
//  triple-switch
.triple-switch {
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

  &__label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    background-color: #dfe6ec;
    opacity: 1;
    //
    transition: color 0.3s, background 0.4s;
    transition-property: color, background;
    transition-duration: 0.3s, 0.4s;
    transition-timing-function: ease, ease;
    transition-delay: 0s, 0s;

    @media screen and (min-width: 1160px) {
      padding: 24px;
      border-radius: 24px;
    }

    &:hover {
      opacity: 0.8;
    }

    //  triple-switch__label_chosen
    &_chosen {
      background: #50287d;
    }
  }

  &__field {
    display: none;
  }
} // triple-switch
</style>
