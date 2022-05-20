<template>
  <div>
    <nav-bar :isHome="false" />
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
    };
  },
  mounted() {
    axios.get(`${environment.url}/cards.json`).then((response) => {
      this.cards = response.data;
    });
  },
};
</script>

<style scoped></style>
