

// let arr =[1,3,4,5,6,7]


// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc;
//   let startIndex;

//   // Step 1: Handle initial value
//   if (initialValue ) {
//     acc = initialValue;
//     startIndex = 0;
//   } else {
//     acc = this[0];
//     startIndex = 1;
//   }

//   // Step 2: Loop through array
//   for (let i = startIndex; i < this.length; i++) {
//     acc = cb(acc, this[i], i, this);
//   }

//   // Step 3: Return final accumulator
//   return acc;
// };


// let res = arr.myReduce((acc,value,index,array)=>{
//     acc =acc +value
//     return acc
// },1)
// console.log(res)






// Array.prototype.myReduce = function (cb, initialValue){
//     let acc;
//     let startIndex;
    
//     //step 1 set the acc

//     if (initialValue !== undefined){
//         acc = initialValue
//         startIndex =0
//     }
//     else{
//         acc = this[0]
//     }

// }





 Array.prototype.myReduce = function (cb, indexValue) {
   let acc;
   let startIndex;

   // Step 1: Handle initial value
   if (indexValue !== undefined) {
     acc = indexValue;
     startIndex = 0;
   } else {
     acc = this[0];
     startIndex = 1;
   }

   // Step 2: Loop through array
   for (let i = startIndex; i < this.length; i++) {
     acc = cb(acc, this[i], i, this);
   }

   // Step 3: Return final accumulator
   return acc;
 };