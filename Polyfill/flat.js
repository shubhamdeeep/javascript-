let arr = [1,2,3,[4,5],[6,7,8,[1,[2,3,[4,5]]]]]
console.log(arr)

let result =[];
function flatten (arr,depth){
    // console.log(arr,depth)
    for(let element of  arr){
        if(Array.isArray(element) && depth>0){
            flatten(element, depth-1)
        }
        else{
            result.push(element)
        }
    }
    return result

}


let newArr = flatten(arr,4)

console.log(newArr)


// Array.prototype.MyFlat = function (){
// console.log(this)
// for(let element of  this){
//     console.log(element)
//     if(Array.isArray(element)){
//      MyFlat(element)
//     }
//     else{
//      console.log(element)
//     }

// }


// }

// console.log(arr.MyFlat())

// let obj ={
// 'a': 1,
// 'c': 2

// }

const obj = {
  name: "Shubham",
  address: {
    city: "Delhi",
    pin: {
      code: 110001
    }
  },
  age: 25
};

// console.log(objFlatten(obj));

// let res = {}
// function  objflatten(obj,parentKey=""){
   
//     for( let key in obj){
//         console.log(key)
//         let value = obj[key]
//         // let Parent = key ? key 
//        const newKey = parentKey ? `${parentKey}.${key}` : key;

//         if(typeof value == "object" ){
//          objflatten(value,parentKey)
//         }
//         else{
//             res[newKey] = value
//         }
//     }
//     return res

// }

// console.log(objflatten(obj))

function objFlatten(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const value = obj[key];
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      objFlatten(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}
console.log(objFlatten(obj));
