<template>
<nav class="navbar navbar-dark bg-dark fixed-top p-3">
    <div class="container d-flex align-items-center">
    <router-link to="/" class="navbar-brand">SEDATFLİX</router-link>
        <div class="">
        <input class="form-control" type="text" placeholder="Search Movie...">
    </div>
    <nav class="navigation">
        <router-link to="/" class="navbar-brand">Anasayfa</router-link>
        <router-link to="/yayinda-olanlar" class="navbar-brand">Yayında Olanlar</router-link>
        <router-link to="/en-iyiler" class="navbar-brand">En İyiler</router-link>
        <router-link to="/beklenen-filmler" class="navbar-brand">Beklenen Filmler</router-link>
    </nav>


    </div>
</nav>
</template>
<style scoped>

</style>