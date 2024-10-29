<script setup>
import {ref} from "vue";
import NavIcon from "@/components/NavIcon.vue";
import navIcons from "@/data/nav-icons.json";

const dribIcon=ref([navIcons[0]]);
const iGIcon=ref([navIcons[1]]);
const whatsAppIcon=ref([navIcons[2]]);
const linkedInIcon=ref([navIcons[3]]);
</script>

<style scoped>
.main-nav-ctn{
    margin: 0 auto;
    padding:0 0 10vh;
    height:70vh;
    display: flex;
    justify-content: center;
    place-items:end;
}
.nav-mini-ctn{
    display: flex;
    flex-direction: column;
}

@media screen and (max-width:920px) {
    .main-nav-ctn{
        display:none;
    }
}
</style>

<template>
    <div class="main-nav-ctn">
        <div class="nav-mini-ctn">
            <NavIcon :iconDetail="dribIcon"></NavIcon>
            <NavIcon :iconDetail="iGIcon"></NavIcon>
            <NavIcon :iconDetail="whatsAppIcon"></NavIcon>
            <NavIcon :iconDetail="linkedInIcon"></NavIcon>
        </div>
    </div>
</template>