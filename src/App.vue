<template>
  <router-view />
</template>

<style>
/* Global Styles */

@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Noto+Sans+Georgian&family=Source+Code+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian&family=Source+Code+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap");

:root {
  --bg-night: #1a1b26;
  --bg-storm: #24283b;
  --black: #414868;
  --comment: #565f89;
  --text: #9aa5ce;
  --fg-dark: #a9b1d6;
  --magenta: #bb9af7;
  --blue: #7aa2f7;
  --highlight-blue: #7dcfff;
  --warn: #f7768e;
  --green: #9ece6a;
  --link: #2ac3de;
  --orange: #ff9e64;
  --light-blue: #b4f9f8;

  --bg-light: #d5d6db;
  --fg-light: #343b58;
  --magenta-light: #5a4a78;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

.light {
  background-color: var(--bg-light);
  color: var(--fg-light);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.light a {
  color: var(--magenta-light);
}

body {
  font-family: "Open Sans", "Noto Sans Georgian", sans-serif;
  background-color: var(--bg-night);
  color: var(--fg-dark);
}

main {
  max-width: 800px;
  margin: auto;
  padding: 2rem 16px;
}

article {
  text-align: justify;
}

img {
  width: 100%;
  border-radius: 12px;
}

ul {
  text-align: left;
  margin-left: 0.5%;
  margin-bottom: 1rem;
}

li {
  margin: 0.8rem 0;
}

h1,
h2,
h3 {
  padding: 4.2rem 0 1rem 0;
  text-align: left;
}

p {
  margin: 1rem 0;
}

a {
  color: var(--link);
  transition: color 100ms linear;
}

a:hover {
  color: var(--comment);
}

a i {
  margin-right: 0.3rem;
}

#about {
  padding: 0;
}

code {
  font-family: "JetBrains Mono", monospace;
}

pre {
  /* border: 2px solid var(--text); */
  box-shadow: 0 0 4px var(--magenta);
  border-radius: 12px;
  overflow: hidden;
}

.hidden {
  display: none;
}

.error {
  background-color: var(--warn);
  color: #1a1b26;
  text-align: center;
}

/* 
-------------------------------------------------------------------------------------------------
Media queries
-------------------------------------------------------------------------------------------------
*/

@media (max-width: 600px) {
  html {
    font-size: 15px;
  }
  p {
    text-align: left;
  }
}

/* If user prefers reduced motion effects */
@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
