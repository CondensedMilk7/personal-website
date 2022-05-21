<template>
  <div class="spinner-container">
    <i class="fa-solid fa-spinner spinner"></i>
  </div>
</template>

<style>
.spinner-container {
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: auto;
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-duration: 2s;
}

.spinner {
  font-size: 2rem;
  color: var(--magenta);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
