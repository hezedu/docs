<template lang="jade">
#app
  h1 hello world!
  hr
  div {{data}}
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

    getData(){
      this.request({
        url: '/router.json',
        dataType: 'json',
        success(data){
          this.data = data;
          console.log('data', data, typeof data)
        }
      })
    }
  },
  created(){
    this.getData();
  }
}
</script>
