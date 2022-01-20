<template>
  <div class="radio-secondary">
    <GuiRadioSecondaryLabel
      v-for="(radioItem, index) in radioItems"
      :key="index"
      :value="radioItem.value"
      :isActive="radioItem.value === valueRadio"
      :title="radioItem.title"
      @change="onChangeRadio"
    />
  </div>
</template>

<script>
import GuiRadioSecondaryLabel from '@/components/gui/guiRadio/GuiRadioSecondaryLabel.vue';

export default {
  name: 'GuiRadioSecondary',

  data() {
    return {
      valueRadio: 65,
    };
  },

  props: {
    radioItems: { type: Array },
  },

  methods: {
    onChangeRadio(value) {
      this.valueRadio = value;
      // console.log(this.valueRadio)

      this.$emit('onChangeRadio', this.valueRadio);
    },
  },

  components: {
    GuiRadioSecondaryLabel,
  },
};
</script>

<style lang="scss" scoped>
// radio-secondary
.radio-secondary {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
