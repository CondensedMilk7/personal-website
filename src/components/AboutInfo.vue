<template>
  <section class="section" id="about">
    <h1>About Me</h1>
    <p>
      My name is Pridon and I am from Georgia. I have formal education in
      psychology and my interests have compelled me to pursue psychoanalysis. I
      document my explorations at
      <a href="https://primordialsoup.info" target="_blank"
        >primordialsoup.info</a
      >. Alongside this intellectual inquiry, I make living with web
      development. I'm always eager to learn different technologies, solve
      engaging problems and create interesting projects. "Learning" is the best
      term I can use to describe what I do in the most general sense.
    </p>
  </section>
</template>

<script>
export default {
  name: "AboutInfo",
};
</script>

<style scoped>
.section {
  padding: 4rem 0;
}

section p {
  font-weight: 400;
  line-height: 1.4rem;
  text-align: justify;
}

section h1 {
  font-weight: 700;
  font-size: 2rem;
  color: var(--text);
  margin-bottom: 1rem;
}
</style>
