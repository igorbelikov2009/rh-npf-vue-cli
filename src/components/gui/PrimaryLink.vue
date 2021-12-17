<template>
  <div>
    <a class="primary-link" :href="linkHref"> {{ linkText }} </a>
  </div>
</template>

<script>
export default {
  name: 'PrimaryLink',
  data() {
    return {
      linkHref: '#',
      linkText: 'Я ссылка',
    };
  },
};
</script>

<style lang="scss" scoped>
.primary-link {
  cursor: pointer;
  color: #50287d;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  text-decoration: none;
}
</style>
