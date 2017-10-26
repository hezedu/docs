<template lang="jade">
div
  h1 projects Route Init
  pre
   {{JSON.stringify(data, null, '\t')}}
</template>
<script>
import {initVueRouter} from '../lib/route-init.js';
import {resetProjectsRoute} from '../router.js';
import appInit from '../app0.js';
const data = require('./dev-data/project_14_tree');
var isInitRoute = false;
function _todeep(obj, k){
  if(!obj[k]){
    obj[k] = {}
  }
  return
}
export default {
  data(){
    return {
      data: []
    }
  },
  methods: {
    forMatData(data){
      const obj = {};
      data.forEach(v => {
        if(v.name[0] === '.'){
            return;
        }
        let path = v.path;
        let pathArr = path.split('/');
        let lastIndex = pathArr.length - 1;
        let lastKey;
        let _obj = obj;

        pathArr.forEach((k, i) => {
          if(i === lastIndex && v.type !== 'tree'){
            _obj[k] = null;
          }else{
            if(!_obj[k]){
               _obj[k] = {};
             }
             _obj = _obj[k]
          }
        });
      });
      return obj;
    },
    getData(){
      //const id = this.$route.params.id;
      //console.log(id)
      // this.request({
      //   url: '/api/v3/projects/' + id + '/repository/tree?recursive=true',
      //   success(){
      //     this.data = data;
      //   }
      // })
      setTimeout(()=> {
        const _data = [].concat(data);
        this.data = this.forMatData(_data);
        const routes = initVueRouter(this.data, this.$route.path);
        resetProjectsRoute(routes);
        appInit();


      }, 200)
    }
  },
  created(){
    this.getData();
  }
}
</script>
