<template lang="jade">
div
 h1 Projects
 router-view
</template>
<script>

export default {
  created(){

    console.log('project created');
    console.log('this.$route', this)
  }
}
</script>
