<template>
  <nav-bar :isHome="false" />
  <projects-showcase />
</template>

<script>
import NavBar from "@/components/NavBar";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default {
  name: "ProjectsView",
  components: {
    NavBar,
    ProjectsShowcase,
  },
};
</script>
