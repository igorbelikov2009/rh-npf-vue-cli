<template>
  <div class="gui-radio-list">
    <GuiRadioListController
      :value="radioValue"
      :ifRadioListVisible="isRadioListVisible"
      :radioListElements="radioListElements"
      @onClickRadioListController="onClickRadioListController"
    />

    <div
      class="gui-radio-list__select-options"
      :class="{
        'gui-radio-list__select-options_show': isRadioListVisible,
        'gui-radio-list__select-options_hide': !isRadioListVisible,
      }"
    >
      <GuiRadioListOptionBlock
        :radioListElements="radioListElements"
        @onChangeRadioListBlock="onChangeRadioListBlock"
        @onClickRadioListBlock="onClickRadioListBlock"
      />
    </div>
  </div>
</template>

<script>
import GuiRadioListController from '@/components/gui/guiRadio/GuiRadioListController.vue';
import GuiRadioListOptionBlock from '@/components/gui/guiRadio/GuiRadioListOptionBlock.vue';

export default {
  name: 'GuiRadioList',

  data() {
    return {
      radioValue: this.value,
      idOptions: this.id,
    };
  },

  props: {
    date: { type: String },
    value: { type: Number },
    id: { type: Number },
    isRadioListVisible: { type: Boolean, default: false },
    radioListElements: { type: Array },
  },
  methods: {
    onClickRadioListController() {
      this.$emit('onClickRadioListController');
    },
    onChangeRadioListBlock(value, id) {
      this.radioValue = value;
      this.idOptions = id;
      // console.log('radioValue: ' + this.radioValue, 'id: ' + this.idOptions);
      this.$emit('onChangeRadioListBlock', this.radioValue, this.idOptions);
    },
    onClickRadioListBlock() {
      this.$emit('onClickRadioListBlock');
    },
  },
  components: {
    GuiRadioListController,
    GuiRadioListOptionBlock,
  },
};
</script>

<style lang="scss" scoped>
.gui-radio-list {
  &__select-options {
    width: calc(100% - 12px);
    position: absolute;
    left: 6px;
    top: 56px;

    // gui-radio-list__select-options_hide
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

    // gui-radio-list__select-options_show
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
