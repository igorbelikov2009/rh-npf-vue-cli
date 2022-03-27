import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import newsModule from './news';
import usersModule from './users';

const store = new Vuex.Store({
  modules: {
    news: newsModule,
    users: usersModule,
  },
});

export default store;
