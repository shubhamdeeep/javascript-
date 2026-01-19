
Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("this is not callable");
  }

  obj.fn = this;
  const result = obj.fn(...args);
  delete obj.fn;

  return result; // ⭐ IMPORTANT
};

function add(a, b) {
  return a + b;
}

let res = add.call(null, 2, 3);
console.log(res); // 5



Function.prototype.myApply = function( obj={}, ...args){

if(typeof this !== "function"){
throw new Error ("this is not function")
}

if(!Array.isArray(args)){

throw new Error ("plz pass argument  in array formate")
}

obj.fn = this
obj.fn(...args)
// const result = obj.fn(...args);
//   delete obj.fn;

//   return result;
}


function sum(a, b, c) {
  return a + b + c;
}

const data = { x: 10 };

console.log(sum.myApply(data, [1, 2, 3]));
