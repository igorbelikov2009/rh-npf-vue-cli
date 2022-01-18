<template>
  <div class="radio-primary">
    <div class="radio-primary__flex-container">
      <GuiRadioPrimaryLabel
        v-for="(radioItem, index) in radioItems"
        :key="index"
        :name="radioItem.name"
        :value="radioItem.value"
        :isActive="radioItem.value === radioValue"
        :title="radioItem.title"
        @change="onChangePrimaryRadio"
      />
    </div>
  </div>
</template>

<script>
import GuiRadioPrimaryLabel from '@/components/gui/guiRadio/GuiRadioPrimaryLabel.vue';
export default {
  name: 'GuiRadioPrimary',
  data() {
    return {
      radioValue: 0,
    };
  },
  props: {
    radioItems: { type: Array },
  },
  methods: {
    onChangePrimaryRadio(value) {
      this.radioValue = value;
      // console.log(this.radioValue);

      this.$emit('onChangePrimaryRadio', this.radioValue);
    },
  },

  components: {
    GuiRadioPrimaryLabel,
  },
};
</script>

<style lang="scss" scoped>
// radio-primary
.radio-primary {
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
