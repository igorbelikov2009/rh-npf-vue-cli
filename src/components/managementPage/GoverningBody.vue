<template>
  <div>
    <h2 class="management__heading">Правление</h2>

    <p class="management__description">
      Правление является коллегиальным исполнительным органом и осуществляет текущее руководство
      деятельностью Фонда в пределах своей компетенции, установленной Уставом Фонда:
    </p>

    <h3 class="management__name">Королева Елена Викторовна</h3>

    <span class="management__name-span">(предыдущая фамилия – Горшкова)</span>

    <p class="management__post">
      Генеральный директор. Единоличный исполнительный орган
    </p>

    <p class="management__paragraph">
      Опыт работы на финансовом рынке (в кредитных и некредитных финансовых организациях) - более 21
      года. В пенсионной индустрии с 2004 г.
    </p>

    <p class="management__paragraph">
      До прихода в АО НПФ "Ренессанс пенсии", в течение 11 лет возглавляла НПФ «Райффайзен». С 1998
      г. она возглавляла отдел продаж и маркетинга в депозитарии «Райффайзенбанк Австрия», до этого
      работала в московских офисах ING Bank и Merrill Lynch.
    </p>

    <p class="management__paragraph">
      Является членом Европейского пенсионного клуба. Получила высшее образование в Военном
      университете. Проходила обучение по программе МВА в Калифорнийском университете и курс для
      топ-менеджеров в Бизнес-школе Сколково.
    </p>

    <p class="management__paragraph">
      * является лицом, имеющим право подписи при принятии решений относительно размещения средств
      пенсионных резервов, предусмотренных подпунктами 3.1.1 - 3.1.3, 3.1.5 пункта 3.1 Указания
      Банка России от 4 июля 2016 года № 4060-У «О требованиях к организации системы управления
      рисками негосударственного пенсионного фонда», а также при утверждении внутренних документов
      Фонда, предусмотренных указанными подпунктами.
    </p>

    <h3 class="management__name">Перевязкина Анна Сергеевна</h3>

    <p class="management__post">Управляющий директор Фонда</p>

    <h3 class="management__name">Тимофеев Александр Анатольевич</h3>

    <p class="management__post">Начальник юридического управления</p>

    <hr class="management__alignment-line" />
  </div>
</template>

<script>
export default {
  name: 'GoverningBody',
};
</script>

<style lang="scss" scoped>
.management {
  &__heading {
    font-size: 34px;
    line-height: 48px;
    color: #28323c;
    font-weight: 400;
    letter-spacing: normal;
    margin: 24px 0;
  }

  &__description {
    font-size: 18px;
    line-height: 24px;
    color: #5a646e;
    margin: 24px 0;
  }

  &__name {
    font-size: 34px;
    line-height: 48px;
    color: #28323c;
    font-weight: 400;
    letter-spacing: normal;
    margin-top: 72px;
  }

  &__name-span {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: #001100;
  }

  &__post {
    font-size: 16px;
    line-height: 24px;
    color: #96a0aa;
    margin-bottom: 24px;
  }

  &__paragraph {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 24px;
  }

  &__alignment-line {
    border-top: 1px solid #e6f0fa;
    margin-top: 63px;
    position: relative;
    top: 10px;
    border: none;
  }

  &__department-title {
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    font-weight: 500;
    margin-bottom: 48px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__offis-man {
    width: 100%;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      width: 50%;
    }

    &:nth-of-type(2n) {
      padding-left: 0;

      @media screen and (min-width: 576px) {
        padding-left: 40px;
      }
    }
  }

  &__man-name {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #000000;
  }

  &__man-post {
    font-size: 16px;
    line-height: 24px;
    color: #78828c;
    margin-top: 24px;
    margin-bottom: 24px;
  }
}
// management
</style>
