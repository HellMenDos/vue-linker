import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router';
import LoginView from '@/views/LoginView.vue'
import RegView from '@/views/RegView.vue'
import MainView from '@/views/MainView.vue'
import UsersView from '@/views/UsersView.vue'
import ChartView from '@/views/ChartView.vue'

import useAuth from '@/hooks/useAuth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {
      auth: false
    }
  },
  {
    path: '/reg',
    name: 'reg',
    component: RegView,
    meta: {
      auth: false
    }
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
    meta: {
      auth: true
    },
    children: [
      {path: ':id', name: 'users', component: UsersView },
      {path: '/charts', name: 'charts', component: ChartView }

    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// eslint-disable-next-line
router.beforeResolve((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const auth = useAuth()
  // eslint-disable-next-line
  if(to.meta.auth) {
    // eslint-disable-next-line
    if(!auth.isAuth()) {
      // eslint-disable-next-line
      next({
        path: '/'
      })
    }else{
      next()
    }
  // eslint-disable-next-line
  }else {
    // eslint-disable-next-line
    next()
  }
})

export default router;
