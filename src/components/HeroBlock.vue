<template>
  <div class="hero">
    <div class="hero-image"></div>
    <div class="profile">
      <img
        class="profile-image"
        src="@/assets/pridon.jpg"
        alt="Picture of Pridon Tetradze"
      />
      <div class="hero__info">
        <div>
          <h1 class="hero-title">Pridon Tetradze</h1>
        </div>
        <div class="hero__contact">
          <div class="contact__secondary">
            <ul class="contact__list">
              <li>
                <a href="https://www.linkedin.com/in/pridon-tetradze-a4349a216/"
                  ><i class="fa-brands fa-linkedin"></i
                ></a>
              </li>
              <li>
                <a href="https://www.facebook.com/fridon.tetradze"
                  ><i class="fa-brands fa-facebook"></i
                ></a>
              </li>
              <li>
                <a href="https://github.com/CondensedMilk7"
                  ><i class="fa-brands fa-github"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCwyFNOOo6WwVIlqgYSFQTzQ"
                  ><i class="fa-brands fa-youtube"></i
                ></a>
              </li>
            </ul>
          </div>
          <a href="mailto: pridon@primordialsoup.info" class="contact__mail"
            >pridon@primordialsoup.info
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBlock",
};
</script>

<style scoped>
.hero {
  position: relative;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-night);
  color: var(--highlight-blue);
}

.hero-image {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #1a1b2680;
  background-image: url(https://imgur.com/6vuiWxB.jpg);
  background-size: cover;
  background-position: center;
  /* filter: blur(4px);
  -webkit-filter: blur(4px); */
  background-blend-mode: darken;
  transition: filter 200ms linear;
  z-index: 2;
}

.hero-image:hover {
  filter: blur(0);
}

.profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile-image {
  width: 14rem;
  border: var(--highlight-blue) 0.2em solid;
  border-radius: 100%;
  transition: box-shadow 100ms linear;
  z-index: 2;
  margin: 1rem;
}

.hero__info {
  margin: 1rem;
  font-weight: bold;
  text-align: center;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 0;
}

.hero-desc {
  margin-top: 0.5rem;
}

.hero__contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact__list {
  list-style: none;
  display: flex;
  padding: 0;
  margin-top: 1.4rem;
  margin-left: 0;
}

.contact__list li {
  margin: 0.5rem 0;
  transition: color 100ms linear;
}

.contact__list li:hover {
  color: var(--blue);
}

.contact__list li a {
  color: inherit;
}

.contact__list i {
  margin: 0 0.6rem;
  font-size: 2.6rem;
}

.contact__mail {
  color: inherit;
  transition: color 100ms linear;
}

.contact__mail:hover {
  color: var(--blue);
}

@media (max-width: 600px) {
  .hero {
    padding: 40px 0;
  }
  .profile {
    flex-direction: column;
  }
}
</style>
