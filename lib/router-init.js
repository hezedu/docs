const fs = require('fs');
const path = require('path');
const sas = require('sas');


function _readdir(dir, th){
  return function (cb){
    fs.readdir(dir, function(err, files){
      if(err){
        return cb(err);
      }
      const tasks = {};
      files.forEach(fileName => {
        if(fileName[0] !== '.'){
          tasks[fileName] = _stat(dir, fileName,  th)
        }
      });
      cb('$reload', tasks);
    });
  }

}
function _stat(rpath, name,  th) { //iterator
  return function(cb) {
    const _path = path.join(rpath, name);
    fs.stat(_path, function(err, stat) {
      if(err){
        return cb(err);
      }
      if (stat.isDirectory()) {
        th[name] = {};
        return cb('$reload', _readdir(_path, th[name]));
      }
      th[name] = null;
      cb();
    });
  }
}

function getRoutes(dir, callback){
  var router = {};
  sas(_readdir(dir, router), function(err){
    callback(err, router)
  })
}

module.exports = getRoutes;
