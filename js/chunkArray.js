function* chunkArray(array, size) {
  for (let i = 0; i < array.length; i += size) {
    yield array.slice(i, i + size);
  }
}
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//«функция-генератор» function*. Когда такая функция вызвана, она не выполняет свой код. Вместо этого она возвращает специальный объект, так называемый «генератор», для управления её выполнением.

const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("array.slice(1,3)", array.slice(0, 3));
console.log("array.slice(3,6)", array.slice(3, 6));
console.log("array.slice(6,8)", array.slice(6, 8));

function* slices(array, size) {
  for (let i = 0; i < array.length; i += size) {
    yield array.slice(i, i + size);
  }
}

const funcSl = slices([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log("function slices", funcSl.next());
console.log("function slices", funcSl.next());
console.log("function slices", funcSl.next());
// slices(array);

// "функция-генератор" создаёт объект "генератор"
// let generator = generateSequence();

// console.log("generator", generator);

// Основным методом генератора является next(). При вызове он запускает выполнение кода до ближайшей инструкции yield <значение> (значение может отсутствовать, в этом случае оно предполагается равным undefined). По достижении yield выполнение функции приостанавливается, а соответствующее значение - возвращается во внешний код:

// Результатом метода next() всегда является объект с двумя свойствами:

//     value: значение из yield.
//     done: true, если выполнение функции завершено, иначе false.

const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
