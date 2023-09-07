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
          href="/pdf/infoOpening/Список акционеров фонда.pdf"
        >
          Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится
          Фонд (соответствует информации, направленной в Банк России 04.08.2021 г. для размещения на
          официальном сайте Банка России)
        </a>

        <div class="structure-and-rules__container-button" @click="onClickArchiveShareholders">
          <GuiButtonToArchive />
        </div>
      </div>

      <div class="structure-and-rules__column">
        <h1 class="structure-and-rules__heading">Пенсионные правила</h1>

        <a
          target="_blank"
          class="structure-and-rules__link"
          href="/pdf/infoOpening/пенсионные правила.pdf"
        >
          Пенсионные правила (PDF)
        </a>

        <div class="structure-and-rules__container-button" @click="onClickArchivePension">
          <GuiButtonToArchive />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GuiButtonToArchive from '@/components/gui/guiButton/GuiButtonToArchive.vue';

export default {
  name: 'StructureAndRules',

  methods: {
    onClickArchiveShareholders() {
      this.$emit('onClickArchiveShareholders');
      // console.log('onClickArchiveShareholders');
    },
    onClickArchivePension() {
      this.$emit('onClickArchivePension');
      // console.log('onClickArchivePension');
    },
  },
  components: {
    GuiButtonToArchive,
  },
};
</script>

<style lang="scss" scoped>
// structure-and-rules
.structure-and-rules {
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }

  // structure-and-rules__fixed
  &__fixed {
    position: fixed;
    top: 0;
    // z-index: 1;
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
</style>
