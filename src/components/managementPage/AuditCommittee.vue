<template>
  <div>
    <h2 class="management__department-title">Ревизионная комиссия</h2>

    <div class="management__list">
      <div class="management__offis-man">
        <p class="management__man-name">
          Васюнина Анна Александровна
        </p>
      </div>

      <div class="management__offis-man">
        <p class="management__man-name">
          Абдрашитов Евгений Александрович
        </p>
      </div>

      <div class="management__offis-man">
        <p class="management__man-name">
          Игумнова Наталья Викторовна
        </p>
      </div>

      <div class="management__offis-man">
        <p class="management__man-name">Кондратюк Яков Сергеевич</p>
      </div>

      <div class="management__offis-man">
        <p class="management__man-name">
          Королёва Наталия Геннадьевна
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuditCommittee',
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
</style>
