<template>
  <div class="carousel__container">
    <CarouselSquare
      v-for="(square, index) in squares"
      :key="index"
      :valueRadio="square.valueRadio"
      :icon="square.icon"
      :title="square.title"
      :isOuterHovered="index === q"
      :isActived="index === q"
      @emitValueRadio="emitValueRadio"
    />
  </div>
</template>

<script>
import CarouselSquare from '@/components/businnessPage/CarouselSquare.vue';
export default {
  name: 'BusinessCarousel',

  data() {
    return {
      carouselValue: this.q,
      amountChildrenContainer: 0, // количество детей carousel__container или squares
      squares: [
        {
          valueRadio: '0',
          icon: 'Money',
          title: 'Увеличение социальных гарантий',
        },
        {
          valueRadio: '1',
          icon: 'Circle',
          title: 'Сокращение текучести кадров',
        },
        {
          valueRadio: '2',
          icon: 'Young',
          title: 'Своевременное омоложение коллектива',
        },
        {
          valueRadio: '3',
          icon: 'Lever',
          title: 'Рычаги управления коллективом',
        },
        {
          valueRadio: '4',
          icon: 'Motivate',
          title: 'Мотивация к долгосрочному труду',
        },
        {
          valueRadio: '5',
          icon: 'Settings',
          title: 'Оптимизация налогообложения организации',
        },
        {
          valueRadio: '6',
          icon: 'Check',
          title: 'Сокращение издержек на социальную поддержку пенсионеров',
        },
      ],
    };
  },
  props: {
    q: { type: Number }, // значение счётчика, индекс CarouselSquare[carouselValue], равно значению valueRadio и связано с ним
  },
  mounted: function() {
    this.getAmountChildren();
    // console.log(this.amountChildrenContainer);
  },
  methods: {
    // количество детей массива squares (элемента newsContainer)
    getAmountChildren() {
      this.amountChildrenContainer = this.squares.length;
      // console.log('amountChildrenContainer: ' + this.amountChildrenContainer);
      this.$emit('getAmountChildren', this.amountChildrenContainer);
    },
    emitValueRadio(currentValue) {
      this.carouselValue = currentValue;
      this.$emit('emitValueRadio', this.carouselValue);
      console.log('carouselValue: ' + this.carouselValue);
    },
    // emitValueRadio(event) {
    //   this.carouselValue = event;
    //   this.$emit('emitValueRadio', this.carouselValue);
    //   // console.log('carouselValue: ' + this.carouselValue);
    // },
  },

  components: {
    CarouselSquare,
  },
};
</script>

<style lang="scss" scoped>
// carousel
.carousel {
  &__container {
    display: flex;
  }
}
// carousel
</style>
