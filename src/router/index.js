import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import CataLog from '@/components/CataLog'
import Matching from '@/components/Matching'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path:'/Catalog',
      name:'CataLog',
      component:CataLog
    },
    {
      path:'/Matching',
      name:'Matching',
      component:Matching
    }
  ]
})
