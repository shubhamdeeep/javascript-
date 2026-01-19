function showDetail(roll){
    console.log(`student ${this.name}  has roll number ${roll}`)
}

const rollNo = {
name:"shubham"    
}

showDetail.apply(rollNo,[21])

Function.prototype.MyApply = function(obj={}, ...args ){

    if(!Array.isArray(...args)){
        throw new Error ("this is not Error")
    }

    obj.fn = this
    let result = obj.fn(...args)
    delete obj.fn
    return result
}

showDetail.MyApply(rollNo,[21])



