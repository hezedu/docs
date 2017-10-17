import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import NotFound from './page/not-found.vue';
const router = new Router({
  routes: [
    { path: '*', component: NotFound}
  ]
})

export default router;
