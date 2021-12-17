<template>
  <section class="structure-and-rules">
    <div class="structure-and-rules__container">
      <div class="structure-and-rules__column">
        <h1 class="structure-and-rules__heading">
          Структура и состав акционеров
        </h1>

        <a
          target="_blank"
          class="structure-and-rules__link"
          href="../assets/pdf/infoOpening/Список акционеров фонда.pdf"
        >
          Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится
          Фонд (соответствует информации, направленной в Банк России 04.08.2021 г. для размещения на
          официальном сайте Банка России)
        </a>

        <div class="structure-and-rules__container-button">
          <button class="button-to-archive">Архив</button>
        </div>
      </div>

      <div class="structure-and-rules__column">
        <h1 class="structure-and-rules__heading">Пенсионные правила</h1>

        <a
          target="_blank"
          class="structure-and-rules__link"
          href="../assets/pdf/infoOpening/пенсионные правила.pdf"
        >
          Пенсионные правила (PDF)
        </a>

        <div class="structure-and-rules__container-button">
          <button class="button-to-archive">Архив</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StructureAndRules',
};
</script>

<style lang="scss" scoped>
// structure-and-rules
.structure-and-rules {
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 24px;
  }

  // structure-and-rules__fixed
  &__fixed {
    position: fixed;
    top: 0;
    z-index: 1;
  }

  &__container {
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 1160px) {
      flex-wrap: nowrap;
    }
  }

  &__column {
    width: 100%;
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #e4e4e4;
  }

  &__heading {
    font-size: 18px;
    line-height: 24px;
    color: #000;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    outline: none;
    color: #50287c;
    max-width: 400px;
    margin-top: 24px;
    cursor: pointer;

    &:hover {
      color: #50287d;
    }

    @media screen and (min-width: 576px) {
      margin-top: 48px;
    }
  }

  &__container-button {
    margin-top: 24px;
    width: 112px;

    @media screen and (min-width: 576px) {
      margin-top: 48px;
    }
  }
}
// structure-and-rules

// button-to-archive
.button-to-archive {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  // text-align: center;
  color: #50287d;
  background-color: #fff;
  border: 2px solid #50287d;
  border-radius: 24px;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 1;
  transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
    opacity 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);

  &:hover {
    background-color: #50287d;
    color: white;
    opacity: 0.8;
    transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
      opacity 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
  }
}
// button-to-archive
</style>
