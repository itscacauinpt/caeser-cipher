const alpha = Array.from(Array(26)).map((_, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

export const decodeFunc = (letter) => {
  for (let i = 0; i < alphabet.length; i++) {
    if (letter == ' ') return ' '

    else if (alphabet[i] == letter) {
      if (i + 3 >= alphabet.length) {
        return alphabet[i + 3 - alphabet.length]
      }

      return alphabet[i + 3]
    }
  }
}
