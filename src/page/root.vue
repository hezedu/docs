<template lang="jade">
#app
  h1 Root
  hr
  router-view
</template>
<script>

export default {
  data(){
    return {
      isRequest: false,
      data: null
    }
  },
  methods: {
  },
  created(){
    //this.getData();
  }
}
</script>
