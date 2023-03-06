<script setup>
import { ref } from 'vue';
import { encodeFunc } from '../utils/constants'

let message = ref('')
let encodedMessage = ref('...')

const splitWord = (letters, useFunction) => {
  let letterMatched = ''
  let wordMatched = ''

  for (let i = 0; i < letters.length; i++) {
    letterMatched = useFunction(letters[i].toUpperCase())
    wordMatched += letterMatched
  }

  encodedMessage = wordMatched
  return encodedMessage
}

const getMessage = () => {
  splitWord(message.value.split(''), encodeFunc)

  message.value = ''
}
</script>

<template>
  <main>
    <section>
      <div class="encode">
      <form @submit.prevent="getMessage">
        <textarea v-model="message" placeholder="digit your message"></textarea>
        <input
          type="submit"
          value="encode"
        />
      </form>
    </div>
    </section>
    <section>
      <div class="plaintext">
        <p class="textstyle">{{ encodedMessage }}</p>
      </div>
    </section>
  </main>
</template>

<style>
.encode {
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

