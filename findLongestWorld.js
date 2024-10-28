// const FindWorld = (str) => {
//   let spratedWorld = str.split(" ");
//   let longest = " ";
//   for (let world of spratedWorld) {
//     if (world.length >= longest.length) {
//       longest = world;
//     }
//   }
//   return longest;
// };
// console.log(FindWorld("Vidit Joshi"));

function findLongestWords(str) {
  let words = str.split(" ");
  let maxLength = Math.max(...words.map((word) => word.length));
  let longestwords = words
    .filter((word) => word.length === maxLength)
    .join(" "); // Return all words with max length

  let wordsFoundSimulerLength = longestwords.split(" ").length;
  return {
    words: longestwords.split(" "),
    maxLength,
    SimulerLength: wordsFoundSimulerLength,
  };
}

console.log(findLongestWords("cat foo zoo tooo fhha"));
