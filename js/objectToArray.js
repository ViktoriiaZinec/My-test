// const object = {
//   name: "developer",
//   age: 5,
//   skills: { html: 4, css: 5, js: 5 },
// };

// function objectToArray(obj) {
//   const arr = Object.entries(obj);

//   for (const el of arr) {
//     if (el[1] instanceof Object) {
//       el[1] = objectToArray(el[1]);
//     }
//   }
//   return arr;
// }

// console.log(objectToArray(object));

const object = {
  name: "developer",
  age: 5,
  skills: { html: 4, css: 5, js: 5 },
};

const objectToArray = (obj) => {
  const arr = Object.entries(obj);

  for (const el of arr) {
    // if (typeof el[1] === "object") {
    if (el[1] instanceof Object) {
      el[1] = objectToArray(el[1]);
    }
  }
  return arr;
};

console.log(objectToArray(object));

const myObject = {
  name: "developer",
  age: 5,
  skills: { html: 4, css: 5, js: 5 },
};

// Присвоєння змінній null, не об'єкту
// myObject = null; // Це призведе до помилки, оскільки myObject вже було об'явлено константою.

// Але якщо ми присвоїмо null іншій змінній, це може призвести до втрати посилання на об'єкт.
let anotherObject = myObject;
anotherObject = null;
delete myObject.age;
console.log("myObject", myObject);
console.log("anotherObject", anotherObject);
