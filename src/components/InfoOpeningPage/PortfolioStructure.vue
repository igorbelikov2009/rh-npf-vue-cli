<template>
  <section class="block-of-paragraphs">
    <div class="block-of-paragraphs__container">
      <p class="block-of-paragraphs__paragraph">
        <router-link class="block-of-paragraphs__link" :to="{ path: '/invest#portfolioStructure' }"
          >Структура инвестиционного портфеля Фонда</router-link
        >

        >
      </p>

      <p class="block-of-paragraphs__paragraph">
        <a
          class="block-of-paragraphs__link"
          target="_blank"
          href="/pdf/infoOpening/block-of-paragraphs/02 Информация о процессе размещения средств ПР_10.02-1581662050140.pdf"
          >Информация о процессе размещения средств пенсионных резервов (PDF)</a
        >
      </p>

      <p class="block-of-paragraphs__paragraph">
        <a
          class="block-of-paragraphs__link"
          target="_blank"
          href="/pdf/infoOpening/block-of-paragraphs/03 Сведения об органах и должностных лицах_01.07.2021-1625146217407.pdf"
          >Сведения об органах управления, членах совета директоров Фонда, должностных лицах и
          работниках Фонда (PDF)
        </a>
      </p>

      <p class="block-of-paragraphs__paragraph">
        <br />
      </p>

      <p class="block-of-paragraphs__paragraph">
        АО НПФ «Ренессанс пенсии» во всех отчетных периодах деятельность по обязательному
        пенсионному страхованию не осуществлял.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PortfolioStructure',
};
</script>

<style lang="scss" scoped>
.block-of-paragraphs {
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;

  @media screen and (min-width: 576px) {
    padding-right: 28px;
    padding-left: 28px;
  }

  &__container {
    max-width: 960px;
    margin: 0 auto;
  }

  &__paragraph {
    width: 100%;
    display: block;
    margin: 12px 0;
    font-size: 16px;
    line-height: 1.5rem;
    font-weight: 400;
    color: #5a646e;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  // block-of-paragraphs__paragraph-before
  &__paragraph-before {
    // width: 100%;
    width: calc(100% - 32px);
    display: block;
    margin: 12px 0;
    font-size: 16px;
    line-height: 1.5rem;
    font-weight: 400;
    color: #5a646e;
    margin-left: 24px;
    position: relative;

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

  &__link {
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: #55347c;

    &:hover {
      text-decoration: underline;
    }
  }

  &__heading {
    color: #28323c;
    font-size: 34px;
    line-height: 48px;
    font-weight: 400;
    letter-spacing: normal;
    margin: 24px 0;
  }
} // block-of-paragraphs
</style>
