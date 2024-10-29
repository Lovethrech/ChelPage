<script setup>
import {defineProps,ref} from "vue";

const {navDetails, linkColor}=defineProps(['navDetails', 'linkColor']);
</script>

<style scoped>
.nav-text-main-ctn{
    text-align:right;
}
.link{
    transition: all .8s;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing:2px;
}
.nav-text-main-ctn:hover{
    cursor:pointer;
    transform: scaleX(0.96);
    transition: all .4s;
}
</style>

<template>
    <div class="nav-text-main-ctn">
        <div class="nav-text-mini-ctn">
            <RouterLink :to="navDetails[0].link" :style="{color:linkColor}" class="link"> 
                <p class="nav">{{navDetails[0].text}}</p>
            </RouterLink>
        </div>
    </div>
</template>