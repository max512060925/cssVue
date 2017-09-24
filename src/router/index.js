import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/views/goods/goods'
import ratings from '@/views/ratings/ratings'
import seller from '@/views/seller/seller'

Vue.use(Router)
export default new Router({
	mode:'history',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'
})
