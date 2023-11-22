const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* MY REDUCE */
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  if (typeof callback !== "function") {
    throw Error(`${callback} is not a function`);
  }
  for (let i = 0; i < this.length; i++) {
    if (accumulator === undefined) {
      accumulator = this[i];
      continue;
    }
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

const sum = nums.myReduce((total, ele) => {
  return ele + total;
});
console.log(sum);
