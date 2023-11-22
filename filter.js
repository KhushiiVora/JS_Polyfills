const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 14, 23, 55, 21];

/* MY FILTER */
Array.prototype.myFilter = function (callback) {
  const returnArray = [];
  if (typeof callback !== "function") {
    throw Error(`${callback} is not a function`);
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) returnArray.push(this[i]);
    else continue;
  }
  return returnArray;
};

const evenArray = arr.myFilter((ele) => ele % 2 === 0);
console.log(evenArray);
