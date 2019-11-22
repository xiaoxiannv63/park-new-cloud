import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let kejianrouter = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/isv',
      name: 'isv',
      component: () => import('./views/Isv.vue'),
    },
    {
      path: '/host',
      name: 'host',
      component: () => import('./views/Host.vue'),
    },
    {
      path: '/us',
      name: 'us',
      component: () => import('./views/Us.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/isvAdmin',
      name: 'isvAdmin',
      meta: {
        requireAuth: true
      },
      component: () => import('./views/IsvAdmin.vue'),
      children: [{
          path: '/isvAdmin/user',
          name: 'isvUser',
          component: () => import('./views/IsvAdmin/User.vue')
        },
        {
          path: '/isvAdmin/parking',
          name: 'isvParking',
          component: () => import('./views/IsvAdmin/Parking.vue')
        }
      ]
    },
    {
      path: '/hostAdmin',
      name: 'hostAdmin',
      meta: {
        requireAuth: true
      },
      component: () => import('./views/HostAdmin.vue'),
      children: [{
          path: '/hostAdmin/user',
          name: 'hostUser',
          component: () => import('./views/HostAdmin/User.vue')
        },
        {
          path: '/hostAdmin/parking',
          name: 'hostParking',
          component: () => import('./views/HostAdmin/Parking.vue')
        },
        {
          path: '/hostAdmin/isv',
          name: 'hostIsv',
          component: () => import('./views/HostAdmin/Isv.vue')
        }
      ]
    }
  ]
})

// // 判断是否需要登录权限 以及是否登录
// kejianrouter.beforeEach((to, from, next) => {
//   // 判断是否需要登录权限
//   if (to.matched.some(res => res.meta.requireAuth)) {
//     // 判断是否登录
//     if (sessionStorage.getItem('token')) {
//       next()
//     } else {
//       // 没登录则跳转到登录界面
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next()
//   }
// })

export default kejianrouter