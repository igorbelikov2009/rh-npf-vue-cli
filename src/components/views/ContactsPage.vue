<template>
  <div class="contacts">
    <TopMenu :ifBackgroundWhite="topMenu.isBackgroundWhite" />
    <Contacts />
    <ContactsMap />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/topMenu/TopMenu.vue';
import Contacts from '@/components/contactsPage/Contacts.vue';
import ContactsMap from '@/components/contactsPage/ContactsMap.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'ContactsPage',

  data() {
    return {
      topMenu: { isBackgroundWhite: true },
    };
  },

  components: {
    TopMenu,
    Contacts,
    ContactsMap,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;
}
</style>
