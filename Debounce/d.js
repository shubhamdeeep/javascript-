function  debounce(func, delay){
   let timeId;
    return function (...args){
        clearTimeout(timeId)
        timeId =setTimeout(()=>{
         func.apply(this,args)
        },delay)
    }
}