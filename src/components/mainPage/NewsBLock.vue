<template>
  <div>
    <CarouselHeader
      :headerTitle="carouselHeaderTitle"
      :ifHasHeaderTitle="isHasHeaderTitle"
      :NoCursorLeft="isNoCursorLeft"
      :BlurredLeft="isBlurredLeft"
      :NoCursorRight="isNoCursorRight"
      :BlurredRight="isBlurredRight"
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    />

    <div class="carousel">
      <div class="carousel__tape" :style="scrollableElementStyle" ref="scrollableElement">
        <CarouselTape
          :qq="q"
          :jj="j"
          :ifHasLine="isHasLine"
          :carouselColumns="columns"
          @getWidthColumn="getWidthColumn"
          @getAmountChildren="getAmountChildren"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselHeader from '@/components/general/carousel/CarouselHeader.vue';
import CarouselTape from '@/components/general/carousel/CarouselTape.vue';

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
      widthColumn: '', // ширина столбца
      amountChildren: 0, // количество детей newsContainer
      overallWidth: 0, // общая длина newsContainer
      scrollWidth: '', // вычисляемая длина прокрутки scrollableElement
      right: 0, // значение прокрутки scrollableElement, записываемое в его атрибут style
      q: 0, // значение счётчика, индекс this.columns[q], который по центру экрана
      j: 0, // если (this.screenWidth > 855), то по центру экрана два элемента:
      //  this.columns[q] и this.columns[j]
      isHasLine: false, // есть линия или нет

      columns: [
        {
          linkHref: '../templates/news/38.html',
          linkTitle: ' НПФ Сбербанка и НПФ «Ренессанс пенсии» закрыли сделку',
          date: ' 26 июля 2021 г. ',
        },
        {
          linkHref: '../templates/news/37.html',
          linkTitle: 'Режим работы Фонда на период с 15 по 18 июня 2021 года',
          date: '15 июня 2021 г.',
        },
        {
          linkHref: '../templates/news/36.html',
          linkTitle: '«АО «НПФ Сбербанка» достиг соглашения о покупке АО НПФ «Ренессанс пенсии»',
          date: '01 июня 2021 г.',
        },
        {
          linkHref: '../templates/news/35.html',
          linkTitle: 'Режим работы Фонда 7 мая 2021 года',
          date: '07 мая 2021 г.',
        },
        {
          linkHref: '../templates/news/34.html',
          linkTitle: 'Режим работы Фонда на период с 04 по 07 мая 2021 года',
          date: '27 апреля 2021 г.',
        },
        {
          linkHref: '../templates/news/33.html',
          linkTitle: 'Режим работы Фонда',
          date: '25 мая 2020 г.',
        },
        {
          linkHref: '../templates/news/32.html',
          linkTitle: 'Режим работы Фонда на период с 06 по 08 мая 2020 года',
          date: '06 мая 2020 г.',
        },
        {
          linkHref: '../templates/news/31.html',
          linkTitle: 'Банк России зарегистрировал Отчет об итогах выпуска ценных бумаг Фонда',
          date: '23 апреля 2020 г.',
        },
        {
          linkHref: '../templates/news/30.html',
          linkTitle: 'Режим работы Фонда на период с 06 по 30 апреля 2020 года',
          date: '06 апреля 2020 г.',
        },
        {
          linkHref: '../templates/news/29.html',
          linkTitle: 'Режим работы Фонда на период с 30 марта по 3 апреля 2020 года',
          date: '27 марта 2020 г.',
        },
        {
          linkHref: '../templates/news/28.html',
          linkTitle:
            '18 марта 2020 года вступил в силу Федеральный закон N 61-ФЗ "О внесении изменений в статью 10 Федерального закона "О негосударственных пенсионных фондах" по вопросам назначения негосударственных пенсий"',
          date: '24 марта 2020 г.',
        },
        {
          linkHref: '../templates/news/27.html',
          linkTitle:
            'Совет директоров Фонда 12.02.2020 г. принял решение о порядке и об условиях распределения акций Фонда, оставшихся неразмещенными на дату внесения в Единый государственный реестр юридических лиц записи о государственной регистрации Фонда',
          date: '14 февраля 2020 г.',
        },
      ],
    };
  },

  computed: {
    scrollableElementStyle() {
      return {
        right: `${this.right}px`,
      };
    },
  },
  mounted() {
    this.getValueJ();
    this.getAmountChildren();
  },

  methods: {
    // ширина столбца
    getWidthColumn(widthColumn) {
      this.widthColumn = widthColumn;
      // console.log('getWidthColumn', this.widthColumn);
    },

    // количество детей массива columns
    getAmountChildren() {
      this.amountChildren = this.columns.length;
      // console.log('amountChildren: ' + this.amountChildren);
    },

    // общая длина newsContainer
    getOverallWidth() {
      this.overallWidth = this.widthColumn * this.amountChildren;
      // console.log('overallWidth:' + this.overallWidth);
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

        // console.log('q: ' + this.q, 'j: ' + this.j);
      } else {
        this.j = this.q + 1;

        // console.log('q: ' + this.q, 'j: ' + this.j);
      }
    },

    // scrolling
    scrollToTheLeft() {
      this.scrollWidth = this.q * this.widthColumn;
      this.right = this.scrollWidth;
      // console.log('scrollToTheLeft. right :' + this.right)
    },
    scrollToTheRight() {
      this.scrollWidth = this.q * this.widthColumn;
      this.right = this.scrollWidth;
      // console.log('scrollToTheRight. right :' + this.right)
      if (this.screenWidth < 855) {
        // console.log('scrollToTheRight. right :' + this.right)
        if (this.scrollWidth >= this.overallWidth) {
          this.right = this.overallWidth - this.widthColumn;
          // console.log('scrollToTheRight. right :' + this.right)
        }
      }

      if (this.screenWidth > 855) {
        if (this.scrollWidth >= this.overallWidth - this.widthColumn) {
          this.right = this.overallWidth - 2 * this.widthColumn;
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
        if (this.right == this.overallWidth - this.widthColumn) {
          this.isNoCursorRight = true;
          this.isBlurredRight = true;
        }
      } else if (this.screenWidth > 855) {
        if (this.right == this.overallWidth - 2 * this.widthColumn) {
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
    CarouselTape,
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
