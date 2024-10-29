<script setup>
import {ref} from "vue";

const miniTextCtnTwo=ref("#2e3334");
const miniCtnBoxShadow=ref("10px 10px 20px 2px rgba(17, 17, 17, 0.596), -10px -10px 20px 2px rgba(17, 17, 17, 0.712)");
const miniCtnBorder=ref("5px dotted #3b3e3f");
const hMaking=ref("Making");
const hGood=ref("good");
const hShit=ref("shit");
const hSince=ref("since");
const hYear=ref("2000's");

const changeContent=()=>{
    if (hMaking.value="Birthed"){
        miniTextCtnTwo.value="black";
        miniCtnBoxShadow.value="1px 1px 2px 2px rgb(12, 12, 12), -1px -1px 2px 2px rgb(12, 12, 12)";
        miniCtnBorder.value="5px dotted rgba(12, 12, 12, 0.61)";
        hMaking.value="Birthed";
        hGood.value="in 2003.";
        hShit.value="Do";
        hSince.value="The";
        hYear.value="Math";
    }
}
const defaultContent=()=>{
    if (hMaking.value==="Birthed"){
        miniTextCtnTwo.value="#2e3334";
        miniCtnBoxShadow.value="10px 10px 2px 2px rgba(17, 17, 17, 0.596), -10px -10px 20px 2px rgba(17, 17, 17, 0.712)";
        miniCtnBorder.value="5px dotted #3b3e3f";
        hMaking.value="Making";
        hGood.value="good";
        hShit.value="shit";
        hSince.value="since";
        hYear.value="2000's";
    } 
}
// Next up: The next component to be placed under the Hero component 
</script>

<style scoped>
.main-text-ctn{
    display:flex;
    place-items:center;
    justify-content: center;
    width:100%;
    height:100vh;
}
.mini-text-ctn{
    text-align:center;
    text-transform:uppercase;
}
.mini-text-ctn-ctn{
    background-color: #2e3334;
    transition: all .4s;
    padding:100px 200px;
    border-radius:50%;
}
.h1-ctn{
    color: #b99a45;
    transition: all .4s;
    font-family: "Protest Guerrilla", sans-serif;
    font-weight:900;
    font-size:80px;
}
.content{
    background:linear-gradient(to bottom, #d5c28f 40%, #c7ae6a 60%, #b99a45 );
    background-size: 100% 1.2em;
}
.h-p{
    background:repeating-linear-gradient(to right, #b99a45, #c7ae6a, #d5c28f, #c7ae6a, #b99a45);
    letter-spacing:10px;
    font-size: 14px;
    background-size: 100% 10em;
    font-family: "Sansita Swashed", system-ui;
}
.h-p, .content{
    color: #c7ae6a;
    background-clip: text;
    color: transparent;
}

@media screen and (max-width:900px){
    .mini-text-ctn-ctn{
        padding:10vh 20vw;
    }
    .h-p{
        font-size:2vw;
    }
    .h1-ctn{
        font-size:9vw;
    }
}
@media screen and (max-height:600px){
    .mini-text-ctn-ctn{
        padding:8vh 16vw;
    }
    .h-p{
        font-size:1vw;
    }
    .h1-ctn{
        font-size:6vw;
    }
}
</style>


<template>
    <div class="main-text-ctn">
        <div class="mini-text-ctn">
            <div 
                id='h1-box-active'
                class="mini-text-ctn-ctn"
                v-on:mouseenter='changeContent'
                v-on:mouseleave="defaultContent"
                :style="{
                    background:miniTextCtnTwo,
                    boxShadow:miniCtnBoxShadow,
                    border:miniCtnBorder
                }"
            >
                <p 
                    class="h-p" 
                >
                    Lovethrech
                </p>
                <br>
                <div 
                    class="h1-ctn" 
                >
                    <p id='h1-box-active' v-html="hMaking"></p>
                    <div 
                        class="content"
                    >
                        <p id='h1-box-active' v-html="hGood"></p>
                        <p id='h1-box-active' v-html="hShit"></p>     
                    </div>
                    <p id='h1-box-active' v-html="hSince"></p>
                    <p id='h1-box-active' v-html="hYear"></p>
                </div>
            </div>
        </div>
    </div>
</template>