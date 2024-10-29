<script setup>
import {ref} from "vue";

const slideColor=ref("#131212");
const slideTrans=ref("all .4s");
const textColor=ref("white");
const titleColor=ref("#b99a45");
const contentText=ref("I'm a <b class='bold-about'>selectively skilled</b>  frontend developer with strong focus on producing high-quality & pixel-perfect experience.");
const changeCtn=()=>{
    (slideColor.value==="#131212")? ((slideColor.value="#b99a45"),(textColor.value="black")): (slideColor.value="#131212");
}
const defaultCtn=()=>{
    (slideColor.value==="#b99a45")? ((slideColor.value="#131212"),(textColor.value="white")): (slideColor.value="#b99a45");
}
// margin:0 0 0 -100vw;
// Next up: Sliding container based on mouseenter and mouseleave event 
</script>

<style scoped>
.about-ctn-text-main-ctn{
    display:flex;
    width:200vw;
}
.about-ctn-text-mini-ctn{
    width:100vw;
    padding:6vh 10vw;
    margin:4vh 0;
    display:flex;
    justify-content: center;
    place-items: center;
}
.about-ctn-text-mini-ctn .title{
    font-size:20px;
    letter-spacing: 10px;
    text-transform: uppercase;
}
.content{
    font-size:90px;
}
.about-ctn-text-mini-ctn .bold-about{
    color:#b99a45;
}
</style>

<template>
    <div class="about-ctn-text-main-ctn" :style={backgroundColor:slideColor,transition:slideTrans,color:textColor}>
        <div class="about-ctn-text-mini-ctn" v-on:mouseenter="changeCtn" v-on:mouseleave="defaultCtn">
            <div class="ctn">
                <h2 class="title" :style="{color:titleColor}">About me</h2>
                <br/>
                <p class="content" v-html="contentText">
                </p>    
            </div>
        </div>
        <!-- <div class="about-ctn-text-hdn-ctn"  v-on:mouseleave="defaultCtn">
            <div class="ctn">
                <h2 class="title">Rate me</h2>
                <p class="content">
                    I'm a <b class="bold-about">selectively skilled</b>  frontend developer with strong focus on producing high-quality & pixel-perfect experience.
                </p>  
            </div>
        </div> -->
    </div>
</template>