<template>
  <section class="pension-programs">
    <h1 class="pension-programs__heading">Пенсионные программы</h1>
    <Expanding
      v-for="(expandingBlock, index) in expandingBlocks"
      :key="index"
      :isContentVisible="expandingBlock.isContentVisible"
      :title="expandingBlock.title"
      :paragraphs="expandingBlock.paragraphs"
    />
  </section>
</template>

<script>
import Expanding from '@/components/general/expanding/Expanding';
export default {
  name: 'PensionPrograms',
  data() {
    return {
      expandingBlocks: [
        {
          isContentVisible: false,
          title:
            'Ранее пенсионную программу нашей компании реализовывал НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ», а теперь мои пенсионные суммы находятся в АО НПФ «Ренессанс пенсии». Что для меня изменилось в связи с этим?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'АО НПФ «Ренессанс пенсии» создано в результате реорганизации некоммерческой организации Негосударственного пенсионного фонда «БЛАГОСОСТОЯНИЕ ЭМЭНСИ» в форме преобразования в акционерный пенсионный фонд в соответствии с Федеральным законом от 28.12.2013 № 410-ФЗ «О внесении изменений в Федеральный закон «О негосударственных пенсионных фондах» и отдельные законодательные акты Российской Федерации». К АО НПФ «Ренессанс пенсии» в порядке правопреемства перешли в полном объеме все права и обязанности НПФ «БЛАГОСОСТОЯНИЕ ЭМЭНСИ». Реорганизация Фонда не требует переподписания каких-либо документов.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title:
            'Я являюсь сотрудником компании, реализующей пенсионную программу в партнерстве с АО НПФ «Ренессанс пенсии». Где я могу получить информацию о пенсионной программе?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'О деталях текущей программы можно узнать в Фонде по телефону горячей линии, на интернет-сайте в личном кабинете участника, а также в отделе кадров Вашей компании.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title:
            'Как узнать размер баланса на моем пенсионном счете и сумму средств, перечисленных в мою пользу компании?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText: 'Вы можете получить данную информацию',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
            {
              isHasBefore: true,
              paragraphText:
                'из электронной выписки в личном кабинете (обновляется регулярно, по мере зачисления на Ваш счет очередных пенсионных взносов).',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
            {
              isHasBefore: true,
              paragraphText: 'подключив бесплатный сервис',
              paragraphTextAfter: 'о балансе и поступлениях на счет.',
              isHasLink: true,
              linkHref: '#',
              linkText: 'CМС-оповещений',
            },
            {
              isHasBefore: true,
              paragraphText: 'позвонив по телефону',
              paragraphTextAfter: '',
              isHasLink: true,
              linkHref: '#',
              linkText: 'горячей линии',
            },
          ],
        },
        {
          isContentVisible: false,
          title: 'Что произойдет с пенсионными суммами в случае смерти?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                ' В случае наступления смерти участника до начала выплаты пенсии права на пенсионные суммы передаются правопреемнику или, в случае если правопреемник не назначен, наследуются в соответствии с законодательством Российской Федерации.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
            {
              isHasBefore: false,
              paragraphText:
                'В случае наступления смерти участника после начала выплаты пенсии, права на оставшиеся пенсионные суммы передаются правопреемнику или наследуются, если это предусмотрено выбранным типом пенсии, в течение всего периода для срочных схем выплаты пенсий и гарантированного периода для пожизненных схем выплаты пенсий.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title:
            'Я являюсь участником пенсионной программы Фонда. Где я буду получать свою пенсию?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'Негосударственная пенсия, размер и периодичность которой согласуется с Фондом в момент Вашего выхода на пенсию, будет выплачиваться Фондом на Ваш банковский счет.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title: 'В какой валюте уплачиваются взносы, осуществляются выплаты пенсионных сумм?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                ' Все денежные взаиморасчеты осуществляются в рублях РФ. При изменении экономической ситуации компания и Фонд оставляют за собой право корректировать пенсионную программу таким образом, чтобы при соблюдении требований законодательства обеспечить максимальную защиту накоплений участников.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title:
            'Я являюсь сотрудником компании, реализующей пенсионную программу с АО НПФ «Ренессанс пенсии». Каков размер моей будущей пенсии?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'Размер пенсии не может быть определен заранее и зависит от размера взносов, срока участия в пенсионной программе, возраста выхода на пенсию, роста заработной платы и инвестиционного дохода, вида пенсии. Вид пенсии выбирается участником при достижении пенсионных оснований. Приблизительный расчет будущей пенсии можно рассчитать, воспользовавшись пенсионным калькулятором на сайте Фонда.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title: 'Что такое пожизненная пенсия? Что такое срочная пенсия?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'Пожизненная пенсия выплачивается с момента достижения участником пенсионных оснований и до момента смерти.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
            {
              isHasBefore: false,
              paragraphText:
                'Для получения срочной пенсии необходимо выбрать срок, в течение которого она будет выплачиваться (не менее 5 лет).',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title: 'Что будет, если я выйду из пенсионной программы?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'Участие в пенсионной программе личными взносами является добровольным и зависит только от Вашего желания. При выходе из пенсионной программы до наступления пенсионных оснований, можно воспользоваться правом на получение Выкупной Суммы. Выкупная Сумма рассчитывается в соответствии с условиями договора негосударственного пенсионного обеспечения за вычетом НДФЛ, предусмотренного действующим законодательством РФ.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title: 'Что такое отложенное право/вестинг?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                ' При выполнении условий отложенного права (или правил вестинга) участники пенсионной программы получают право распоряжаться пенсионными суммами, сформированными в их пользу за счет компании. Правила вестинга определяются компанией в период разработки пенсионной программы и могут включать, например, определенный срок участия в пенсионной программе или количество лет стажа в компании.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
        {
          isContentVisible: false,
          title:
            'Что произойдет с моими пенсионными суммами в рамках корпоративного договора, если я выйду из пенсионной программы, но буду продолжать осуществлять взносы самостоятельно, как частное лицо?',
          paragraphs: [
            {
              isHasBefore: false,
              paragraphText:
                'Если участник выходит из пенсионной программы, но намерен продолжить сотрудничество с Фондом, как частное лицо, необходимо заключить индивидуальный договор с Фондом. Пенсионные суммы, сформированные в рамках корпоративного договора, переводятся на индивидуальный договор с учетом правил вестинга. Таким образом, Фонд объединяет в одном договоре свои обязательства перед участником. Новые пенсионные суммы учитываются на счетах индивидуального договора.',
              paragraphTextAfter: '',
              isHasLink: false,
              linkHref: '#',
              linkText: '',
            },
          ],
        },
      ],
    };
  },

  components: {
    Expanding,
  },
};
</script>

<style lang="scss" scoped>
// pension-programs
.pension-programs {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  border-color: #ffffff;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }

  @media screen and (min-width: 768px) {
    padding: 48px 28px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media screen and (min-width: 1160px) {
    padding-top: 72px;
  }

  &__heading {
    font-size: 34px;
    line-height: 48px;
    color: #363636;
    margin-bottom: 24px;
  }
}
// pension-programs
</style>
