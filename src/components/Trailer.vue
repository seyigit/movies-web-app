<template>
              <iframe :trailerVideo="trailerVideo"  width="560" height="259" :src="trailerPath" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
import axios from 'axios'
export default {
    name:'Trailer',
    data (){
        return {
            trailerVideo : []
        }
    },
     created (){
        return axios.get(`https://api.themoviedb.org/3/movie/${this.movieid}/videos?api_key=0ade8bd31670b7c7b7c14c034661b692&language=en-US`)
        .then(res => {
         this.trailerVideo = res.data.results.map(item => item.key)
        })
    },
    computed :{
            movieid() {
      return this.$route.params.id;
            },
            trailerPath(){
            return 'https://www.youtube.com/embed/'+this.trailerVideo[0]+'?autoplay=1';
        }
    }

        }
    

</script>

<style scoped>
iframe{
    width: 100%!important;
    height:300px;
}
</style>