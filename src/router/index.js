import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Destinos from '@/components/Destinos'
import Tiquetes from '@/components/Tiquetes'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/destinos',
      name: 'Destinos',
      component: Destinos
    },
    {
      path: '/tiquetes',
      name: 'Tiquetes',
      component: Tiquetes
    }
  ]
})

export default router
