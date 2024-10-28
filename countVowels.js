// function countVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("Viditjoshi"));

const countVowels = (str) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (vowels.includes(char)) count++;
    });
  return count;
};
console.log(countVowels("Viditjoshi"));
