<script setup>
import { onMounted, ref, watch, computed } from 'vue';

const message = ref('')

const funcaozinha = () => {
  console.log(message.value)
}
</script>

<template>
  <main>
    <div class="encode">
      <form @submit.prevent="funcaozinha">
        <h2>encode message</h2>
        <textarea v-model="message" placeholder="digit your message"></textarea>
        <input
          type="submit"
          value="encode"
        />
      </form>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .encode {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

