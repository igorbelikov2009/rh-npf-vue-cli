<template>
  <section class="sredstva-description">
    <Paragraph
      v-for="(info, index) in information1"
      :key="index"
      :isHasBefore="info.isHasBefore"
      :text="info.text"
    />

    <h1 class="sredstva-description__heading">
      Положение о возможности увеличения или уменьшения дохода
    </h1>

    <!-- <Paragraph
      v-for="(info, index) in information2"
      :key="index"
      :isHasBefore="info.isHasBefore"
      :text="info.text"
    /> -->
  </section>
</template>

<script>
import Paragraph from '../../components/general/text/Paragraph.vue';

export default {
  name: 'ConvenienceDescription',
  data() {
    return {
      information1: [
        {
          isHasBefore: false,
          text:
            'АО НПФ «Ренессанс пенсии» осуществляет инвестирование пенсионных резервов в интересах участников Фонда на принципах сохранности и надежности в соответствии с действующим законодательством РФ и корпоративной инвестиционной политикой, которая:',
        },
        {
          isHasBefore: true,
          text:
            'основана на анализе макроэкономических тенденций и финансовых рынков в долгосрочной перспективе,',
        },
        {
          isHasBefore: true,
          text: 'предусматривает широкую диверсификацию инвестиционных портфелей,',
        },
        {
          isHasBefore: true,
          text:
            'предписывает четкий контроль и регулярное отслеживание динамики инвестиционных портфелей.',
        },
        {
          isHasBefore: false,
          text:
            'Банки, с которыми сотрудничает Фонд, являются участниками системы страхования вкладов и  обладают кредитными рейтингами от одного или нескольких международных и/или национальных рейтинговых агентств – Рейтинговое агентство «Эксперт РА», АКРА (Аналитическое Кредитное Рейтинговое Агентство), Standard & Poor`s, Fitch или Moody`s.',
        },
        {
          isHasBefore: false,
          text:
            'Для инвестиций в государственные ценные бумаги и другие финансовые инструменты Фонд привлекает управляющие компании. АО НПФ «Ренессанс пенсии» сотрудничает с АО «Сбер Управление Активами», АО «УК «ТРАНСФИНГРУП» и АО УК «СПУТНИК – УПРАВЛЕНИЕ КАПИТАЛОМ».',
        },
        {
          isHasBefore: false,
          text:
            'В соответствии с нормами законодательства, ежедневный контроль за соблюдением фондами и управляющими компаниями ограничений на размещение средств пенсионных резервов осуществляет специализированный депозитарий. Для АО НПФ «Ренессанс пенсии» эти услуги предоставляет АО ВТБ Специализированный депозитарий, занимающее лидирующие позиции на внутреннем рынке депозитарных услуг. Фонд на ежедневной основе рассчитывает долю активов, приходящуюся на каждый пенсионный счет. Окончательный расчет и распределение инвестиционного дохода за календарный год на пенсионные счета участников производится, в соответствии с требованиями законодательства РФ, до 31-го марта следующего календарного года.',
        },
      ],
      information2: [
        { isHasBefore: false, text: 'Просим вас обратить внимание на следующее:' },
        {
          isHasBefore: true,
          text: 'доход от размещения пенсионных резервов может увеличиваться или уменьшаться;',
        },
        {
          isHasBefore: true,
          text: 'результаты инвестирования в прошлом не определяют доходов в будущем;',
        },
        {
          isHasBefore: true,
          text: 'государство не гарантирует доходности размещения средств пенсионных резервов.',
        },
        {
          isHasBefore: false,
          text: ' ',
        },
        {
          isHasBefore: false,
          text: ' ',
        },
      ],
    };
  },
  components: {
    Paragraph,
  },
};
</script>

<style lang="scss" scoped>
// sredstva-description
.sredstva-description {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-color: #ffffff;
  padding: 0 24px 48px;

  @media screen and (min-width: 576px) {
    padding: 0 28px 48px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    padding-bottom: 48px;
  }

  &__specification {
    margin: 12px 0;
    font-size: 13px;
    color: #5a646e;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  &__opisaniye {
    margin: 12px 0;
    font-size: 13px;
    color: #5a646e;
    position: relative;
    margin-left: 32px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }

    &::before {
      position: absolute;
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #50287d;
      left: -24px;
      top: 8px;
    }
  }

  &__heading {
    font-size: 34px;
    line-height: 48px;
    margin: 24px 0;
    color: #28323c;
  }
} // sredstva-description
</style>
