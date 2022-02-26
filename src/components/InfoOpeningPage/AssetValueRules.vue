<template>
  <section class="asset-value-rules">
    <div class="asset-value-rules__container">
      <div class="asset-value-rules__wrapper">
        <h2 class="asset-value-rules__heading">
          Правила определения стоимости чистых активов
        </h2>

        <a
          class="asset-value-rules__link"
          target="_blank"
          href="/pdf/infoOpening/asset-value-rules/Порядок определения стоимости чистых активов  НПФ РП-1577256574330.pdf"
        >
          Порядок определения стоимости чистых активов АО НПФ «Ренессанс пенсии» (опубликовано:
          23.12.2019)
        </a>

        <div class="asset-value-rules__container-button" @click="onClickArchiveAssetValueRules">
          <GuiButtonToArchive />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GuiButtonToArchive from '@/components/gui/guiButton/GuiButtonToArchive.vue';

export default {
  name: 'AssetValueRules',

  methods: {
    onClickArchiveAssetValueRules() {
      this.$emit('onClickArchiveAssetValueRules');
      // console.log('onClickArchiveAssetValueRules');
    },
  },

  components: {
    GuiButtonToArchive,
  },
};
</script>

<style lang="scss" scoped>
// asset-value-rules
.asset-value-rules {
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding-top: 48px;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
  }

  &__container {
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
  }

  &__wrapper {
    width: 100%;
    padding: 24px;
    margin-bottom: 24px;
    margin-left: 0;
    border: 1px solid #e4e4e4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 1160px) {
      // width: calc(100% - 40px);
      margin-left: 40px;
    }
  }

  &__heading {
    width: 100%;
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: black;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
    }
  }

  &__link {
    display: block;
    max-width: 400px;
    margin-top: 48px;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #50287d;
    cursor: pointer;
  }

  &__container-button {
    margin-top: 24px;
    max-width: 112px;

    @media screen and (min-width: 576px) {
      margin-top: 48px;
    }
  }
}
</style>
