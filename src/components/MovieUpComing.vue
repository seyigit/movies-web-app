<script>
import Poster from "@/components/Poster";
export default {
  name: "MovieTopRated",
  props: {
    movieUpComing: {
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
    <router-link :to="/movie/ + this.movieUpComing.id">
      <div class="card">
        <Poster
          class="card-image-top"
          :posterName="movieUpComing.poster_path"
          :alt="movieUpComing.original_title"
        />
        <div class="card-body">
          <h5 class="card-title">{{ movieUpComing.title }}</h5>
          <p class="card-text">
            {{ movieUpComing.overview }}
          </p>
          <p class="card-text">
            <small class="text-muted"
              ><b>Puanlama :</b> {{ movieUpComing.vote_average }}</small
            >
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<!-- <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt=""> -->
<style scoped>
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: gainsboro;
  font-size: 15px;
}
.card {
  background: #191919;
  box-shadow: 12px 12px 16px 0 rgb(0 0 0 / 25%),
    -8px -8px 12px 0 rgb(27 27 27 / 42%);
  border-bottom: 2px solid transparent;
}
.card:hover {
  border-bottom: 2px solid gainsboro;
  box-sizing: inherit;
}
.card-title {
  font-weight: bold;
  font-size: 17px;
  color: gainsboro;
}
small {
  color: gainsboro !important;
}
</style>
