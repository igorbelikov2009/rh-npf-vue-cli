import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/components/views/MainPage.vue';
import BusinessPage from '@/components/views/BusinessPage.vue';
import SupportServiсePage from '@/components/views/SupportServiсePage.vue';
import InvestPage from '@/components/views/InvestPage.vue';
import AboutFundPage from '@/components/views/AboutFundPage.vue';
import ContactsPage from '@/components/views/ContactsPage.vue';
import ManagementPage from '@/components/views/ManagementPage.vue';
import InfoOpeningPage from '@/components/views/InfoOpeningPage.vue';
import NewsPage from '@/components/views/NewsPage.vue';
import NewPage from '@/components/views/NewPage.vue';

import NotFoundPage from '@/components/views/NotFoundPage.vue';

/**
 * Добавлено для обработки ошибки "navigation duplicated"
 * Возможно стоит обрабатывать ТОЛЬКО "navigation duplicated", а не все ошибки
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/business',
    name: 'business',
    component: BusinessPage,
  },
  {
    path: '/support',
    name: 'supportServiсe',
    component: SupportServiсePage,
  },

  {
    path: '/invest',
    name: 'invest',
    component: InvestPage,
  },
  {
    path: '/about',
    name: 'aboutFund',
    component: AboutFundPage,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage,
  },
  {
    path: '/management',
    name: 'management',
    component: ManagementPage,
  },
  {
    path: '/infoopening',
    name: 'infoOpening',
    component: InfoOpeningPage,
  },
  {
    path: '/newspages',
    name: 'newsPages',
    component: NewsPage,
  },
  {
    // path: '/new/:id',
    path: '/newspage',
    name: 'newsPage',
    component: NewPage,
  },

  //Все остальные роуты нужно ставить выше NotFound
  {
    path: '*',
    name: 'not-found',
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(to);
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
