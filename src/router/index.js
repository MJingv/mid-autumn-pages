import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import undergraduate from '@/components/undergraduate'
import graduate from '@/components/graduate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      beforeEnter: (to, from, next) => {
        document.title = '瑞华';
        next();
      },
      children: [
        {
          path: '/undergraduate',
          name: 'undergraduate',
          component: undergraduate,
          beforeEnter: (to, from, next) => {
            document.title = '瑞华-本科组';
            next();
          }
        }, {
          path: '/graduate',
          name: 'graduate',
          component: graduate,
          beforeEnter: (to, from, next) => {
            document.title = '瑞华-研究生组';
            next();
          }
        }
      ]
    }
  ]
})
