<template>
  <nav-bar :isHome="false" />
  <main>
    <article v-html="mdToHtml" v-highlight></article>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { environment } from "@/environment/environment";
import axios from "axios";
import { marked } from "marked";

export default {
  name: "BlogView",
  components: { NavBar },
  data() {
    return {
      blogMd: "",
    };
  },

  computed: {
    mdToHtml() {
      return marked(this.blogMd);
    },
  },

  mounted() {
    axios
      .get(`${environment.url}/${this.$route.params.blog}/text.md`)
      .then((response) => {
        this.blogMd = response.data;
      });
  },
};
</script>

<style scoped></style>
