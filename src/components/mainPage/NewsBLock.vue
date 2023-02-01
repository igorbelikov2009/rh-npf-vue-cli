<template>
  <div>
    <CarouselHeader
      :headerTitle="carouselHeaderTitle"
      :ifHasHeaderTitle="isHasHeaderTitle"
      :noCursorLeft="isNoCursorLeft"
      :blurredLeft="isBlurredLeft"
      :noCursorRight="isNoCursorRight"
      :blurredRight="isBlurredRight"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    />

    <div class="carousel">
      <div class="carousel__tape" :style="scrollableElementStyle" ref="scrollableElement">
        <MainCarouselTape
          :qq="q"
          :jj="j"
          :carouselLinks="news"
          @getLinkContainerWidth="getLinkContainerWidth"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselHeader from '@/components/general/carousel/CarouselHeader.vue';
import MainCarouselTape from '@/components/mainPage/MainCarouselTape.vue';

export default {
  name: 'NewsBLock',

  data() {
    return {
      carouselHeaderTitle: 'Новости',
      isHasHeaderTitle: true,
      // меняем цвет у стрелок и свойства курсора на "cursor: default;"
      isNoCursorLeft: true,
      isBlurredLeft: true,
      isNoCursorRight: false,
      isBlurredRight: false,

      // вычисляем и скролим scrollableElement
      screenWidth: document.documentElement.clientWidth, // ширина экрана
      widthLink: '', // ширина контейнера ссылок
      amountChildren: 0, // количество детей newsContainer
      overallWidth: 0, // общая длина newsContainer
      scrollWidth: '', // вычисляемая длина прокрутки scrollableElement
      right: 0, // значение прокрутки scrollableElement, записываемое в его атрибут style
      q: 0, // значение счётчика, индекс this.columns[q], который по центру экрана
      j: 0, // если (this.screenWidth > 855), то по центру экрана два элемента:
      //  this.columns[q] и this.columns[j]
    };
  },

  computed: {
    scrollableElementStyle() {
      return {
        right: `${this.right}px`,
      };
    },
    news() {
      return this.$store.getters['news/sortedByDateNews'];
    },
  },
  mounted() {
    this.getValueJ();
    this.getAmountChildren();
  },

  methods: {
    // ширина контейнера ссылок
    getLinkContainerWidth(widthLink) {
      this.widthLink = widthLink;
      console.log('getLinkContainerWidth', this.widthLink);
    },

    // количество детей массива columns
    getAmountChildren() {
      this.amountChildren = this.news.length;
      console.log('amountChildren: ' + this.amountChildren);
    },

    // общая длина carousel-tape
    getOverallWidth() {
      this.overallWidth = this.widthLink * this.amountChildren;
      console.log('overallWidth:' + this.overallWidth);
    },

    // get value q
    getValueQOnClickArrowLeft() {
      if (this.q !== 0) this.q--;
      if (this.q < 0) this.q = 0;
      // console.log('q: ' + this.q);
    },

    getValueQOnClickArrowRight() {
      if (this.screenWidth < 855) {
        if (this.q < this.amountChildren - 1) {
          this.q++;
        }
      }
      if (this.screenWidth > 855) {
        if (this.q < this.amountChildren - 2) {
          this.q++;
        }
      }
      // console.log('q: ' + this.q);
    },

    // get value j в зависимости от ширины экрана screenWidth (< 855 или > 855 )  во время постройки DOM, определяем данный метод в хук mounted. Для работы с кликом - в  onClickLeft() и в  onClickRight()
    getValueJ() {
      if (this.screenWidth < 855) {
        this.j = this.q;

        console.log('q: ' + this.q, 'j: ' + this.j);
      } else {
        this.j = this.q + 1;

        console.log('q: ' + this.q, 'j: ' + this.j);
      }
    },

    // scrolling
    scrollToTheLeft() {
      this.scrollWidth = this.q * this.widthLink;
      this.right = this.scrollWidth;
      // console.log('scrollToTheLeft. right :' + this.right)
    },
    scrollToTheRight() {
      this.scrollWidth = this.q * this.widthLink;
      this.right = this.scrollWidth;
      // console.log('scrollToTheRight. right :' + this.right)
      if (this.screenWidth < 855) {
        // console.log('scrollToTheRight. right :' + this.right)
        if (this.scrollWidth >= this.overallWidth) {
          this.right = this.overallWidth - this.widthLink;
          // console.log('scrollToTheRight. right :' + this.right)
        }
      }

      if (this.screenWidth > 855) {
        if (this.scrollWidth >= this.overallWidth - this.widthLink) {
          this.right = this.overallWidth - 2 * this.widthLink;
          // console.log('scrollToTheRight. right :' + this.right)
        }
      }
    },

    // меняем цвет у стрелок и свойства курсора на "cursor: default;"
    changeColorArrowsOnClickArrowLeft() {
      this.isNoCursorRight = false;
      this.isBlurredRight = false;
      // console.log(this.right)

      if (this.right == 0) {
        this.isNoCursorLeft = true;
        this.isBlurredLeft = true;
        // console.log(this.isNoCursorLeft, this.isBlurredLeft)
      }
    },
    changeColorArrowOnClickArrowRight() {
      this.isNoCursorLeft = false;
      this.isBlurredLeft = false;

      if (this.screenWidth < 855) {
        if (this.right == this.overallWidth - this.widthLink) {
          this.isNoCursorRight = true;
          this.isBlurredRight = true;
        }
      } else if (this.screenWidth > 855) {
        if (this.right == this.overallWidth - 2 * this.widthLink) {
          this.isNoCursorRight = true;
          this.isBlurredRight = true;
        }
      }
    },

    onClickLeft() {
      this.getOverallWidth();
      this.getValueQOnClickArrowLeft();
      this.getValueJ();
      this.scrollToTheLeft();
      this.changeColorArrowsOnClickArrowLeft();
    },
    onClickRight() {
      this.getOverallWidth();
      this.getValueQOnClickArrowRight();
      this.getValueJ();
      this.scrollToTheRight();
      this.changeColorArrowOnClickArrowRight();
    },
  },

  components: {
    CarouselHeader,
    MainCarouselTape,
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px 72px;
  // overflow-x: scroll;
  overflow-x: hidden;

  @media screen and (min-width: 576px) {
    padding: 0 28px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 96px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 120px;
    padding-left: 240px;
    overflow-x: hidden;
  }

  &__tape {
    width: 100%;
    position: relative;
    transition: right 0.4s;
    transition-property: right;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }
}
</style>
