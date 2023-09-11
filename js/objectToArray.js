const object = {
  name: "developer",
  age: 5,
  skills: { html: 4, css: 5, js: 5 },
};

function objectToArray(obj) {
  const arr = Object.entries(obj);

  for (const el of arr) {
    if (el[1] instanceof Object) {
      el[1] = objectToArray(el[1]);
    }
  }
  return arr;
}

console.log(objectToArray(object));
