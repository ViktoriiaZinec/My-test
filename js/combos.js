function combos(num) {
  const result = [];

  subCombos(num, [], 1, result);
  reversCombos(num, [], num, result);

  const uniqueArray = uniqueArr(result);

  return uniqueArray;
}

function subCombos(number, array, start, result) {
  if (number === 0) {
    result.push([...array]);
  } else if (number > 0) {
    for (let i = start; i <= number; i++) {
      array.push(i);

      subCombos(number - i, array, i, result);
      array.pop();
    }
  }
}

function reversCombos(number, array, end, result) {
  if (number === 0) {
    result.push([...array]);
  } else if (number > 0) {
    for (let i = end; i >= 1; i--) {
      array.push(i);
      reversCombos(number - i, array, i, result);
      array.pop();
    }
  }
}

function uniqueArr(array) {
  const uniqeArr = [];
  const set = new Set();

  for (const subarray of array) {
    const subArrayStr = JSON.stringify(subarray);

    if (!set.has(subArrayStr)) {
      uniqeArr.push(subarray);
      set.add(subArrayStr);
    }
  }
  return uniqeArr;
}

console.log("combos(3)", combos(3));
console.log("combos(10)", combos(10));
