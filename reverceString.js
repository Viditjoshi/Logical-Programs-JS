// write a fucntion to reverse the string

function reverce(str) {
  return str.replace(/ /g, "").split("").reverse().join("");
}

console.log(reverce("ihsoj tidiv"));
