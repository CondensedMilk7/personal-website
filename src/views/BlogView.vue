<template>
  <nav-bar :isHome="false" />
  <back-to-top />
  <p class="error" v-show="errorMsg">An error has occurred: {{ errorMsg }}</p>
  <main>
    <article v-html="mdToHtml" v-highlight></article>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import BackToTop from "@/components/BackToTop.vue";
import { environment } from "@/environment/environment";
import axios from "axios";
import { marked } from "marked";

export default {
  name: "BlogView",
  components: { NavBar, BackToTop },
  data() {
    return {
      blogMd: "",
      errorMsg: "",
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
      })
      .catch((err) => {
        this.errorMsg = err.message;
      });
  },
};
</script>
