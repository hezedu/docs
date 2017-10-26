import Vue from 'vue';

import router from './router';
import Root from './page/root.vue';

export default function(){
  const newRouter = router()
  var app = new Vue({
    router: newRouter,
    render: h => h(Root)
  });
  newRouter.onReady(() => {
    app.$mount('#app')
  })
}
