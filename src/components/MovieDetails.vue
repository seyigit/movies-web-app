<script>
import Loader from "@/components/loader";
import BackDropImage from "@/components/BackDropImage";
import Poster from "@/components/Poster";
import Trailer from "@/components/Trailer";

import axios from 'axios'

export default {
  name: "MovieDetails",
  components: {
    BackDropImage,
    Loader,
    Poster,
    Trailer
  },
  props : {
    trailerVideo : {
      type : Array,
      required : false
    }
  },
  data() {
    return {
      hasdetails: false,
      isloading: true,
      movieVideo:[]
    };
  },
  async created() {    
      return await axios.get('https://api.themoviedb.org/3/movie/'+await this.movieid+'?api_key=0ade8bd31670b7c7b7c14c034661b692')
      .then(res => {
         this.movieVideo = res.data
         this.isloading = false;
         this.hasdetails = true
         console.log(this.movieVideo)
          })


  },
  async mounted(){


  },

  computed: {
    movieid() {
      return this.$route.params.id;
    }, 
    runtime(){
      const {runtime} = this.movieVideo
      const hours = Math.floor(runtime/60);
      const minutes = runtime - (60 * hours);
      return`${hours} Saat ${minutes} Dakika`

    }
  },
};
</script>
<template>
  <section class="allheight">
    <Loader v-if="isloading" />
    <section v-if="hasdetails">
      <back-drop-image :imagePath="this.movieVideo.backdrop_path" />
      <div class="container pt-5">
        <div class="row">
          <div class="col-sm-4">
            <poster :posterName="this.movieVideo.poster_path" />
          </div>
          <div class="col-sm-7 details">
            <h2>{{this.movieVideo.title}}</h2>
            <p>{{this.movieVideo.overview}}</p>
            <div>
              <div>Film Süresi : {{runtime}}</div>
              <div>Puanlama : {{this.movieVideo.vote_average}}</div>
              <div>Prodüksiyon Şirketi : {{this.movieVideo.production_companies[0].name}}</div>
              <div>Yayın Tarihi : {{this.movieVideo.release_date}}</div>
              <h4>Fragman</h4>
              <Trailer :trailerPath="this.trailerVideo"/>
            </div>
          </div>
          <div class="col-sm-1">
            <router-link class="back-to-home" to="/yayinda-olanlar">Back</router-link>
          </div>
        </div>
              
      </div>
    </section>
  </section>
</template>
<style scoped>
.details{
  color: white;
}
.back-to-home{
  color:white;
}
.back-to-home::before{
 content: '<';
 margin-right: 2px;
}
</style>