let  arr =[1,2,3,4,5]

let arr2=arr.map((e)=>e*5)
console.log(arr2)

Array.prototype.myMap = function(cb){
    let res =[]
    for(let i=0; i<this.length; i++){
       res.push( cb(this[i],i,this))
    }
   return res
}

let arr3=arr.myMap((e)=>e*5)
console.log(arr3)



Array.prototype.maper = function(cb){
    let res =[];
    for(let i = 0 ; i <this.length; i++){
      res.push(cb(this[i],i,this))  
    }
    return res
}

let arr5 =[1,2,3,4,5,6]
let arr6=arr5.maper(e=>e*5)
console.log(arr6)