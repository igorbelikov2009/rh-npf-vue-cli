<template>
  <div class="radio-list-option-block" @click="onClickRadioListBlock">
    <div class="radio-list-option-block__scrollable-block">
      <GuiRadioListOption
        v-for="(radioListElement, index) in radioListElements"
        :key="index"
        :date="radioListElement.date"
        :value="radioListElement.value"
        :id="radioListElement.id"
        :isActive="radioListElement.value === radioValue"
        @change="onChangeRadioListBlock"
      />
    </div>
  </div>
</template>

<script>
import GuiRadioListOption from '@/components/gui/guiRadio/GuiRadioListOption.vue';

export default {
  name: 'GuiRadioListOptionBlock',

  data() {
    return {
      radioValue: 0,
      idOptions: 0,
    };
  },

  props: {
    date: { type: String },
    value: { type: Number },
    id: { type: Number },
    radioListElements: { type: Array },
  },

  methods: {
    onChangeRadioListBlock(value, id) {
      this.radioValue = value;
      this.idOptions = id;
      // console.log('radioValue: ' + this.radioValue, 'id: ' + id);
      this.$emit('onChangeRadioListBlock', this.radioValue, this.idOptions);
    },
    onClickRadioListBlock() {
      this.$emit('onClickRadioListBlock');
    },
  },

  components: {
    GuiRadioListOption,
  },
};
</script>

<style lang="scss" scoped>
// radio-list-option-block
.radio-list-option-block {
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
