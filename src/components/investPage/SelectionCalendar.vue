<template>
  <div class="select">
    <label class="select__heading">
      месяц
      <select class="select__list" name="">
        <option class="select__option" value="24">
          <p class="select__title"></p>
          30 ноября 2021 г.
        </option>
        <option class="select__option" value="23">30 ноября 2021 г.</option>
        <!--   <option class="select__option" value="23">31 октября 2021 г.</option>
         <option class="select__option" value="22">30 сентября 2021 г.</option>
        <option class="select__option" value="21">31 августа 2021 г.</option>
        <option class="select__option" value="20">31 июля 2021 г.</option>
        <option class="select__option" value="19">30 июня 2021 г.</option>
        <option class="select__option" value="18">31 мая 2021 г.</option>
        <option class="select__option" value="17">30 апреля 2021 г.</option>
        <option class="select__option" value="16">31 марта 2021 г. </option>
        <option class="select__option" value="15">28 февраля 2021 г. </option>
        <option class="select__option" value="14">31 января 2021 г. </option>
        <option class="select__option" value="13">31 декабря 2020 г. </option>
        <option class="select__option" value="12">30 ноября 2020 г. </option>
        <option class="select__option" value="11">31 октября 2020 г. </option>
        <option class="select__option" value="10">30 сентября 2020 г. </option>
        <option class="select__option" value="9">31 августа 2020 г. </option>
        <option class="select__option" value="8">31 июля 2020 г.</option>
        <option class="select__option" value="7">30 июня 2020 г.</option>
        <option class="select__option" value="6">31 мая 2020 г.</option>
        <option class="select__option" value="5">30 апреля 2020 г. </option>
        <option class="select__option" value="4">31 марта 2020 г. </option>
        <option class="select__option" value="3">29 февраля 2020 г. </option>
        <option class="select__option" value="2">31 января 2020 г. </option>
        <option class="select__option" value="1">31 декабря 2019 г. </option>
        <option class="select__option" value="0">30 ноября 2019 г. </option> -->
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SelectionCalendar',
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  border-bottom: 1px solid #b5bdc8;

  &__heading {
    font-size: 11px;
    color: #b5bdc8;
  }

  &__list {
    // font-size: 16px;
    // color: #28323c;
    width: 100%;
  }

  &__option {
    width: 100%;
  }

  &__title {
    padding: 6px 0;
    font-size: 16px;
    line-height: 24px;
    color: #28323c;
    width: 100%;
  }
}
</style>
