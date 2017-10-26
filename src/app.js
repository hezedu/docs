import Vue from 'vue';
import 'vue-use-vuex';
Vue.prototype.noopStop = function(e){
  e.stopPropagation();
}

require('./css/style.scss');
require('./lib/request');
import appInit from './app0';

appInit();
