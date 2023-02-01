<template>
  <div class="news-link">
    <!-- Возможно стоило бы это сделать обычной кнопкой и генерировать (эметить)
    событие click наружу, и уже в родителе определять, что делать на этот клик -->
    <router-link class="news-link__link" :to="{ path: `/new?id=${id}` }"> {{ title }} </router-link>

    <p class="news-link__date">{{ formattedDate }}</p>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'NewsLink',

  props: {
    title: { type: String, required: true },
    date: { type: String, required: true },
    id: { type: Number, required: true },
  },
  computed: {
    formattedDate() {
      return format(new Date(this.date), 'd MMMM Y г.');
    },
  },
};
</script>

<style lang="scss" scoped>
.news-link {
  padding: 24px 0 48px;
  border-top: 1px solid #e4e4e4;
  width: 100%;

  &__link {
    display: block;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 24px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    color: #8967b1;

    &:hover {
      color: #50287d;
    }
  }

  &__date {
    display: block;
    font-size: 13px;
    line-height: 24px;
    color: #5a646e;
    margin-top: 24px;
  }
}
</style>
