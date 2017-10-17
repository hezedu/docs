var express = require('express');
var app = express();
var exec = require('child_process').exec;
var path = require('path');
var routerInit = require('./lib/router-init');

var routerJSONCache = null;
var gitLocalPath;
function server(config){
  config = config || {};
  const port = config.port || 3000;
  //const gitUrl = config.gitUrl;
  gitLocalPath = config.gitLocalPath;
  app.get('/router.json', getRoutes);
  app.post('/webhookReceive', reloadRoutes);

  console.log('初始化路由...');
  generateRoutes(gitLocalPath, function(err){
    if(err){
      console.error('初始化路由失败.');
    }else{
      console.log('初始化路由成功.');
      app.listen(port);
      console.log('server listen', port);
    }
  });

}

function generateRoutes(projectsDir, callback){
  exec('cd ' + projectsDir + ' && git pull', function(err){
    if(err){
      return callback(err);
    }
    routerInit(projectsDir, function(err, result){
      if(err){
        return callback(err);
      }
      routerJSONCache = JSON.stringify(result)
      callback(null, routerJSONCache);
      // res.send(routerJSONCache);
    })
  })
}

function reloadRoutes(req, res, next){
  generateRoutes(gitLocalPath, function(err){
    if(err){
      return next(err);
    }else{
      res.send('ok');
    }
  });
}

function getRoutes(req, res){
  res.send(routerJSONCache);
}

server({
  gitLocalPath: 'C:/Users/hello/work/Even_Bond.wiki'
});
