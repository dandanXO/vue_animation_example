import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import anmationTest from '@/components/anmationTest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/anmationTest',
      name: 'anmationTest',
      component: anmationTest
    }
  ],
  mode: 'history'
})
