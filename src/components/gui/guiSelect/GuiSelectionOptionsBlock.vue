<template>
  <div class="selection-options-block" @click="onClickSelectionBlock">
    <div class="selection-options-block__scrollable-block">
      <GuiSelectionOption
        v-for="(selectionElement, index) in selectionElements"
        :key="index"
        :date="selectionElement.date"
        :value="selectionElement.value"
        :id="selectionElement.id"
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
      selectionValue: '2021-11-30T09:00:00.000Z',
      idOptions: 0,
    };
  },

  props: {
    date: { type: String },
    value: { type: String },
    id: { type: Number },
    selectionElements: { type: Array },
  },

  methods: {
    onChangeSelectionBlock(value, id) {
      this.selectionValue = value;
      this.idOptions = id;
      // console.log('selectionValue: ' + this.selectionValue, 'id: ' + id);
      this.$emit('onChangeSelectionBlock', this.selectionValue, this.idOptions);
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
.selection-options-block {
  margin: 0 auto;
  box-shadow: 1px 3px 5px 2px #d7d7d7;
  overflow-y: hidden;

  &__scrollable-block {
    height: 224px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
}
</style>
