<template>
  <div class="news-container">
    <NewsColumn
      v-for="(newsColumn, index) in newsColumns"
      :key="index"
      :linkHref="newsColumn.linkHref"
      :linkTitle="newsColumn.linkTitle"
      :newsDate="newsColumn.newsDate"
      :isClear="index === qq || jj === index"
      @getWidthColumn="getWidthColumn"
    />
  </div>
</template>

<script>
import NewsColumn from './NewsColumn.vue';
export default {
  name: 'NewsCarousel',

  data() {
    return {
      widthColumn: '', // ширина столбца
      amountChildrenContainer: 0, // количество детей newsContainer
      screenWidth: this.screenWidthGadget,
      newsColumns: [
        {
          linkHref: '../templates/news/38.html',
          linkTitle: ' НПФ Сбербанка и НПФ «Ренессанс пенсии» закрыли сделку',
          newsDate: ' 26 июля 2021 г. ',
          isClear: false,
        },
        {
          linkHref: '../templates/news/37.html',
          linkTitle: 'Режим работы Фонда на период с 15 по 18 июня 2021 года',
          newsDate: '15 июня 2021 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/36.html',
          linkTitle: '«АО «НПФ Сбербанка» достиг соглашения о покупке АО НПФ «Ренессанс пенсии»',
          newsDate: '01 июня 2021 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/35.html',
          linkTitle: 'Режим работы Фонда 7 мая 2021 года',
          newsDate: '07 мая 2021 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/34.html',
          linkTitle: 'Режим работы Фонда на период с 04 по 07 мая 2021 года',
          newsDate: '27 апреля 2021 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/33.html',
          linkTitle: 'Режим работы Фонда',
          newsDate: '25 мая 2020 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/32.html',
          linkTitle: 'Режим работы Фонда на период с 06 по 08 мая 2020 года',
          newsDate: '06 мая 2020 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/31.html',
          linkTitle: 'Банк России зарегистрировал Отчет об итогах выпуска ценных бумаг Фонда',
          newsDate: '23 апреля 2020 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/30.html',
          linkTitle: 'Режим работы Фонда на период с 06 по 30 апреля 2020 года',
          newsDate: '06 апреля 2020 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/29.html',
          linkTitle: 'Режим работы Фонда на период с 30 марта по 3 апреля 2020 года',
          newsDate: '27 марта 2020 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/28.html',
          linkTitle:
            '18 марта 2020 года вступил в силу Федеральный закон N 61-ФЗ "О внесении изменений в статью 10 Федерального закона "О негосударственных пенсионных фондах" по вопросам назначения негосударственных пенсий"',
          newsDate: '24 марта 2020 г.',
          isClear: false,
        },
        {
          linkHref: '../templates/news/27.html',
          linkTitle:
            'Совет директоров Фонда 12.02.2020 г. принял решение о порядке и об условиях распределения акций Фонда, оставшихся неразмещенными на дату внесения в Единый государственный реестр юридических лиц записи о государственной регистрации Фонда',
          newsDate: '14 февраля 2020 г.',
          isClear: false,
        },
      ],
    };
  },

  props: {
    qq: { type: Number },
    jj: { type: Number },

    screenWidthGadget: { type: Number },
  },
  mounted: function() {
    this.getAmountChildren();
  },

  methods: {
    // ширина столбца
    getWidthColumn(widthColumnBox) {
      this.widthColumn = widthColumnBox;
      this.$emit('getWidthColumn', this.widthColumn);
      // console.log('widthColumn :' + this.widthColumn)
    },
    // количество детей массива newsColumns (элемента newsContainer)
    getAmountChildren() {
      this.amountChildrenContainer = this.newsColumns.length;
      // console.log('amountChildrenContainer: ' + this.amountChildrenContainer);
      this.$emit('getAmountChildren', this.amountChildrenContainer);
    },

    //  устанавливаем прозрачность у "news__column", определяем метод changeTransparencyColumn()  в хук mounted во время постройки DOM

    changeTransparencyColumn() {
      for (let i = 0; i < 5; i++) {
        this.newsColumns[i].isClear = false;
        console.log('Ok', this.newsColumns[i].isClear);
      }

      console.log('qq: ' + this.qq, 'jj: ' + this.jj);
      this.newsColumns[this.qq].isClear = true;
      this.newsColumns[this.jj].isClear = true;
    },
  },

  components: {
    NewsColumn,
  },
};
</script>

<style lang="scss" scoped>
// news-container
.news-container {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
// news-container

// news
.news {
  &__column {
    min-width: 83.33vw;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-right: 24px;

    opacity: 0.4;
    transition: opacity 0.5s;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;

    @media screen and (min-width: 576px) {
      min-width: 480px;
      padding-right: 140px;
    }

    @media screen and (min-width: 1024px) {
      min-width: 500px;
      padding-right: 140px;
    }

    // news__column_clear
    &_clear {
      opacity: 1;
      transition: opacity 0.5s;
      transition-property: opacity;
      transition-duration: 0.5s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
  }

  &__link {
    display: block;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 24px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: #8967b1;

    &:hover {
      color: #50287d;
    }
  }

  &__date {
    display: block;
    font-size: 13px;
    color: #5a646e;
    margin-bottom: 48px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }
} // news
</style>
