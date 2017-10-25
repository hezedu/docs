var express = require('express');
var app = express();
var exec = require('child_process').exec;
var path = require('path');
var routerInit = require('./lib/router-init');
var isPro = app.get('env') === 'production';

var routerDataCache = null;
var gitLocalPath;
function server(config){
  config = config || {};
  const port = config.port || 3000;
  gitLocalPath = config.gitLocalPath;

  console.log('初始化路由...');
  generateRoutes(gitLocalPath, function(err){
    if(err){
      console.error('初始化路由失败.');
    }else{
      console.log('初始化路由成功.');
      if(isPro){
        app.use(express.static(path.join(__dirname, 'public')));
      }else{
        app.use(CORS);
      }
      app.get('/router.js', getRoutes);
      app.post('/webhookReceive', reloadRoutes);
      app.use('/projects', express.static(gitLocalPath));
      app.listen(port);
      console.log('server listen', port);
    }
  });
}

function CORS(req, res, next){
  res.set('Access-Control-Allow-Origin', '*');
  next();
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
      routerDataCache = JSON.stringify(result);
      routerDataCache = 'var MD_FILE_TREE_DATA = ' + routerDataCache;
      callback(null, routerDataCache);
      // res.send(routerDataCache);
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
  res.send(routerDataCache);
}

const config = require('./config');
server(config);
