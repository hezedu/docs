import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import NotFound from './page/not-found.vue';
import {initVueRouter} from './lib/route-init.js';
var rawData = window.MD_FILE_TREE_DATA;
import Pass from './cmpt/pass';
const routes = initVueRouter(rawData);
console.log(routes[0]);
const router = new Router({
  routes: [
    {path: '/projects', component: Pass, children: routes},
    { path: '*', component: NotFound}
  ]
})

export default router;
