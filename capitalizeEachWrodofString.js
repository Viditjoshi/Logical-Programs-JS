const CapitalizeFirstLatter = (str) => {
  return str
    .split(" ")
    .map((value) => value[0].toUpperCase() + value.slice(1))
    .join(" ");
};
console.log(CapitalizeFirstLatter("vidit joshi"));
