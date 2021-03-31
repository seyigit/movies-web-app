import Vue from 'vue'
import Vuex from 'vuex'
// import service from '../services/service'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies : {},
    movieDetails : {},
    moviesTopRated :{},
    moviesUpComing:{}

  },
  mutations: {
    setMovies (state,movies){
      state.movies = movies;
    },
    setMoviesTop (state,moviesTopRated){
      state.moviesTopRated = moviesTopRated;
    },
    setMoviesUpComing (state,moviesUpComing){
      state.moviesUpComing = moviesUpComing;
    },
  },
  actions: {
    getMoviesTop(context){
      return axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0ade8bd31670b7c7b7c14c034661b692&language=en-US&page=1')
       .then(res => {
          let data = res.data.results
          context.commit('setMoviesTop',data)
       })
      },
    getMovies(context){
     return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0ade8bd31670b7c7b7c14c034661b692&language=en-US&page=1')
      .then(res => {
         let data = res.data.results
         console.log(data)
         context.commit('setMovies',data)
      })
    },
    getMoviesUpComing(context){
      return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0ade8bd31670b7c7b7c14c034661b692&language=en-US&page=1')
       .then(res => {
          let data = res.data.results
          console.log(data)
          context.commit('setMoviesUpComing',data)
       })
     },

    
  },
  getters : {
    movies(state){
      return state.movies;
    },
    moviesTopRated(state){
      return state.moviesTopRated;
    },
    moviesUpComing(state){
      return state.moviesUpComing;
    },

  },
  modules: {
  }
})
