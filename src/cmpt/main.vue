<template lang="jade">
h1 Main
// .markdown-body(v-html='html')
</template>
<script>
//var md = window.markdownit();
export default {
  data(){
    return {
      isRequest: false,
      html: 'MAIN'
    }
  },
  methods: {
    highlight(){
      const hljs = window.hljs;
      hljs.initHighlighting.called = false;
      hljs.initHighlighting();
    },
    loadHtml(){
      return console.log('this.props', this.props);
      // props = props || this.props;
      // const self = this;
      // const {$} = window;
      // // const path = props.filePath || props.route.link || props.route.path;
      // $.ajax({
      //   url: `/md${path}.md`,
      //   dataType: 'text',
      //   success(data){
      //     self.setState({
      //       html: md.render(data)
      //     })
      //   }
      // })

    }

  },
  created(){
    console.log('main created')
    this.loadHtml();
  }
}
</script>
