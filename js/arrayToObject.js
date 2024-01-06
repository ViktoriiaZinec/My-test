var arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];

// function arrayToObject(arr) {
//   const obj = {};

//   for (let index = 0; index < arr.length; index++) {
//     const item = arr[index];

//     if (!Array.isArray(item[1])) {
//       obj[item[0]] = item[1];
//     } else {
//       obj[item[0]] = arrayToObject(item[1]);
//     }
//   }
//   return obj;
// }

// console.log("arrayToObject", arrayToObject(arr));

var arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];

// function arrayToObject(array) {
//   const object = {};

// for (let i = 0; i < array.length; i++) {
//   const item = array[i];
//   console.log("first", item);

//   if (!Array.isArray(item[1])) {
//     object[item[0]] = item[1];
//   } else {
//     object[item[0]] = arrayToObject(item[1]);
//   }
// }
//   for (const [key, value] of array) {
//     console.log("key", key);
//     if (!Array.isArray(value)) {
//       object[key] = value;

//     } else {
//       object[key] = arrayToObject(value);
//     }
//   }
//   return object;
// }
const arrayToObject = (array) => {
  const obj = {};

  for (const [key, value] of array) {
    if (!Array.isArray(value)) {
      obj[key] = value;
    } else {
      obj[key] = arrayToObject(value);
    }
  }
  return obj;
};

console.log("arrayToObject", arrayToObject(arr));
