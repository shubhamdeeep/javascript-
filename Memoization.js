// Memoization

function memoizationAdd() {
  let cache = {};

  return function (a, b) {
    const key = `${a},${b}`;

    if (cache[key]) {
      console.log("from the cache");
      return cache[key];
    } else {
      let result = a + b;
      console.log("from the calculation");
      cache[key] = result;
      return result;
    }
  };
}

// STEP 1: get returned function
const add = memoizationAdd();

// STEP 2: call it
console.log(add(1, 2));
console.log(add(1, 2));
