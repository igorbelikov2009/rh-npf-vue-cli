<template>
  <div>
    <h2 class="carousel__subheading" v-if="isActive">
      {{ subheading }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'CarouselTransmittedText',

  props: {
    isActive: { type: Boolean, default: false },
    subheading: { type: String },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  &__subheading {
    font-size: 18px;
    line-height: 1.5rem;
    font-weight: 400;
    color: #28323c;
    margin: 24px 0;
  }
}
</style>
