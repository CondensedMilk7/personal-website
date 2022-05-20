<template>
  <header>
    <span v-if="isHome === false">
      <a href="/" class="home-link">&lt;P/T&gt;</a>
    </span>
    <span class="spacer" v-if="isHome === false"></span>
    <nav>
      <ul>
        <li class="nav__list-item" v-if="isHome">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="nav__list-item">
          <router-link :to="{ name: 'projects' }">Projects</router-link>
        </li>
        <li class="nav__list-item">
          <router-link :to="{ name: 'blog' }">Blog</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    isHome: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
header {
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg);
  opacity: 95%;
  z-index: 5;
  padding: 20px;
  background-color: var(--bg-night);
  opacity: 0.98;
}

.home-link {
  font-weight: bold;
  text-decoration: none;
  color: var(--highlight-blue);
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  font-size: 1.1rem;
  margin: 0;
}

.nav__list-item {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 100ms linear;
}

a:hover {
  color: var(--orange);
  cursor: pointer;
}

.nav-active {
  color: var(--green);
}

.spacer {
  flex-grow: 1;
}
</style>
