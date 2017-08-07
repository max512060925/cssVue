import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '@/components/login_page/login_page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login_page',
      component: loginPage
    }
  ]
})
