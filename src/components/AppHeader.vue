<template>
<nav class="navbar  navbar-dark bg-dark fixed-top p-3">
    <div class="container d-flex align-items-center">
    <router-link to="/" class="navbar-brand">SEDATFLİX</router-link>
        <div class="search" :class="{active:toggle}">
        <input class="form-control" type="text" placeholder="Search Movie...">
    </div>
    <a href="#" @click="clickToggle"  class="toggle-button"> 
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
    <nav class="navigation" :class="{active:toggle}">
        <router-link to="/" >Anasayfa</router-link>
        <router-link to="/yayinda-olanlar" class="pl-3">Yayında Olanlar</router-link>
        <router-link to="/en-iyiler" class="pl-3">En İyiler</router-link>
        <router-link to="/beklenen-filmler" class="pl-3">Beklenen Filmler</router-link>
    </nav>


    </div>
</nav>
</template>
<style scoped>

</style>
<script>

export default {
    name : 'Header',
    data (){
        return {
            toggle : false
        }
    },
    methods : {
        clickToggle(){  
            this.toggle = !this.toggle
        }
    }
}

</script>