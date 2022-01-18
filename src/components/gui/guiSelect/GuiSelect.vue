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
      idOptions: this.id,
    };
  },

  props: {
    date: { type: String },
    value: { type: String },
    id: { type: Number, required: true },
    isSelectionOptionsBlock: { type: Boolean, default: false },
    selectionElements: { type: Array },
  },
  methods: {
    onClickSelectionController() {
      this.$emit('onClickSelectionController');
    },
    onChangeSelectionBlock(value, id) {
      this.selectionValue = value;
      this.idOptions = id;
      // console.log('selectionValue: ' + this.selectionValue, 'id: ' + this.idOptions);
      this.$emit('onChangeSelectionBlock', this.selectionValue, this.idOptions);
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
