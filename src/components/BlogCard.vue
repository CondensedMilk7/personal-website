<template>
  <article class="card">
    <img class="card__image" :src="thumbnail" :alt="title" />
    <div class="card__content">
      <h1>{{ title }}</h1>
      <p>
        {{ description }}
      </p>
      <div class="card__actions">
        <router-link :to="{ name: 'read-blog', params: { blog: blogKey } }"
          ><i class="fa-solid fa-book-open"></i>წაიკითხე</router-link
        >
        <span>{{ date }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    blogKey: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.card {
  background-color: var(--bg-storm);
  max-width: 600px;
  margin: 4rem auto;
  border-radius: 12px;
  overflow: hidden;
}

.card img {
  border-radius: 0;
}

.card__content {
  padding: 0 16px 16px 16px;
}

.card__actions {
  display: flex;
  justify-content: space-between;
}
</style>
