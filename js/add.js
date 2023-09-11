function add(x) {
  let sum = x;

  function innerAdd(y) {
    sum += y;
    return innerAdd;
  }

  innerAdd.valueOf = function () {
    return sum;
  };

  return innerAdd;
}

console.log(Number(add(1)(2)));
console.log(Number(add(1)(2)(5)));
console.log(Number(add(1)(2)(-3)(4)));
console.log(Number(add(1)(2)(3)(4)(-5)));
