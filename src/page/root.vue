<template lang="jade">
#app
  select.clear-projects(v-model='currProjectId')
    option(v-for='v in projectsData', :value='v.id') {{v.name_with_namespace}}
  hr
  router-view
</template>
<script>
const projectsData = require('./dev-data/projects');
// if(!localStorage.clearUserConfg){
//   localStorage.clearUserConfg = {}
// }
// let confg = JSON.stringify();

function getIndexById(arr, id){
  var  i = 0, len = arr.length;
  for(; i < len; i++){
    let v = arr[i];
    if(v.id === id){
      return i;
    }
  }
  return 0;
}
export default {
  data(){
    return {
      isRequest: false,
      projectsData: [],
      currProjectId: localStorage.currProjectId,
      currProjectIndex: 0
    }
  },
  methods: {

    getProjects(){
      setTimeout(() => {
        this.projectsData = projectsData;
      }, 200);
      // this.request({
      //   url: '/api/v3/projects?search=clear-docs&?simple=true',
      //   success(data){
      //     this.projectsData = data
      //   }
      // })
    }
  },
  watch: {
    currProjectId(v){
      localStorage.currProjectId = v;
    }
  },
  created(){

    const userConfig = localStorage.clearUserConfg
    this.getProjects();
  }
}
</script>
