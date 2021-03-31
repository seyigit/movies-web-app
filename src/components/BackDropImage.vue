<template>
    <img class="backdrop" :src="İmagePath" alt="" />
</template>

<script>

export default {
    components:{
    },
    props: {
    imagePath: {
      type: String,
      required: true,
    },
  },
  computed: {
    İmagePath() {
        return 'https://image.tmdb.org/t/p/w1280/' + this.imagePath;
    },
  },
};
</script>

<style>
.backdrop{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(30px);
    box-sizing: content-box;

}
</style>