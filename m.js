


function memoizationAdd(){
    let caches={}
    return function (a,b){
            let key = `${a}-${b}`

        if(caches[key] != undefined ){
            console.log("we are using caches")
            return caches[key]
        }
        else{
            let value = a+b
            console.log("we are calculation ")
            caches[key]=value;
            return value

        }
    }
}

let add =  memoizationAdd()
console.log(add(1,3))
console.log(add(1,3))