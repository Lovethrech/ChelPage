<script setup>
import Logo from "@/components/Logo.vue";
import Nav from "@/components/Nav.vue";
</script>

<style scoped>
.header-ctn{
    position: absolute;
    top:0;
    left:0;
    width:130px;
    height:100%;
    margin:1vh 6vw;
}
@media screen and (max-width:900px) {
    .header-ctn{
        margin:1vh 4vw;
        width:20vw;
    }
}
</style>

<template>
    <div class="header-ctn">
        <Logo></Logo>
        <Nav></Nav>
    </div>
</template>