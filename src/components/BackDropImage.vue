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

</style>