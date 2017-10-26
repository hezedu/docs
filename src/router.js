import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import NotFound from './page/not-found.vue';
import Index from './page/index.vue';
import ProjectRouteInit from './page/project_route_init.vue'
import Projects from './page/projects.vue';
const projectsRoute = {
  path: '/projects/:id+',
  component: ProjectRouteInit
};

const router = function (){
  return new Router({
    routes: [
      { path: '/', component: Index},
      projectsRoute,
      { path: '*', component: NotFound}
    ]
  })
}
export function resetProjectsRoute(children){
  console.log('children', children);
  projectsRoute.path = '/projects/:id';
  projectsRoute.component = Projects;
  projectsRoute.children = children;
  return;
  // if(!projectsRoute.children){
  //   projectsRoute.path = '/projects/:id+';
  //   projectsRoute.component = ProjectRouteInit;
  // }else{
  //   projectsRoute.path = '/projects/:id';
  //   projectsRoute.component = Projects;
  //   projectsRoute.children = children;
  // }
}
export default router;
