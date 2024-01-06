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
//  innerAdd.toString = function () {
//    return sum.toString();
//  };
console.log(add(1)(2));
console.log(Number(add(1)(2)(5)));
console.log(Number(add(1)(2)(-3)(4)));
console.log(Number(add(1)(2)(3)(4)(-5)));

// Бесконечное каррирование в JavaScript
// https://medium.com/nuances-of-programming/%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B5-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-9e46cf4abff9
//
// арність 2

const obj = {
  name: "Vasya",
  age: 10,
  toString: () => "5",
};
console.log("obj", Number(obj));
console.log("obj", obj.toString());
