var  conf = {
  bundleName: '[name]_bundle.js',   //打包文件的名字
  chunkName: '[name]_chunk.js',     //由code-spliting生成的文件名字
  indexDir: './',    //生成index.html的目录。
  baseUrl: '',    //网站基本url. 比如：https://hezedu.github.io/clear 的 /clear
  indexData: { //这里数据将会传给index.ejs。

    API_ROOT: '//127.0.0.1:3000'
  }
};

module.exports = conf;
