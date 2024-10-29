<script setup>
import {defineProps,ref} from "vue";
const {iconDetail}=defineProps(['iconDetail']);

const iconPad=ref("0");
const moveIcon=()=>{
    if (iconPad.value==="0"){
        iconPad.value="20px";
    }
}
const dropIcon=()=>{
    if (iconPad.value==="20px"){
        iconPad.value="0";
    }
}
</script>

<style scoped>
.icon-ctn{
    transition:all .4s;
    background:transparent;
    color:#b99a45;
    margin:20px;
    font-size:24px;
    border-radius:100%;    
}
.icon-ctn:hover{
    cursor:pointer;
    transform: scale(0.96);
}
</style>


<template>
    <div class="icon-ctn" :style="{padding:iconPad}" v-html="iconDetail[0].icon" v-on:mouseenter="moveIcon" v-on:mouseleave="dropIcon">
    </div>
</template>