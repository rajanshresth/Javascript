// Implement a function to find the longest word in a sentence.

function longestWord(sentence) {
  let longest = '';
  let current = '';
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      if (current.length > longest.length) {
        longest = current;
      }
      current = '';
    } else {
      current += sentence[i];
    }
  }
  return longest;
   
}

console.log(longestWord('I am a coding god'));