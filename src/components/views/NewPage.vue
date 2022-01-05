<template>
  <div class="new-page">
    <TopMenu :ifBackgroundWhite="true" />

    <div class="new-page__head">
      <div class="new-page__container">
        <router-link
          class="new-page__link-to-news"
          :to="{ name: 'newsPage' }"
          @mouseover="isLinkToNewsHovered = true"
          @mouseout="isLinkToNewsHovered = false"
        >
          <div class="new-page__icons">
            <TripleIcon :hovered="isLinkToNewsHovered" icon="Arrow Down" />
          </div>
          <p class="new-page__link-title">К списку новостей</p>
        </router-link>

        <div>
          <News00 :isNewsVisible="valueRadio === news0.value" :value="news0.value" />
          <News01 :isNewsVisible="valueRadio === news1.value" :value="news1.value" />
          <News02 :isNewsVisible="valueRadio === news2.value" :value="news2.value" />
          <News03 :isNewsVisible="valueRadio === news3.value" :value="news3.value" />
          <News04 :isNewsVisible="valueRadio === news4.value" :value="news4.value" />
          <News05 :isNewsVisible="valueRadio === news5.value" :value="news5.value" />
          <News06 :isNewsVisible="valueRadio === news6.value" :value="news6.value" />
          <News07 :isNewsVisible="valueRadio === news7.value" :value="news7.value" />
          <News08 :isNewsVisible="valueRadio === news8.value" :value="news8.value" />
          <News09 :isNewsVisible="valueRadio === news9.value" :value="news9.value" />
          <News10 :isNewsVisible="valueRadio === news10.value" :value="news10.value" />
          <News11 :isNewsVisible="valueRadio === news11.value" :value="news11.value" />
          <News12 :isNewsVisible="valueRadio === news12.value" :value="news12.value" />
          <News13 :isNewsVisible="valueRadio === news13.value" :value="news13.value" />
          <News14 :isNewsVisible="valueRadio === news14.value" :value="news14.value" />
          <News15 :isNewsVisible="valueRadio === news15.value" :value="news15.value" />
          <News16 :isNewsVisible="valueRadio === news16.value" :value="news16.value" />
          <News17 :isNewsVisible="valueRadio === news17.value" :value="news17.value" />
          <News18 :isNewsVisible="valueRadio === news18.value" :value="news18.value" />
          <News19 :isNewsVisible="valueRadio === news19.value" :value="news19.value" />
          <News20 :isNewsVisible="valueRadio === news20.value" :value="news20.value" />
          <News21 :isNewsVisible="valueRadio === news21.value" :value="news21.value" />
          <News22 :isNewsVisible="valueRadio === news22.value" :value="news22.value" />
          <News23 :isNewsVisible="valueRadio === news23.value" :value="news23.value" />
          <News24 :isNewsVisible="valueRadio === news24.value" :value="news24.value" />
          <News25 :isNewsVisible="valueRadio === news25.value" :value="news25.value" />
          <News26 :isNewsVisible="valueRadio === news26.value" :value="news26.value" />
          <News27 :isNewsVisible="valueRadio === news27.value" :value="news27.value" />
          <News28 :isNewsVisible="valueRadio === news28.value" :value="news28.value" />
          <News29 :isNewsVisible="valueRadio === news29.value" :value="news29.value" />
          <News30 :isNewsVisible="valueRadio === news30.value" :value="news30.value" />
          <News31 :isNewsVisible="valueRadio === news31.value" :value="news31.value" />
          <News32 :isNewsVisible="valueRadio === news32.value" :value="news32.value" />
          <News33 :isNewsVisible="valueRadio === news33.value" :value="news33.value" />
          <News34 :isNewsVisible="valueRadio === news34.value" :value="news34.value" />
          <News35 :isNewsVisible="valueRadio === news35.value" :value="news35.value" />
          <News36 :isNewsVisible="valueRadio === news36.value" :value="news36.value" />
          <News37 :isNewsVisible="valueRadio === news37.value" :value="news37.value" />
        </div>

        <div class="news__footer">
          <h1 class="news__footer-heading">Другие новости</h1>

          <NewsLink
            v-for="(newsLink, index) in newsLinks"
            :key="index"
            :isNewsLinkVisible="
              newsLink.value === valueRadio - 1 || newsLink.value === valueRadio + 1
            "
            :value="newsLink.value"
            :href="newsLink.href"
            :title="newsLink.title"
            :date="newsLink.date"
            @emitValue="onClickNewsLink"
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import TripleIcon from '@/components/general/TripleIcon.vue';
import NewsLink from '@/components/news/NewsLink.vue';
// import NewsFooter from '@/components/news/NewsFooter.vue';
import Footer from '@/components/Footer.vue';
import News00 from '@/components/news/newsBlock/News00.vue';
import News01 from '@/components/news/newsBlock/News01.vue';
import News02 from '@/components/news/newsBlock/News02.vue';
import News03 from '@/components/news/newsBlock/News03.vue';
import News04 from '@/components/news/newsBlock/News04.vue';
import News05 from '@/components/news/newsBlock/News05.vue';
import News06 from '@/components/news/newsBlock/News06.vue';
import News07 from '@/components/news/newsBlock/News07.vue';
import News08 from '@/components/news/newsBlock/News08.vue';
import News09 from '@/components/news/newsBlock/News09.vue';
import News10 from '@/components/news/newsBlock/News10.vue';
import News11 from '@/components/news/newsBlock/News11.vue';
import News12 from '@/components/news/newsBlock/News12.vue';
import News13 from '@/components/news/newsBlock/News13.vue';
import News14 from '@/components/news/newsBlock/News14.vue';
import News15 from '@/components/news/newsBlock/News15.vue';
import News16 from '@/components/news/newsBlock/News16.vue';
import News17 from '@/components/news/newsBlock/News17.vue';
import News18 from '@/components/news/newsBlock/News18.vue';
import News19 from '@/components/news/newsBlock/News19.vue';
import News20 from '@/components/news/newsBlock/News20.vue';
import News21 from '@/components/news/newsBlock/News21.vue';
import News22 from '@/components/news/newsBlock/News22.vue';
import News23 from '@/components/news/newsBlock/News23.vue';
import News24 from '@/components/news/newsBlock/News24.vue';
import News25 from '@/components/news/newsBlock/News25.vue';
import News26 from '@/components/news/newsBlock/News26.vue';
import News27 from '@/components/news/newsBlock/News27.vue';
import News28 from '@/components/news/newsBlock/News28.vue';
import News29 from '@/components/news/newsBlock/News29.vue';
import News30 from '@/components/news/newsBlock/News30.vue';
import News31 from '@/components/news/newsBlock/News31.vue';
import News32 from '@/components/news/newsBlock/News32.vue';
import News33 from '@/components/news/newsBlock/News33.vue';
import News34 from '@/components/news/newsBlock/News34.vue';
import News35 from '@/components/news/newsBlock/News35.vue';
import News36 from '@/components/news/newsBlock/News36.vue';
import News37 from '@/components/news/newsBlock/News37.vue';

export default {
  name: 'NewPage',
  data() {
    return {
      isLinkToNewsHovered: false,
      valueRadio: 1,
      news0: { value: 0 },
      news1: { value: 1 },
      news2: { value: 2 },
      news3: { value: 3 },
      news4: { value: 4 },
      news5: { value: 5 },
      news6: { value: 6 },
      news7: { value: 7 },
      news8: { value: 8 },
      news9: { value: 9 },
      news10: { value: 10 },
      news11: { value: 11 },
      news12: { value: 12 },
      news13: { value: 13 },
      news14: { value: 14 },
      news15: { value: 15 },
      news16: { value: 16 },
      news17: { value: 17 },
      news18: { value: 18 },
      news19: { value: 19 },
      news20: { value: 20 },
      news21: { value: 21 },
      news22: { value: 22 },
      news23: { value: 23 },
      news24: { value: 24 },
      news25: { value: 25 },
      news26: { value: 26 },
      news27: { value: 27 },
      news28: { value: 28 },
      news29: { value: 29 },
      news30: { value: 30 },
      news31: { value: 31 },
      news32: { value: 32 },
      news33: { value: 33 },
      news34: { value: 34 },
      news35: { value: 35 },
      news36: { value: 36 },
      news37: { value: 37 },

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
    onClickNewsLink(valueRadio) {
      this.valueRadio = valueRadio;
      console.log(this.valueRadio);
    },
  },

  components: {
    TripleIcon,
    TopMenu,
    NewsLink,
    // NewsFooter,
    Footer,
    News00,
    News01,
    News02,
    News03,
    News04,
    News05,
    News06,
    News07,
    News08,
    News09,
    News10,
    News11,
    News12,
    News13,
    News14,
    News15,
    News16,
    News17,
    News18,
    News19,
    News20,
    News21,
    News22,
    News23,
    News24,
    News25,
    News26,
    News27,
    News28,
    News29,
    News30,
    News31,
    News32,
    News33,
    News34,
    News35,
    News36,
    News37,
  },
};
</script>

<style lang="scss" scoped>
.new-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;

  &__head {
    width: 100%;
    padding: 24px;
    box-sizing: border-box;

    @media screen and (min-width: 576px) {
      padding-top: 48px;
      padding-left: 24px;
      padding-right: 24px;
      padding-bottom: 24px;
    }
  }

  &__container {
    width: 100%;
    max-width: 660px;
    margin: 0 auto;
  }

  &__link-to-news {
    margin-bottom: 24px;
    display: flex;
    cursor: pointer;
    text-decoration: none;
    outline: none;
  }

  &__icons {
    width: 24px;
    height: 24px;
    position: relative;
    transform: rotate(90deg);
  }

  &__link-title {
    font-size: 16px;
    line-height: 24px;
    color: #96a0aa;
    display: block;
    margin-left: 12px;

    &:hover {
      color: black;
    }
  }
}

.news {
  &__footer {
    width: 100%;
    padding-top: 24px;
    padding-bottom: 0;

    @media screen and (min-width: 576px) {
      padding-top: 48px;
      padding-bottom: 24px;
    }
  }

  &__footer-heading {
    font-size: 34px;
    line-height: 48px;
    color: #000000;
    display: block;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 48px;
    }
  }
}
</style>
