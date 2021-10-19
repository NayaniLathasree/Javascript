const numbs = [100,200,300]
const filterNumbers = numbs.filter(function(val,index){
    if(val>150){
        return true
    }else {
        return false
    }
})
console.log(`filter Numbers - ${filterNumbers}`);
console.log("--------------------------------------------------");
const filterNumberUsingArrow = numbs.filter((val,index)=>{
    return val>150
})
console.log(`filter Number Using Arrow - ${filterNumberUsingArrow }`);

console.log("--------------------------------------------------");
const filterNumberInSingle = numbs.filter(val=>val>150)
console.log(`filter Number  In Single - ${filterNumberInSingle}`);