<template>
  <section class="renaissance-interactions">
    <div class="renaissance-interactions__container">
      <p class="renaissance-interactions__description">
        Для информационного взаимодействия АО НПФ «Ренессанс пенсии», являясь участником системы
        электронного документооборота, использует обмен электронными документами в системе
        электронного документооборота
        <a class="renaissance-interactions__link" href="">
          АО ВТБ Специализированный депозитарий.
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Interactions',
};
</script>

<style lang="scss" scoped>
.renaissance-interactions {
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

  &__description {
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    color: #5a646e;
  }

  &__link {
    text-decoration: none;
    font-size: inherit;
    line-height: inherit;
    color: #50287d;
    cursor: pointer;
  }
}
</style>
