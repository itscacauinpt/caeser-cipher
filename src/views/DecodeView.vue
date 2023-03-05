<script setup>
import { onMounted, ref, watch, computed } from 'vue';

const message = ref('')

const funcaozinha = () => {
  console.log(message.value)
}
</script>

<template>
  <main>
    <div class="decode">
      <form @submit.prevent="funcaozinha">
        <h2>decode message</h2>
        <textarea v-model="message" placeholder="decode teh message"></textarea>
        <input
          type="submit"
          value="decode"
        />
      </form>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .decode {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>