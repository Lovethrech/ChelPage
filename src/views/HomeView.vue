<script setup>
import Header from "@/components/Header.vue";
import HomeHero from '@/components/home/HomeHero.vue';
import NavTextCtn from "@/components/NavTextCtn.vue";
import AboutCtn from '@/components/home/AboutCtn.vue';
</script>

<template>
    <div class="main-ctn">
        <header>
            <Header></Header>
            <HomeHero></HomeHero>
            <NavTextCtn></NavTextCtn>
        </header>
        <div class="content-ctn">
            <AboutCtn></AboutCtn>
        </div>
    </div>
</template>