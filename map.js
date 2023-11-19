const arr = [1, 2, 3, 4, 5];

/* DEFAULT MAP */
const arr2 = arr.map((item) => {
  return item * 10;
});
console.log(arr2, arr);

/* MY MAP */
Array.prototype.myMap = function (callback) {
  const returnArray = [];
  if (typeof callback !== "function")
    throw new Error(`${callback} is not a function`);
  for (let i = 0; i < this.length; i++) {
    returnArray.push(callback(this[i], i, this));
  }
  return returnArray;
};

const myArr = arr.myMap((item) => {
  return item * 10;
});
console.log(myArr);
