<template>
  <div class="adaptive-radio">
    <GuiAdaptiveRadioItem
      v-for="(radioElement, index) in radioElements"
      :key="index"
      :date="radioElement.date"
      :value="radioElement.value"
      :id="radioElement.id"
      :isActive="radioElement.value === radioValue"
      @change="onChangeAdaptiveRadio"
    />
  </div>
  <!-- radioElements -->
</template>

<script>
import GuiAdaptiveRadioItem from '@/components/gui/guiRadio/GuiAdaptiveRadioItem.vue';

export default {
  name: 'GuiAdaptiveRadio',

  data() {
    return {
      radioValue: this.value,
      idRadio: this.id,
    };
  },
  props: {
    radioElements: { type: Array },
    date: { type: String },
    value: { type: Number },
    id: { type: Number },
  },
  methods: {
    onChangeAdaptiveRadio(value, id) {
      this.radioValue = value;
      this.idRadio = id;
      // console.log('radioValue: ' + this.radioValue, 'idRadio: ' + this.idRadio);
      this.$emit('onChangeAdaptiveRadio', this.radioValue, this.idRadio);
    },
  },
  components: {
    GuiAdaptiveRadioItem,
  },
};
</script>

<style lang="scss" scoped>
.adaptive-radio {
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
</style>
