<template>
  <p class="tables__cell-text">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'TableCell',

  props: {
    text: { type: String },
  },
};
</script>

<style lang="scss" scoped>
// tables
.tables {
  &__cell-text {
    font-size: 16px;
    color: #001100;
    line-height: 1.5rem;
    margin: 12px 0;
    font-weight: 500;
  }
}
// tables
</style>
