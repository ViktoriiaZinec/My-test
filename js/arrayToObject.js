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

function arrayToObject(arr) {
  const obj = {};

  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];

    if (!Array.isArray(item[1])) {
      obj[item[0]] = item[1];
    } else {
      obj[item[0]] = arrayToObject(item[1]);
    }
  }
  return obj;
}

console.log("arrayToObject", arrayToObject(arr));
