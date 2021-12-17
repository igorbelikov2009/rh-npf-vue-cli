<template>
  <section class="index index__background-white">
    <div class="index__container">
      <h1 class="index__heading">Показатели деятельности фонда</h1>

      <div class="switching">
        <div class="switching__list-top-buttons">
          <div class="switching__visible switching__visible_border-white">
            <div class="switching__inner switching__inner_backgr-white">
              <div class="switching__inner-elem">2021</div>

              <div class="switching__icon">
                <img
                  class="switching__image switching__image_rotate-0"
                  src="../../../public/icons/triple/Arrow Down/Dark.svg"
                  alt=""
                />
              </div>
            </div>

            <div class="switching__white-line switching__white-line_height-1">
              <div class="switching__black-line switching__black-line_width-50"></div>

              <div class="switching__black-line switching__black-line_width-50"></div>
            </div>
            <div
              class="
                    switching__bottom-spase
                    switching__bottom-spase_background-fff
                  "
            >
              <br />
            </div>
          </div>

          <div class="switching__hiding-block switching__hiding-block_hide">
            <div class="switching__duplicate-inner-elem">
              <p class="switching__duplicate-inner-text">Архив</p>

              <div class="switching__duplicate-white-line">
                <div
                  class="
                        switching__duplicate-blue-line
                        switching__duplicate-blue-line_background-gray
                      "
                ></div>
              </div>
            </div>

            <div class="switching__container">
              <div class="switching__scrollable-block">
                <label
                  class="
                        switching__top-button switching__top-button_choosed
                        2021
                      "
                >
                  2021
                  <input type="radio" class="switching__top-input" value="4" />
                </label>

                <label class="switching__top-button 2020">
                  2020
                  <input type="radio" class="switching__top-input" value="3" />
                </label>

                <label class="switching__top-button 2019">
                  2019
                  <input type="radio" class="switching__top-input" value="2" />
                </label>

                <label class="switching__top-button 2018">
                  2018
                  <input type="radio" class="switching__top-input" value="1" />
                </label>

                <label class="switching__top-button 2017">
                  Архив
                  <input type="radio" class="switching__top-input" value="0" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="switching__list-bottom-buttons">
          <label
            class="
                  switching__bottom-button switching__bottom-button_choosed
                "
          >
            2021
            <input type="radio" class="switching__bottom-input" value="4" />
          </label>

          <label class="switching__bottom-button">
            2020
            <input type="radio" class="switching__bottom-input" value="3" />
          </label>

          <label class="switching__bottom-button">
            2019
            <input type="radio" class="switching__bottom-input" value="2" />
          </label>

          <label class="switching__bottom-button">
            2018
            <input type="radio" class="switching__bottom-input" value="1" />
          </label>

          <label class="switching__bottom-button">
            Архив
            <input type="radio" class="switching__bottom-input" value="0" />
          </label>
        </div>
      </div>

      <div class="index__list">
        <!-- <BlockArchive /> -->

        <!-- <Block2018 /> -->

        <!-- <Block2019 /> -->

        <!-- <Block2020 /> -->
        <Block2021 />
      </div>
    </div>
  </section>
</template>

<script>
import BlockArchive from '@/components/InfoOpeningPage/FundPerformanceArchive/BlockArchive.vue';
import Block2018 from '@/components/InfoOpeningPage/FundPerformanceArchive/Block2018.vue';
import Block2019 from '@/components/InfoOpeningPage/FundPerformanceArchive/Block2019.vue';
import Block2020 from '@/components/InfoOpeningPage/FundPerformanceArchive/Block2020.vue';
import Block2021 from '@/components/InfoOpeningPage/FundPerformanceArchive/Block2021.vue';

export default {
  name: 'FundPerformance',

  components: {
    BlockArchive,
    Block2018,
    Block2019,
    Block2020,
    Block2021,
  },
};
</script>

<style lang="scss" scoped>
// index
.index {
  width: 100%;
  background-color: #fff;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding: 48px 24px;
  }

  // index__background-white
  &__background-white {
    background-color: #fff;
    transition: all 0.28s ease;
  }

  // index__background-gray
  &__background-gray {
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.28s ease;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__heading {
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: #5a646e;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      font-size: 34px;
      line-height: 48px;
      margin-bottom: 48px;
    }
  }

  &__list {
    width: 100%;
  }

  &__block {
    // display: none;

    &:last-of-type {
      display: block;
    }
  }
}
// index

// switching
.switching {
  display: block;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    display: flex;
    align-items: center;
    margin-bottom: 48px;
  }

  &__list-top-buttons {
    // max-width: 530px;
    max-width: 546px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
    position: relative;

    @media screen and (min-width: 576px) {
      display: none;
    }
  }

  &__visible {
    width: 100%;
    border-radius: 5px;
    position: relative;
    z-index: 0;

    // switching__visible_border-white
    &_border-white {
      border: 1px solid #fff;
    }

    // switching__visible_border-gray
    &_border-gray {
      border: 1px solid #e4e4e4;
    }
  }

  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // switching__inner_backgr-white
    &__backgr-white {
      background-color: #fff;
      transition: all 0.36s ease;
    }

    // switching__inner_backgr-gray
    &_backgr-gray {
      background-color: #d0f0f6d1;
      transition: all 0.36s ease;
    }
  }

  &__inner-elem {
    font-size: 14px;
    line-height: 18px;
    color: #28323c;
    font-weight: 400;
    padding-top: 19px;
    padding-bottom: 19px;
    padding-left: 8px;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 8px;
  }

  &__image {
    width: 18px;
    height: 18px;
    flex: none;
    cursor: pointer;
    transition: transform 0.28s;
    transition-property: transform;
    transition-duration: 0.28s;
    transition-timing-function: ease;
    transition-delay: 0s;

    // switching__image_rotate-0
    &_rotate-0 {
      transform: scaleY(0.7) rotate(0deg);
    }

    // switching__image_rotate-180
    &_rotate-180 {
      transform: scaleY(0.7) rotate(180deg);
    }
  }

  &__white-line {
    width: calc(100% - 16px);
    background-color: #fff;
    position: absolute;
    bottom: 6px;
    left: 8px;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // switching__white-line_height-1
    &_height-1 {
      height: 1px;
      transition: width 0.7s ease-out;
    }

    // switching__white-line_height-2
    &_height-2 {
      height: 2px;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__black-line {
    background-color: black;

    // switching__black-line_width-50
    &_width-50 {
      height: 1px;
      width: 50%;
      transition: width 0.7s ease-out;
    }

    // switching__black-line_width-0
    &_width-0 {
      width: 0;
      height: 2px;
      transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__bottom-spase {
    width: 100%;
    height: 8px;

    // switching__bottom-spase_background-fff
    &_background-fff {
      background-color: #fff;
      transition: all 0.36s ease;
    }

    // switching__bottom-spase_background-d0f0f6d1
    &_background-d0f0f6d1 {
      background-color: #d0f0f6d1;
      transition: all 0.36s ease;
    }
  }

  &__hiding-block {
    width: calc(100% - 12px);
    background-color: #fff;
    max-height: 280px;
    height: auto;
    border: 1px solid #e4e4e4;
    border-radius: 6px;
    box-shadow: 1px 7px 8px 8px #afa9a9;
    position: absolute;
    top: 66px;
    left: 6px;
    z-index: 5;

    // switching__hiding-block_hide
    &_hide {
      transform: scale(0);
      //
      // transform: scale(1);
      // изменить transform: scale(0);
      transition: transform 0.28s;
      transition-property: transform;
      transition-duration: 0.28s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }

    // switching__hiding-block_show
    &_show {
      transform: scale(1);
      transition: transform 0.28s;
      transition-property: transform;
      transition-duration: 0.28s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
  }

  &__container {
    overflow: hidden;
  }

  &__scrollable-block {
    height: 224px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  &__duplicate-inner-elem {
    width: 100%;
    background-color: #c5c2c2;
  }

  &__duplicate-inner-text {
    display: block;
    padding: 18px 12px;
    font-size: 14px;
    line-height: 18px;
    color: #28323c;
    font-weight: 400;
  }

  &__duplicate-white-line {
    width: 100%;
    height: 2px;
    background-color: #c5c2c2;
    display: flex;
    justify-content: center;
  }

  &__duplicate-blue-line {
    height: 2px;

    //  switching__duplicate-blue-line_background-gray
    &_background-gray {
      width: 1%;
      background-color: #c5c2c2;
      transition: all 0.6s ease;
    }

    //  switching__duplicate-blue-line_background-blue
    &_background-blue {
      width: 100%;
      background-color: hsl(204, 100%, 50%);
      transition: all 0.3s ease 0.2s;
    }
  }

  &__top-button {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    padding: 19px 16px;
    font-size: 14px;
    line-height: 18px;
    color: #28323c;
    transition: color 0.3s, background 0.4s;
    font-weight: 400;
    cursor: pointer;

    //  switching__top-button_choosed
    &_choosed {
      padding: 18px 16px;
      font-size: 16px;
      color: white;
      background: #50287d;
      transition: color 0.3s, background 0.4s;
    }
  }

  &__top-input {
    display: none;
  }

  &__list-bottom-buttons {
    display: none;
    padding: 4px;
    min-height: 56px;
    background: #f3f5f7;
    border-radius: 28px;
    justify-content: space-between;

    @media screen and (min-width: 576px) {
      display: inline-flex;
      align-items: center;
    }
  }

  &__bottom-button {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    font-size: 13px;
    line-height: 24px;
    color: #b5bdc8;
    padding: 12px 16px;
    border-radius: 24px;
    transition: color 0.3s, background 0.4s;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #50287d;
    }

    // switching__bottom-button_choosed
    &_choosed {
      background: #50287d;
      color: #fff;

      &:hover {
        color: #fff;
      }
    }
  }

  &__bottom-input {
    display: none;
  }
}
// switching

// link-to-archive
.link-to-archive {
  outline: none;
  text-decoration: none;
  cursor: pointer;
  padding: 24px 0;
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  color: #5a646e;
  transition: color 0.3s;
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;

  &:first-of-type {
    border-top: 1px solid #e4e4e4;
  }

  &:hover .link-to-archive__icon-colored {
    display: block;
  }

  &:hover .link-to-archive__icon-dark {
    display: none;
  }

  &:hover .link-to-archive__title {
    color: #50287d;
  }
  &:hover .link-to-archive__date {
    color: #50287d;
  }

  &__wrapper {
    width: 100%;
    display: flex;
  }

  &__images {
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: 24px;
  }

  &__icon-colored {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  &__icon-dark {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__row {
    width: 100%;
    display: block;
    justify-content: space-between;

    @media screen and (min-width: 576px) {
      display: flex;
    }
  }

  &__title {
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #5a646e;
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      max-width: 560px;
      width: 100%;
      margin-bottom: 0;
    }
  }

  &__date {
    width: 125px;
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #5a646e;
    margin-left: 0px;
    // text-align: right;

    @media screen and (min-width: 576px) {
      margin-bottom: 0;
      margin-left: 48px;
      text-align: right;
    }
  }
}
// link-to-archive

// block-header
.block-header {
  width: 100%;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e4e4e4;

  &:first-of-type {
    padding-top: 0;
  }

  &__heading-13 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
  }

  &__heading-16 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #000;
  }

  &__heading-18 {
    display: block;
    width: 100%;
    max-width: 560px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #5a646e;
  }

  &__date {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    flex: none;
    margin-left: 12px;

    @media screen and (min-width: 576px) {
      margin-left: 40px;
    }
  }
}
// block-header

// paragraph
.paragraph {
  width: 100%;

  // paragraph__table-row
  &__table-row {
    width: 100%;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;

    &:first-of-type {
      padding-top: 0;
    }

    &_title {
      width: 100%;
      max-width: 560px;
      font-size: 13px;
      line-height: 24px;
      color: #5a646e;

      @media screen and (min-width: 576px) {
        font-size: 16px;
      }
    }

    &_value {
      font-size: 13px;
      line-height: 24px;
      color: #5a646e;
      margin-left: 12px;

      @media screen and (min-width: 576px) {
        font-size: 16px;
        margin-left: 40px;
      }
    }
  }
}
// paragraph
</style>
