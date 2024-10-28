const DuplicateRemove = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.puch = arr[i];
    }
  }
  return unique;
};
console.log(DuplicateRemove([1, 2, 3, 4, 5, 6, 7]));
