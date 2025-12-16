// Given an array of integers, filter out the even numbers and return a new array containing the square of each even number.


//  Solution 1: Using filter() and map() (Functional Approach)

let arr = [1, 2, 3, 4, 5];

let result = arr
  .filter(value => value % 2 === 0)
  .map(value => value * value);

console.log(result); // [4, 16]


// Solution 2: Using for loop (Imperative Approach)

// let arr = [1, 2, 3, 4, 5];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     result.push(arr[i] * arr[i]);
//   }
// }

// console.log(result); // [4, 16]
