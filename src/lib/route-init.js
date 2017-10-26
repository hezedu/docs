import TopLeftNav from '../cmpt/top_left_nav';
import TopNav from '../cmpt/top_nav';
import LeftNav from '../cmpt/left_nav';
import Main from '../cmpt/main';
const components = [TopNav, LeftNav];
// front-end
function ite(result, rpath, depth){
  const arr = [];
  for(let i in result){
    const v = result[i];
    const link = rpath + '/' + i;
    const obj = {
      path : i,
      link
    };
    if(v){
      obj.component = components[depth];
      obj.children = ite(v, link, depth + 1);
      if(obj.children.length){
        obj.link = obj.children[0].link;
      }
    }else{
      obj.component = Main;
    }
    arr.push(obj);
  }
  return arr;
}

export function initVueRouter(result, rPath){
  rPath = rPath || '';
  return ite(result, rPath, 0);
}
