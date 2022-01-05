<template>
  <div class="selection-options__container" @click="onClickSelectionBlock">
    <div class="selection-options__scrollable-block">
      <SelectionOption
        v-for="(selectionItem, index) in selectionItems"
        :key="index"
        :name="selectionItem.name"
        :value="selectionItem.value"
        :isActive="selectionItem.value === selectionValue"
        @change="onChangeSelectionBlock"
      />
    </div>
  </div>
</template>

<script>
import SelectionOption from '@/components/gui/SelectionOption.vue';

export default {
  name: 'SelectionOptionsBlock',

  data() {
    return {
      selectionValue: 0,
    };
  },

  props: {
    selectionItems: { type: Array },
    name: { type: String },
    value: { type: Number },
  },

  methods: {
    onChangeSelectionBlock(value) {
      this.selectionValue = value;
      // console.log('selectionValue: ' + this.selectionValue);
      this.$emit('onChangeSelectionBlock', this.selectionValue);
    },
    onClickSelectionBlock() {
      this.$emit('onClickSelectionBlock');
    },
  },

  components: {
    SelectionOption,
  },
};
</script>

<style lang="scss" scoped>
.selection-options {
  &__container {
    margin: 0 auto;
    box-shadow: 1px 3px 5px 2px #d7d7d7;
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
