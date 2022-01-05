<template>
  <label
    class="news-link"
    v-if="
      isNewsLinkVisible ||
        isBlock2014Visible ||
        isBlock2015Visible ||
        isBlock2016Visible ||
        isBlock2017Visible ||
        isBlock2018Visible ||
        isBlock2019Visible ||
        isBlock2020Visible ||
        isBlock2021Visible
    "
    @click="emitValue"
  >
    <input class="news-link__input" type="radio" value="value" />

    <router-link class="news-link__link" :to="{ path: '/new#20' }">{{ title }} </router-link>
    <!-- :to="{ path: `${pathUrl}` }" -->

    <p class="news-link__date">{{ date }}</p>
  </label>
</template>

<script>
export default {
  name: 'NewsLink',
  data() {
    return {
      valueRadio: 0,
      pathUrl: { path: '/new#id' },
    };
  },

  props: {
    isNewsLinkVisible: { type: Boolean, default: false },
    isBlock2014Visible: { type: Boolean, default: false },
    isBlock2015Visible: { type: Boolean, default: false },
    isBlock2016Visible: { type: Boolean, default: false },
    isBlock2017Visible: { type: Boolean, default: false },
    isBlock2018Visible: { type: Boolean, default: false },
    isBlock2019Visible: { type: Boolean, default: false },
    isBlock2020Visible: { type: Boolean, default: false },
    isBlock2021Visible: { type: Boolean, default: false },
    value: { type: Number, required: true },
    href: { type: String },
    title: { type: String },
    date: { type: String },
  },
  computed: {
    id() {
      return String(this.value);
    },
    // pathUrl() {
    //   // return `{ path: ' /new/:${this.id}' }`;
    // },
  },

  methods: {
    emitValue() {
      this.valueRadio = this.value;
      // console.log(this.valueRadio);
      this.$emit('emitValue', this.valueRadio);
    },
  },
};
</script>

<style lang="scss" scoped>
.news-link {
  padding: 24px 0 48px;
  border-top: 1px solid #e4e4e4;
  width: 100%;

  &__input {
    display: none;
  }

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
