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

  const promise = fnsAndParams.map(
    (el) =>
      new Promise((resolve) =>
        el[0](...el[1], (value) => {
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
