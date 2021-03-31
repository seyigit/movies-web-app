<template>
  <div id="app">
      <transition name="fade">
      <router-view></router-view>
      </transition>
  </div>
</template>
<script>

export default {
    components: {

    }
}
</script>

<style scoped>
.main{
  padding-top: 125px;
  padding-bottom: 60px;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.fade-enter-active {
  transition: all .3s ease-in;
  opacity: 0;
}
.fade-leave-active {
  transition: all .7s ease-in-out;
  opacity: 0;
}
.fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>
