<template>
    <div class="lds-dual-ring"></div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.lds-dual-ring {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ddd;
  border-color: #ddd transparent #ddd transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>