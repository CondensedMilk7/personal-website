<template>
  <div class="back-to-top" v-show="isVisible">
    <a @click="toTop"><i class="fa-solid fa-chevron-up"></i></a>
  </div>
</template>

<script>
export default {
  name: "BackToTop",

  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  computed: {
    isVisible() {
      return this.scY > 600;
    },
  },

  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
      });
    },
  },
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 5vw;
  bottom: 4rem;
  height: 2.4rem;
  width: 2.4rem;
  background-color: var(--bg-storm);
  opacity: 90%;
  border-radius: 100%;
  transition: background-color 100ms linear;
  transition: color 100ms linear;
  animation-name: slidein;
  animation-duration: 1s;
  color: var(--green);
}

.back-to-top:hover {
  background-color: var(--comment);
  color: var(--orange);
  cursor: pointer;
}

.back-to-top a {
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
}

.back-to-top i {
  margin: 0;
}

@keyframes slidein {
  from {
    transform: translateX(300%);
    opacity: 0;
  }

  to {
    transform: translateX(0%);
    opacity: 0.9;
  }
}
</style>
