<template>
  <section class="call-back">
    <div class="my-input">
      <div class="my-input__label-container">
        <label class="my-input__label">
          <p class="my-input__title">Как вас зовут?</p>

          <input class="my-input__field" type="text" name="name" />

          <p class="my-input__error"></p>
        </label>
      </div>

      <div class="my-input__label-container">
        <label class="my-input__label">
          <p class="my-input__title">Телефон</p>

          <input class="my-input__field tel-number" type="number" name="phone" autocomplete="on" />

          <p class="my-input__error"></p>
        </label>
      </div>

      <div class="call-back__button-container">
        <button class="my-button__button primary-button" disabled>
          Отправить
        </button>
      </div>
    </div>

    <button class="call-back__cross-switch" @click="closeCallBack">
      <img class="call-back__cross-image" src="@/assets/icons/triple/Cross/Dark.svg" alt="cross" />
    </button>
  </section>
</template>

<script>
export default {
  methods: {
    closeCallBack() {
      this.$emit('closeCallBack')
    },
  },
}
</script>

<style lang="scss" scoped>
// call-back
.call-back {
  width: 100%;
  max-width: 320px;
  padding: 24px;
  padding-top: 48px;
  background: #f3f5f7;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 576px) {
    top: 18%;
  }

  &__button-container {
    margin-top: 24px;
    margin-bottom: 36px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  &__cross-switch {
    line-height: 12px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 6px;

    &:hover {
      border: 1px solid #50287d;
    }
  }

  &__cross-image {
    width: 24px;
    height: 24px;
  }
}

// transition name="call-back"
.call-back-enter-active,
.call-back-leave-active {
  transition: all 0.5s;
}

.call-back-enter,
.call-back-leave-to {
  opacity: 0;
  left: 0%;
  top: 0%;
}
// call-back
</style>
