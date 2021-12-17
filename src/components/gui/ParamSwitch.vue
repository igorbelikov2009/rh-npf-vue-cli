<template>
  <div class="param-switch">
    <div class="param-switch__flex-container">
      <ParamSwichItem
        v-for="(switchItem, index) in switchItems"
        :key="index"
        :name="switchItem.name"
        :value="switchItem.value"
        :isActive="switchItem.value === switchValue"
        :title="switchItem.title"
        @change="onChangeRadio"
      />
    </div>
  </div>
</template>

<script>
import ParamSwichItem from '@/components/gui/ParamSwichItem.vue';
export default {
  name: 'ParamSwitch',
  data() {
    return {
      switchValue: 1,
    };
  },
  props: {
    switchItems: { type: Array },
  },
  methods: {
    onChangeRadio(value) {
      this.switchValue = value;
      // console.log(this.switchValue);

      this.$emit('onChangeRadio', this.switchValue);
    },
  },

  components: {
    ParamSwichItem,
  },
};
</script>

<style lang="scss" scoped>
.param-switch {
  display: flex;

  &__flex-container {
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
