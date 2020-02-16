import Vue from 'vue'

import Router from 'vue-router'
import HomePage from './../views/HomePage.vue'
import Favoris from './../views/Favoris.vue'
import Detail from './../components/Detail.vue'


Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage },
      { path: '/favoris', component: Favoris },
      { path: '/detail/:id', component: Detail },
      
    ]
})