<template>
  <hero-block />
  <nav-bar />
  <main>
    <about-info />
  </main>
</template>

<script>
import HeroBlock from "@/components/HeroBlock.vue";
import AboutInfo from "@/components/AboutInfo.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: { HeroBlock, AboutInfo, NavBar },
};
</script>

<style></style>
