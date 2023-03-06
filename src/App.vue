<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="green">Caesar Cipher</h1>
      <h3>
        More details in
        <a
          href="https://en.wikipedia.org/wiki/Caesar_cipher"
          target="_blank"
          rel="noopener"
        >
          link wiki
        </a>.
      </h3>
      <nav>
        <RouterLink to="/">Encode</RouterLink>
        <RouterLink to="/decode">Decode</RouterLink>
      </nav>
      <div class="wrapper_p">
        <p>
          "If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out. If anyone wishes to decipher these, and get at their meaning, he must substitute the fourth letter of the alphabet, namely D, for A, and so with the others."
        </p>
        <p>
          - Suetonius, Life of Julius Caesar
        </p>
      </div>
      <p>YFD CXK LC QEB PBPE SLIRJB LKB LK PMLQFCV</p>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding-left: 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.wrapper_p {
  line-height: 1.5;;
  padding: 2rem 0rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper .wrapper_p {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
