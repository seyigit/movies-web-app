import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetails from '../components/MovieDetails'
import NowPlaying from '../views/yayinda-olanlar/index.vue'
import TopRated from '../views/en-iyiler/index.vue'
import UpComing from '../views/beklenen-filmler/index.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/yayinda-olanlar',
    name: 'Yayinda-olanlar',
    component: NowPlaying,

  },
  {
    path: '/en-iyiler',
    name: 'En-İyiler',
    component: TopRated,

  },
  {
    path: '/beklenen-filmler',
    name: 'Beklenen-Filmler',
    component: UpComing,

  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MovieDetails,
  }
]


const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router
