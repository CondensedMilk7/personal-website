<template>
  <main>
    <section class="section" id="projects">
      <section class="subsection">
        <h3 class="subsection-heading">Web Development</h3>
        <div class="project">
          <h2>Primordial Soup</h2>
          <p>
            A platform I built where we put up articles within the fields of
            psychology and philosophy. This can be viewed as a documented
            journey as I explore various interesting scientific and
            philosophical theories, research papers and more.
          </p>
          <div class="project-preview">
            <a href="https://primordialsoup.info" target="_blank">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>visit
              website</a
            >
            <a
              href="https://github.com/CondensedMilk7/primordial-soup"
              target="_blank"
              ><i class="fa-solid fa-code"></i>source code</a
            >
            <img
              src="https://user-images.githubusercontent.com/82287873/158648656-5b7cad05-4d52-4205-9bea-e89bc399264a.png"
              alt="Primordial Soup project screenshot"
            />
          </div>
        </div>
        <div class="project">
          <h2>Countryfetch</h2>
          <p>
            A simple CLI tool for fetching information about countries, built
            with TypeScript and Deno. It generates ASCII art from flag images to
            be displayed on the terminal.
          </p>
          <div class="project-preview">
            <a
              href="https://github.com/CondensedMilk7/countryfetch"
              target="_blank"
              ><i class="fa-solid fa-code"></i>source code</a
            >
            <img
              src="https://raw.githubusercontent.com/CondensedMilk7/countryfetch/master/images/countryfetch.png"
              alt="Countryfetch preview"
            />
          </div>
        </div>
      </section>
      <section class="subsection">
        <h3 class="subsection-heading">Psychoanalysis</h3>
        <div class="project">
          <h2>Split Subject: Lacanian Psychoanalysis</h2>
          <p>
            Exploration of Lacan's ever so difficult concept that is most
            essential in understanding the psychoanalytic approach.
          </p>
          <div class="project-preview">
            <a href="https://youtu.be/4kxZsWLi-04" target="_blank"
              ><i class="fa-brands fa-youtube"></i>watch</a
            >
            <a
              href="https://primordialsoup.info/reader/split-subject-lacanian-psychoanalysis"
              target="_blank"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i>read</a
            >
            <img
              src="https://img.youtube.com/vi/4kxZsWLi-04/maxresdefault.jpg"
              alt="video thumbnail"
            />
          </div>
        </div>
        <div class="project">
          <h2>Object Relations: from Freud to Klein</h2>
          <p>
            Exploration of the concept "object", as first introduced by Freud
            and later adopted by Klein, serving as a central term in
            object-relations theory.
          </p>
          <div class="project-preview">
            <a href="https://youtu.be/28xw9mfUc9Y" target="_blank"
              ><i class="fa-brands fa-youtube"></i>watch</a
            >
            <a
              href="https://primordialsoup.info/reader/object-relations-from-freud-to-klein"
              target="_blank"
              ><i class="fa-solid fa-arrow-up-right-from-square"></i>read</a
            >
            <img
              src="https://img.youtube.com/vi/28xw9mfUc9Y/maxresdefault.jpg"
              alt="video thumbnail"
            />
          </div>
        </div>
      </section>
      <section class="subsection">
        <h3 class="subsection-heading">Other</h3>
        <div class="project">
          <h2>Angular lessons in Georgian</h2>
          <p>
            Every now and then I attempt to teach a few things about my favorite
            framework to my fellow countrymen. My videos also happen to be the
            only Georgian lessons in Angular.
          </p>
          <div class="project-preview">
            <a
              href="https://www.youtube.com/playlist?list=PLvlLyfXTKx9Wb6f2Tzu4UPSnXsQOUnsKr"
              target="_blank"
              ><i class="fa-brands fa-youtube"></i>view</a
            >
            <img
              src="https://img.youtube.com/vi/ta_TG2icHdA/maxresdefault.jpg"
              alt="video thumbnail"
            />
          </div>
        </div>
        <div class="project">
          <h2>Music</h2>
          <p>
            I don't actively make music nowadays. I mostly just play instruments
            and rarely compose music for Primordial Soup videos. Nevertheless, I
            have some compositions published that I am proud of.
          </p>
          <a
            href="https://www.youtube.com/playlist?list=PLvlLyfXTKx9W2D9EjpJyvHnfGu1Rxp73U"
            target="_blank"
            ><i class="fa-brands fa-youtube"></i>Listen</a
          >
        </div>
        <div class="project-preview"></div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "ProjectsShowcase",
};
</script>

<style scoped>
.project {
  margin: 3rem 0 5rem 0;
}

.project h2 {
  margin-bottom: 0.5rem;
}

h3 {
  text-align: center;
}

.project-preview {
  margin: 2rem 0;
}

.project-preview a {
  margin-right: 1rem;
}

.project i {
  font-size: 1rem;
  margin-right: 0.3rem;
}

.project-preview img {
  width: 100%;
  margin-top: 0.5rem;
  border-radius: 8px;
}
</style>
