<script>
import Loader from "@/components/loader";
import Movie from "@/components/Movie";
import { mapGetters } from "vuex";
import AppHeader from "@/components/AppHeader";

export default {
  name: "Yayinda-olanlar",
  components: {
    Loader,
    Movie,
    AppHeader,
  },
  data() {
    return {
      isloading: true,
    };
  },
  computed: {
    ...mapGetters(["movies"]),
  },
  created() {
    this.$store.dispatch("getMovies").then(() => {
      this.isloading = false;
    });
  },
};
</script>
<template>
  <section class="container alig-items-center" style="padding-top: 125px; padding-bottom: 85px">
    <AppHeader />
    <div class="row">
      <Loader v-if="isloading" />
      <Movie v-for="movie in movies" :key="movie.id" :movie="movie">
         </Movie>
    </div>
  </section>
</template>


