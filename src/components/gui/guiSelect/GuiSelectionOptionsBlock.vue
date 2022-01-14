<template>
  <div class="selection-options-block" @click="onClickSelectionBlock">
    <div class="selection-options-block__scrollable-block">
      <GuiSelectionOption
        v-for="(selectionElement, index) in selectionElements"
        :key="index"
        :date="selectionElement.date"
        :value="selectionElement.value"
        :isActive="selectionElement.value === selectionValue"
        @change="onChangeSelectionBlock"
      />
    </div>
  </div>
</template>

<script>
import GuiSelectionOption from '@/components/gui/guiSelect/GuiSelectionOption.vue';

export default {
  name: 'GuiSelectionOptionsBlock',

  data() {
    return {
      selectionValue: 0,
    };
  },

  props: {
    selectionElements: { type: Array },
    date: { type: String },
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
    GuiSelectionOption,
  },
};
</script>

<style lang="scss" scoped>
// selection-options-block
.selection-options-block {
  margin: 0 auto;
  box-shadow: 1px 3px 5px 2px #d7d7d7;
  overflow: hidden;

  &__scrollable-block {
    height: 224px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
}
</style>
