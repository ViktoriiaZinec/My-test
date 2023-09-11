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
