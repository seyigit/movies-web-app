<script>
import Loader from "@/components/loader";
import Movie from "@/components/Movie";
import { mapGetters } from "vuex";
import AppHeader from "@/components/AppHeader";
import MovieTopRated from "@/components/MovieTopRated";
import MovieUpComing from "@/components/MovieUpComing";

export default {
  name: "Home",
  components: {
    Loader,
    Movie,
    AppHeader,
    MovieTopRated,
    MovieUpComing
  },
  data() {
    return {
      isloading: true,
    };
  },
  computed: {
    ...mapGetters(["movies","moviesTopRated","moviesUpComing"]),
  },
  created() {
    this.$store.dispatch("getMovies").then(() => {
      this.isloading = false;
    });
    this.$store.dispatch("getMoviesTop").then(() => {
      this.isloading = false;
    });
    this.$store.dispatch("getMoviesUpComing").then(() => {
      this.isloading = false;
    });
  },
};
</script>
<template>
  <section class="container alig-items-center" style="padding-top: 125px; padding-bottom: 85px">
    <AppHeader />
    <Loader v-if="isloading" />
    <div class="head-title row align-items-center mb-4 pt-2">
            <div class="col-md-5" >
        <h2 class="header-text pb-2">YAYINDA OLAN FİLMLER</h2>
      </div>
      <div class="col-md-7 text-right ">
        <router-link to="/yayinda-olanlar" class="all-movies"><h5>Tümünü Gör</h5></router-link>
        </div>
    </div>
    <div class="row pb-5 d-flex">
      <Movie v-for="movie in movies.slice(0,8)" :key="movie.id" :movie="movie">
         </Movie>
    </div>
        <div class="head-title row align-items-center mb-4 pt-2">
            <div class="col-md-5" >
        <h2 class="header-text pb-2">EN ÇOK PUAN ALANLAR</h2>
      </div>
      <div class="col-md-7 text-right ">
        <router-link to="/en-iyiler" class="all-movies"><h5>Tümünü Gör</h5></router-link>
        </div>
    </div>
        <div class="row pb-5">
      <MovieTopRated v-for="movieTopRated in moviesTopRated.slice(0,8)" :key="movieTopRated.id" :movieTopRated="movieTopRated">
      </MovieTopRated>
    </div>
            <div class="head-title row align-items-center mb-4 pt-2">
            <div class="col-md-5" >
        <h2 class="header-text pb-2">YAKINDA ÇIKACAK FİLMLER</h2>
      </div>
      <div class="col-md-7 text-right ">
        <router-link to="/en-iyiler" class="all-movies"><h5>Tümünü Gör</h5></router-link>
        </div>
    </div>
            <div class="row">
      <MovieUpComing v-for="movieUpComing in moviesUpComing.slice(0,8)" :key="movieUpComing.id" :movieUpComing="movieUpComing">
      </MovieUpComing>
    </div>
  </section>
</template>
<style scoped>
.all-movies::after{
content: '>';
color: #aaaaaa;
margin-left: 8px;
font-size: 18px;
font-weight: bold;
}
.all-movies{
color: #AAAAAA;
display: flex;
justify-content: flex-end;
}
.header-text{
  border-bottom: 3px solid aqua;
  color:#AAAAAA;
}
</style>


