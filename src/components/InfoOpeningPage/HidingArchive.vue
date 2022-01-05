<template>
  <section
    class="hiding-archive"
    :class="{
      'hiding-archive_left-50': isHidingArchiveVisible,
      'hiding-archive_left-100': !isHidingArchiveVisible,
    }"
  >
    <div
      class="hiding-archive__background"
      :class="{ 'hiding-archive__background_blur': isHidingArchiveVisible }"
    ></div>

    <div
      class="hiding-archive__archives"
      :class="{
        'hiding-archive__archives_left-50': isHidingArchiveVisible,
        'hiding-archive__archives_left-100': !isHidingArchiveVisible,
      }"
    >
      <div class="hiding-archive__wrapper">
        <div class="hiding-archive__content">
          <ArchiveShareholders v-if="isArchiveShareholdersVisible" />

          <ArchivePension v-if="isArchivePensionVisible" />

          <ArchiveReporting v-if="isArchiveReportingVisible" />

          <ArchiveAssetValueRules v-if="isArchiveAssetValueRulesVisible" />
        </div>

        <div
          class="hiding-archive__top-block"
          :class="{
            'hiding-archive__top-block_left-50': isHidingArchiveVisible,
            'hiding-archive__top-block_left-100': !isHidingArchiveVisible,
          }"
        >
          <p class="hiding-archive__heading">Архив</p>

          <div class="hiding-archive__image" @click="onClickHidingArchive">
            <DarkIcon icon="Cross" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DarkIcon from '@/components/general/DarkIcon.vue';
import ArchiveShareholders from '@/components/InfoOpeningPage/hidingArchive/ArchiveShareholders.vue';
import ArchivePension from '@/components/InfoOpeningPage/hidingArchive/ArchivePension.vue';
import ArchiveReporting from '@/components/InfoOpeningPage/hidingArchive/ArchiveReporting.vue';
import ArchiveAssetValueRules from '@/components/InfoOpeningPage/hidingArchive/ArchiveAssetValueRules.vue';

export default {
  name: 'HidingArchive',

  props: {
    isHidingArchiveVisible: { type: Boolean, default: false },
    isArchiveShareholdersVisible: { type: Boolean, default: false },
    isArchivePensionVisible: { type: Boolean, default: false },
    isArchiveReportingVisible: { type: Boolean, default: false },
    isArchiveAssetValueRulesVisible: { type: Boolean, default: false },
  },

  methods: {
    onClickHidingArchive() {
      this.$emit('onClickHidingArchive');
    },
  },

  components: {
    DarkIcon,
    ArchiveShareholders,
    ArchivePension,
    ArchiveReporting,
    ArchiveAssetValueRules,
  },
};
</script>

<style lang="scss" scoped>
.hiding-archive {
  width: 50%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  // hiding-archive_left-50
  &_left-50 {
    display: block;
    left: 50%;
    transition: left 500ms ease;
  }

  // hiding-archive_left-100
  &_left-100 {
    left: 100%;
    transition: left 0.5s ease;
  }

  &__background {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0;

    // hiding-archive__background_blur
    &_blur {
      position: fixed;
      opacity: 0.16;
    }
  }

  &__archives {
    width: 50vw;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 48px;
    background: #fff;
    box-shadow: 0px 8px 8px gray;
    padding-right: 24px;
    padding-left: 24px;

    @media screen and (min-width: 576px) {
      padding-right: 28px;
      padding-left: 28px;
    }

    // hiding-archive__archives_left-50
    &_left-50 {
      left: 50%;
      transition: left 500ms ease;
    }

    // hiding-archive__archives_left-100
    &_left-100 {
      left: 100%;
      transition: left 0.5s ease;
    }
  }

  &__wrapper {
    overflow: auto;
    height: 100%;
  }

  &__top-block {
    width: 50%;
    position: fixed;
    top: 0;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
      180deg,
      #fff 20.31%,
      hsla(0, 0%, 100%, 0.72) 80.5%,
      hsla(0, 0%, 100%, 0)
    );
    background-color: #fff;
    padding-right: 24px;
    padding-left: 24px;

    @media screen and (min-width: 576px) {
      width: 50%;
      padding-right: 28px;
      padding-left: 28px;
    }

    // hiding-archive__top-block_left-50
    &_left-50 {
      left: 50%;
      transition: left 500ms ease;
    }

    // hiding-archive__top-block_left-100
    &_left-100 {
      left: 100%;
      transition: left 0.5s ease;
    }
  }

  &__heading {
    font-size: 34px;
    line-height: 48px;
    font-weight: 400;
    color: black;
  }

  &__image {
    cursor: pointer;
  }

  &__content {
    padding-top: 24px;
  }

  &__subheading {
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 48px;
  }
}
</style>
