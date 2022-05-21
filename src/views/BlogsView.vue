<template>
  <div>
    <nav-bar :isHome="false" />
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
import { environment } from "@/environment/environment";
import axios from "axios";

export default {
  name: "BlogsView",
  components: {
    NavBar,
    BlogCard,
  },
  data() {
    return {
      cards: [],
      errorMsg: "",
    };
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
