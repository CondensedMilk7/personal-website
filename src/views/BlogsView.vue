<template>
  <div>
    <nav-bar :isHome="false" />
    <loading-spinner v-show="loading" />
    <p class="error" v-show="errorMsg">An error has occurred: {{ errorMsg }}</p>
    <main class="cards">
      <blog-card
        v-for="card in cards"
        v-bind:key="card.blogKey"
        :title="card.title"
        :description="card.description"
        :thumbnail="card.thumbnail"
        :blogKey="card.blogKey"
        :date="card.date"
      />
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import BlogCard from "@/components/BlogCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { environment } from "@/environment/environment";
import axios from "axios";

export default {
  name: "BlogsView",
  components: {
    NavBar,
    BlogCard,
    LoadingSpinner,
  },
  data() {
    return {
      cards: [],
      errorMsg: "",
    };
  },
  computed: {
    loading() {
      if (this.cards.length || this.errorMsg) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    axios
      .get(`${environment.url}/cards.json`)
      .then((response) => {
        this.cards = response.data;
      })
      .catch((err) => {
        this.errorMsg = err.message;
      });
  },
};
</script>
