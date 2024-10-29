<script setup>
import {ref} from "vue";
import navTexts from "@/data/nav-text.json";
import NavText from "@/components/NavText.vue";

const navHome=ref([navTexts[0]]);
const navProject=ref([navTexts[1]]);
const navService=ref([navTexts[2]]);
const navContact=ref([navTexts[3]]);
const homeColor=ref("#c7ae6a");
const projectColor=ref("#b99a4591");
const serviceColor=ref("#b99a4591");
const contactColor=ref("#b99a4591");

const homeStay=()=>{
    ((projectColor.value==="#c7ae6a")||(serviceColor.value==="#c7ae6a")||(contactColor.value="#c7ae6a"))?((projectColor.value="#b99a4591"),(homeColor.value="#c7ae6a"),(serviceColor.value="#b99a4591"),(contactColor.value="#b99a4591")):((homeColor.value="#c7ae6a"),(projectColor.value="#b99a4591"),(serviceColor.value="#b99a4591"),(contactColor.value="#b99a4591"));
}
const projectStay=()=>{
    ((homeColor.value==="#c7ae6a")||(serviceColor.value==="#c7ae6a")||(contactColor.value="#c7ae6a"))?((homeColor.value="#b99a4591"),(projectColor.value="#c7ae6a"),(serviceColor.value="#b99a4591"),(contactColor.value="#b99a4591")):((homeColor.value="#c7ae6a"),(projectColor.value="#b99a4591"),(serviceColor.value="#b99a4591"),(contactColor.value="#b99a4591"));
}
const serviceStay=()=>{
    ((homeColor.value==="#c7ae6a")||(projectColor.value==="#c7ae6a")||(contactColor.value="#c7ae6a"))?((homeColor.value="#b99a4591"),(serviceColor.value="#c7ae6a"),(projectColor.value="#b99a4591"),(contactColor.value="#b99a4591")):((homeColor.value="#c7ae6a"),(projectColor.value="#b99a4591"),(serviceColor.value="#b99a4591"),(contactColor.value="#b99a4591"));
}
const contactStay=()=>{
    ((homeColor.value==="#c7ae6a")||(serviceColor.value==="#c7ae6a")||(projectColor.value="#c7ae6a"))?((homeColor.value="#b99a4591"),(contactColor.value="#c7ae6a"),(serviceColor.value="#b99a4591"),(projectColor.value="#b99a4591")):((homeColor.value="#c7ae6a"),(projectColor.value="#b99a4591"),(serviceColor.value="#b99a4591"),(contactColor.value="#b99a4591"));
}
</script>

<style scoped>
.nav-text-ctn-main-ctn{
    position:absolute;
    top:5vh;
    right:3vw;
    color:white;
}
</style>

<template>
    <div class="nav-text-ctn-main-ctn">
        <NavText :navDetails="navHome" :linkColor="homeColor" v-on:click="homeStay"></NavText>
        <NavText :navDetails="navProject" :linkColor="projectColor" v-on:click="projectStay"></NavText>
        <NavText :navDetails="navService" :linkColor="serviceColor" v-on:click="serviceStay"></NavText>
        <NavText :navDetails="navContact" :linkColor="contactColor" v-on:click="contactStay"></NavText>
    </div>
</template>