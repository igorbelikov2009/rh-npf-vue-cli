<template>
  <div class="gui-select">
    <GuiSelectController
      :value="selectionValue"
      :ifSelectionOptionsBlock="isSelectionOptionsBlock"
      :selectionElements="selectionElements"
      @onClickSelectionController="onClickSelectionController"
    />

    <div
      class="gui-select__select-options"
      :class="{
        'gui-select__select-options_show': isSelectionOptionsBlock,
        'gui-select__select-options_hide': !isSelectionOptionsBlock,
      }"
    >
      <GuiSelectionOptionsBlock
        :selectionElements="selectionElements"
        @onChangeSelectionBlock="onChangeSelectionBlock"
        @onClickSelectionBlock="onClickSelectionBlock"
      />
    </div>
  </div>
</template>

<script>
import GuiSelectController from '@/components/gui/guiSelect/GuiSelectController.vue';
import GuiSelectionOptionsBlock from '@/components/gui/guiSelect/GuiSelectionOptionsBlock.vue';

export default {
  name: 'GuiSelect',

  data() {
    return {
      selectionValue: this.value,
    };
  },

  props: {
    value: { type: Number },
    isSelectionOptionsBlock: { type: Boolean, default: false },
    selectionElements: { type: Array },
    date: { type: String },
  },
  methods: {
    onClickSelectionController() {
      this.$emit('onClickSelectionController');
    },
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
    GuiSelectController,
    GuiSelectionOptionsBlock,
  },
};
</script>

<style lang="scss" scoped>
.gui-select {
  &__select-options {
    width: calc(100% - 12px);
    position: absolute;
    left: 6px;
    top: 56px;

    // gui-select__select-options_hide
    &_hide {
      transform: scale(0);
      //
      // transform: scale(1);
      // изменить transform: scale(0);
      transition: transform 0.28s;
      transition-property: transform;
      transition-duration: 0.28s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }

    // gui-select__select-options_show
    &_show {
      transform: scale(1);
      transition: transform 0.28s;
      transition-property: transform;
      transition-duration: 0.28s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
  }

  &__list {
    width: 100%;
  }
}
</style>
