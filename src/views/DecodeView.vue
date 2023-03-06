<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import { decodeFunc } from '../utils/constants'

let message = ref('')
let decodedMessage = ref('...')

const splitWord = (letters) => {
  let letterMatched = ''
  let wordMatched = ''

  for (let i = 0; i < letters.length; i++) {
    letterMatched = decodeFunc(letters[i].toUpperCase())
    wordMatched += letterMatched
  }

  decodedMessage = wordMatched
  return decodedMessage
}

const getMessage = () => {
  splitWord(message.value.split(''))

  message.value = ''
}
</script>

<template>
  <main>
    <section>
      <div class="decode">
      <form @submit.prevent="getMessage">
        <textarea v-model="message" placeholder="decode the message"></textarea>
        <input
          type="submit"
          value="decode"
        />
      </form>
    </div>
    </section>
    <section>
      <div class="plaintext">
        <p class="textstyle">{{ decodedMessage }}</p>
      </div>
    </section>
  </main>
</template>

<style>
.decode {
  padding: 22px 24px;
  border-radius: 8px;
  background-color: var(--vt-c-bg-soft);
  margin: 1em;
}

.textstyle {
  white-space: pre-line;
}

.plaintext {
  padding: 22px 24px;
  border-radius: 8px;
  background-color: var(--vt-c-bg-soft);
  margin: 1em;
}

@media (min-width: 1024px) {
  main {
    display: flex;
    place-items: center;
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>