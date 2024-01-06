const f1 = (cb) => {
  cb(1);
};
const f2 = (a, cb) => {
  cb(a);
};
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

async function bulkRun(fnsAndParams) {
  const result = [];

  const cb = (arr) => result.push(arr);

  console.log("result", result);
  const promise = fnsAndParams.map(
    (el) =>
      new Promise((resolve) =>
        el[0](...el[1], (value) => {
          console.log("el[1]", el[1]);
          console.log("el[0]", el[0]);
          // console.log("value", value);
          cb(value);
          resolve();
        })
      )
  );
  return await Promise.all(promise).then(() => result);
}

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);

// // Цей код представляє собою виконання асинхронних функцій f1, f2 і f3 в пакетному режимі за допомогою функції bulkRun. Давайте розглянемо його крок за кроком:

// //     Функція f1 приймає один аргумент cb і викликає його з аргументом 1.

// //     Функція f2 приймає два аргументи: a і cb. Вона викликає функцію cb з аргументом a.

// //     Функція f3 приймає два аргументи: a і b, а також функцію зворотного виклику cb. Вона встановлює таймер на 1000 мілісекунд (1 секунда) і після закінчення таймеру викликає функцію cb з масивом [a, b].

// // Функція bulkRun приймає масив fnsAndParams, де кожен елемент масиву представляє пару: функцію і масив аргументів для цієї функції. Вона виконує ці функції паралельно і збирає результати їх виконання у масив result. Кожна функція в fnsAndParams викликається асинхронно, і функція bulkRun повертає обіцянку, яка виконується після завершення всіх асинхронних викликів.

// // Ось як цей код викликається:

// // javascript

// // bulkRun([
// //   [f1, []],       // Виклик f1 без аргументів (1 передається всередину f1).
// //   [f2, [2]],      // Виклик f2 з аргументом 2.
// //   [f3, [3, 4]],   // Виклик f3 з аргументами 3 і 4 (асинхронний виклик через setTimeout).
// // ]).then(console.log); // Після виконання всіх функцій виводиться результат у вигляді масиву.

// // В результаті ви отримаєте масив [1, 2, [3, 4]], який представляє результати виконання всіх трьох функцій у порядку їх виклику.

// const f4 = (a, cb) => {
//   cb(a);
// };
// function myPromise(cb, value) {
//   return new Promise((resolve, reject) => {
//     cb(value);
//     resolve();
//   });
// }

// // myPromise(f4, 2).then((res) => {
// //   console.log("res", res);
// // });

// myPromise((f4, value) => {
//   console.log("Value:", value);
// }, 2);

// const f1 = (cb) => {
//   cb(1);
// };

// const f2 = (a, b, cb) => {
//   cb(a + b);
// };

// const f3 = (a, b, cb) => {
//   setTimeout(() => cb([a, b]), 1000);
// };

// async function bulkRun(fnsAndParams) {
//   const res = [];

//   const addFnsAndParamsToRes = (el) => {
//     res.push(el);
//   };

//   const promise = fnsAndParams.map((el) => {
//     const resolve = (resolve) => {
//       const cb = (value) => {
//         addFnsAndParamsToRes(value);
//         resolve();
//       };
//       // const res = el[0](...el[1], rrr1);
//       f1(cb);
//       f2(2, 90, cb);
//       f3(3, 4, cb);

//       // return res;
//     };
//     const p = new Promise(resolve);
//     return p;
//   });
//   // const promise = fnsAndParams.map(
//   //   (el) =>
//   //     new Promise((resolve) =>
//   //       el[0](...el[1], (value) => {
//   //         console.log("value", value);
//   //         addFnsAndParamsToRes(value);
//   //         resolve();
//   //       })
//   //     )
//   // );
//   return await Promise.all(promise).then(() => res);
// }

// bulkRun([
//   [f1, []],
//   [f2, [2, 90]],
//   [f3, [3, 4]],
// ]).then(console.log);
