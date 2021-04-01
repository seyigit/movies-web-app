<script>
import Poster from "@/components/Poster";
export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  components: {
    Poster,
  },
};
</script>
<template>
  <div class="col-md-3 col-6 pb-4">
    <router-link :to="/movie/ + this.movie.id">
      <div class="card">
        <Poster
          class="card-image-top"
          :posterName="movie.poster_path"
          :alt="movie.original_title"
        />
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">
            {{ movie.overview }}
          </p>
          <p class="card-text">
            <small class="text-muted"
              ><b>Puanlama :</b> {{ movie.vote_average }}</small
            >
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<!-- <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt=""> -->
<style scoped>

</style>
