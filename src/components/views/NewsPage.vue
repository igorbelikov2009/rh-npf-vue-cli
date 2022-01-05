<template>
  <div class="news-page">
    <TopBlock :image="topBlock.image" :heading="topBlock.heading" />
    <TopMenu />
    <section class="news-page__news">
      <div class="news-page__container">
        <RadioSwitching
          :switchItems="switchItems"
          @onChangeRadioSwitching="onChangeRadioSwitching"
        />

        <div class="news-page__row">
          <div class="news-page__list">
            <NewsLink
              v-for="(newsLink, index) in newsLinks"
              :key="index"
              :isNewsLinkVisible="true"
              :value="newsLink.value"
              :href="newsLink.href"
              :title="newsLink.title"
              :date="newsLink.date"
              @emitValue="onClickNewsLink"
            />

            <!--   :isBlock2014Visible="radioSwitcingValue === 0" -->
            <!-- :isNewsLinkVisible="
                newsLink.value === valueRadio - 1 || newsLink.value === valueRadio + 1
              " -->
          </div>

          <div class="news-page__contact">
            <p class="news-page__contact-header">Контакты пресс-службы</p>

            <p class="newnews-page__contact-adress">
              115114, Россия, Москва, Дербеневская набережная, 7, стр. 22, подъезд B, 3 этаж
            </p>

            <p class="news-page__contact-phone">Телефон: 8 (495) 933-47-66</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import TopBlock from '@/components/general/TopBlock.vue';
import newsImage from '/public/images/news/news.jpg';
import TopMenu from '@/components/topMenu/TopMenu.vue';
import RadioSwitching from '@/components/gui/RadioSwitching.vue';
import NewsLink from '@/components/news/NewsLink.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'NewsPage',

  data() {
    return {
      topBlock: {
        image: newsImage,
        heading: 'Новости',
      },
      radioSwitcingValue: 0,
      newsLinkValue: 0,
      switchItems: [
        {
          name: '2021',
          value: 0,
        },
        {
          name: '2020',
          value: 1,
        },
        {
          name: '2019',
          value: 2,
        },
        {
          name: '2018',
          value: 3,
        },
        {
          name: '2017',
          value: 4,
        },
        {
          name: '2016',
          value: 5,
        },
        {
          name: '2015',
          value: 6,
        },
        {
          name: '2014',
          value: 7,
        },
      ],
      valueRadio: 1,
      newsLinks: [
        //  <!-- 2021 -->
        {
          value: 37,
          href: '../templates/news/38.html',
          title: 'НПФ Сбербанка и НПФ «Ренессанс пенсии» закрыли сделку',
          date: '26 июля 2021 г.',
        },
        {
          value: 36,
          href: '../templates/news/37.html',
          title: 'Режим работы Фонда на период с 15 по 18 июня 2021 года',
          date: '15 июня 2021 г.',
        },
        {
          value: 35,
          href: '../templates/news/36.html',
          title: '«АО «НПФ Сбербанка» достиг соглашения о покупке АО НПФ «Ренессанс пенсии»',
          date: '01 июня 2021 г.',
        },
        {
          value: 34,
          href: '../templates/news/35.html',
          title: 'Режим работы Фонда 7 мая 2021 года',
          date: '07 мая 2021 г.',
        },
        {
          value: 33,
          href: '../templates/news/34.html',
          title: 'Режим работы Фонда на период с 04 по 07 мая 2021 года',
          date: '27 апреля 2021 г.',
        },

        //    <!-- 2020 -->
        {
          value: 32,
          href: '../templates/news/33.html',
          title: 'Режим работы Фонда',
          date: '25 мая 2020 г.',
        },
        {
          value: 31,
          href: '../templates/news/32.html',
          title: 'Режим работы Фонда на период с 06 по 08 мая 2020 года',
          date: '06 мая 2020 г.',
        },
        {
          value: 30,
          href: '../templates/news/31.html',
          title: 'Банк России зарегистрировал Отчет об итогах выпуска ценных бумаг Фонда',
          date: '23 апреля 2020 г.',
        },
        {
          value: 29,
          href: '../templates/news/30.html',
          title: 'Режим работы Фонда на период с 06 по 30 апреля 2020 года',
          date: '06 апреля 2020 г.',
        },
        {
          value: 28,
          href: '../templates/news/29.html',
          title: 'Режим работы Фонда на период с 30 марта по 3 апреля 2020 года',
          date: '27 марта 2020 г.',
        },
        {
          value: 27,
          href: '../templates/news/28.html',
          title:
            '18 марта 2020 года вступил в силу Федеральный закон N 61-ФЗ "О внесении изменений в статью 10 Федерального закона "О негосударственных пенсионных фондах" по вопросам назначения негосударственных пенсий"',
          date: '24 марта 2020 г.',
        },
        {
          value: 26,
          href: '../templates/news/27.html',
          title:
            'Совет директоров Фонда 12.02.2020 г. принял решение о порядке и об условиях распределения акций Фонда, оставшихся неразмещенными на дату внесения в Единый государственный реестр юридических лиц записи о государственной регистрации Фонда',
          date: '14 февраля 2020 г.',
        },

        //   <!-- 2019 -->
        {
          value: 25,
          href: '../templates/news/26.html',
          title:
            'Рейтинговое агентство «Эксперт РА» повысило рейтинг финансовой надежности АО НПФ «Ренессанс пенсии» до уровня ruAA',
          date: '30 декабря 2019 г.',
        },
        {
          value: 24,
          href: '../templates/news/25.html',
          title: 'АО НПФ «Ренессанс пенсии» стал лауреатом премии «Финансовая Элита»',
          date: '20 декабря 2019 г.',
        },
        {
          value: 23,
          href: '../templates/news/24.html',
          title: 'АО НПФ «Ренессанс пенсии» развивает сотрудничество с ВТБ',
          date: '21 июня 2019 г.',
        },
        {
          value: 22,
          href: '../templates/news/23.html',
          title: 'Стратегия для пенсионера',
          date: '05 июня 2019 г.',
        },
        {
          value: 21,
          href: '../templates/news/22.html',
          title:
            'Рейтинговое агентство «Эксперт РА» подтвердило рейтинг финансовой надежности АО НПФ «Ренессанс пенсии»',
          date: '04 марта 2019 г.',
        },

        //  <!-- 2018 -->
        {
          value: 20,
          href: '../templates/news/21.html',
          title:
            'Сообщение о завершении процедуры реорганизации НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» в форме преобразования в Акционерное общество негосударственный пенсионный фонд «Ренессанс пенсии»',
          date: '14 декабря 2018 г.',
        },
        {
          value: 19,
          href: '../templates/news/20.html',
          title: 'О согласовании проведения реорганизации НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ»',
          date: '06 декабря 2018 г.',
        },
        {
          value: 18,
          href: '../templates/news/19.html',
          title:
            'Совет НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» принял решение о внесении изменений в решение Совета Фонда по вопросу реорганизации Фонда в форме преобразования в акционерный пенсионный фонд',
          date: '15 октября 2018 г.',
        },
        {
          value: 17,
          href: '../templates/news/18.html',
          title: 'СМЕНА АДРЕСА НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ»',
          date: '02 августа 2018 г.',
        },
        {
          value: 16,
          href: '../templates/news/17.html',
          title: 'Назначение Исполнительного Директора',
          date: '28 мая 2018 г.',
        },
        {
          value: 15,
          href: '../templates/news/16.html',
          title: 'Изменения в руководстве Фонда',
          date: '28 марта 2018 г.',
        },

        // <!-- 2017 -->
        {
          value: 14,
          href: '../templates/news/15.html',
          title:
            'Группа Ренессанс страхование, НПФ «БЛАГОСОСТОЯНИЕ» и Бэринг Восток успешно завершили сделку по созданию объединенной страховой группы',
          date: '24 ноября 2017 г.',
        },
        {
          value: 13,
          href: '../templates/news/14.html',
          title:
            'Совет НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» принял решение о внесении изменений в решение Совета Фонда по вопросу реорганизации Фонда в форме преобразования в акционерный пенсионный фонд',
          date: '07 ноября 2017 г.',
        },
        {
          value: 12,
          href: '../templates/news/13.html',
          title: 'Уведомление об аннулировании доверенностей',
          date: '13 октября 2017 г.',
        },
        {
          value: 11,
          href: '../templates/news/12.html',
          title: 'Совет НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» принял решение о реорганизации Фонда',
          date: '27 сентября 2017 г.',
        },
        {
          value: 10,
          href: '../templates/news/11.html',
          title:
            'Сообщение о проведении заседания Совета Фонда НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ», в повестку дня которого включен вопрос о реорганизации НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» в форме преобразования в акционерный пенсионный фонд',
          date: '23 августа 2017 г.',
        },
        {
          value: 9,
          href: '../templates/news/10.html',
          title:
            'Ренессанс Страхование и НПФ «БЛАГОСОСТОЯНИЕ» создают единую страховую группу при участии фонда Бэринг Восток',
          date: '06 июля 2017 г.',
        },
        {
          value: 8,
          href: '../templates/news/09.html',
          title: 'Переезд офиса НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ»',
          date: '15 мая 2017 г.',
        },

        //  <!-- 2016 -->
        {
          value: 7,
          href: '../templates/news/08.html',
          title: 'Эксперт РА подтвердил рейтинг НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++',
          date: '07 декабря 2016 г.',
        },
        {
          value: 6,
          href: '../templates/news/07.html',
          title:
            'НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» вступил в Национальную ассоциацию негосударственных пенсионных фондов',
          date: '12 сентября 2016 г.',
        },
        {
          value: 5,
          href: '../templates/news/06.html',
          title:
            'НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» опубликовал финансовую отчетность в соответствии с международными стандартами',
          date: '01 июня 2016 г.',
        },
        {
          value: 4,
          href: '../templates/news/05.html',
          title: 'Поздравляем с Праздником Весны!',
          date: '04 марта 2016 г.',
        },
        {
          value: 3,
          href: '../templates/news/04.html',
          title:
            'НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» подвел итоги инвестиционной деятельности за 2015 год.',
          date: '10 февраля 2016 г.',
        },
        {
          value: 2,
          href: '../templates/news/03.html',
          title:
            'Группа компаний «БЛАГОСОСТОЯНИЕ» приобрела 100% акций Акционерного общества «ИНТАЧ СТРАХОВАНИЕ»(INTOUCH)',
          date: '29 января 2016 г.',
        },

        // <!-- 2015 -->
        {
          value: 1,
          href: '../news/02.html',
          title: 'RAEX (Эксперт РА) подтвердил рейтинг НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++',
          date: '10 декабря 2015 г.',
        },

        //  <!-- 2014 -->
        {
          value: 0,
          href: '../templates/news/01.html',
          title:
            '«Эксперт РА» (RAEX) подтвердил рейтинг надежности НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» на уровне А++',
          date: '30 декабря 2014 г.',
        },
        //  <!-- 2014 -->
      ],
    };
  },

  methods: {
    onChangeRadioSwitching(value) {
      this.radioSwitcingValue = value;
      console.log('radioSwitcingValue: ' + this.radioSwitcingValue);
    },
    onClickNewsLink(valueRadio) {
      this.valueRadio = valueRadio;
      console.log(this.valueRadio);
    },
  },

  components: {
    TopBlock,
    TopMenu,
    RadioSwitching,
    NewsLink,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.news-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;

  // news-page__background-white
  &__background-white {
    background-color: #fff;
    transition: all 0.28s ease;
  }

  // news-page__background-gray
  &__background-gray {
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.28s ease;
  }

  &__news {
    width: 100%;
    padding: 24px;

    @media screen and (min-width: 576px) {
      padding-right: 28px;
      padding-left: 28px;
      padding-top: 48px;
      padding-bottom: 48px;
    }
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
  }

  &__list {
    position: relative;
    width: 100%;
    padding-right: 12px;

    @media screen and (min-width: 576px) {
      width: 66.66%;
    }

    @media screen and (min-width: 768px) {
      width: 66.66%;
      padding-right: 14px;
    }
  }

  &__contact {
    display: none;

    @media screen and (min-width: 576px) {
      display: block;
      width: 33.33%;
      padding-left: 12px;
    }

    @media screen and (min-width: 768px) {
      width: 33.33%;
      padding-left: 14px;
    }
  }

  &__contact-header {
    font-size: 18px;
    line-height: 24px;
    color: #000;
    margin-bottom: 24px;
  }

  &__contact-adress {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
  }

  &__contact-phone {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
    margin-top: 24px;
  }
}
</style>
