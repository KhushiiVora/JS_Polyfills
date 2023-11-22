const arr = [1, 2, 3, 4];

/* MY FOREACH */
Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") {
    throw Error(`${callback} is not a function`);
  }
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((ele, index) => console.log(ele + index));
