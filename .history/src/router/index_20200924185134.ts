import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import layout from '../views/layout/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'',
    name:'layout',
    component: layout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home,
        meta:{
          title:"首页"
        }
      },
      {
        path: '/hookart',
        name: 'hookart',
        component: () => import("../views/hooksart/hookart.vue"),
        meta:{
          title:"说明页",
          path:"hookart"
        }
      },
      {
        path: '/picturePreview',
        name: 'picturePreview',
        component: () => import("../views/picturePreview/picturePreview.vue"),
        meta:{
          title:"图片预览",
          path:"picturePreview"
        }
      },
      {
        path: '/trend',
        name: 'trend',
        component: () => import("../views/trend/trend.vue"),
        meta:{
          title:"趋势",
          path:"trend"
        }
      },
      {
        path: '/bottomToolbars',
        name: 'bottomToolbars',
        component: () => import("../views/bottomToolbars/bottomToolbars.vue"),
        meta:{
          title:"底部工具栏",
          path:"bottomToolbars"
        }
      },
      {
        path: '/notificationIcon',
        name: 'notificationIcon',
        component: () => import("../views/notificationIcon/notificationIcon.vue"),
        meta:{
          title:"通知图标",
          path:"notificationIcon"
        }
      },
      {
        path: '/Embedded',
        name: 'Embedded',
        component: () => import("../views/Embedded/Embedded.vue"),
        meta:{
          title:"内嵌网页",
          path:"Embedded"
        }
      },
      
      
    ]
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
