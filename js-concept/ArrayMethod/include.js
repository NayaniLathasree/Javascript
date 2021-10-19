/* What is include method?
include method is an Array method which include the value and search for that value which is present or not 
if present it print true if not false */
let numbers =[10,20,30,40,100]
const hasThirty = numbers.includes(30)
    console.log(`Has  Thirty : ${hasThirty}`);

const hasElement= numbers.includes(5000)
    console.log(`Has  Element : ${hasElement}`);

const hasTwenty = numbers.includes(40,3)
    console.log(`Has  Twenty : ${hasTwenty}`);

console.log("----------------------Splice Method----------------------------")
// in splice method original method will be modify
 let n = [40,50,60,100]
 console.log(`Before Spice Method ${n}`);
 const deletedElements=n.splice(0,1,100)
 console.log(`After Spice Method ${n}`);
 console.log(`Deleted Elements- ${deletedElements}`);
 console.log("----------------------Splice Method-------- splice(start index, delete count,items)--------------------");
 const n1 = [20,40,50,60]
 console.log(`Before Spice Method ${n1}`);
 const deletedRemoved=n.splice(2,2,70,100)
 console.log(`After Spice Method ${n1}`);
 console.log(`Deleted Elements- ${deletedRemoved}`);
console.log("----------------------Slice Method----------------------------")
// in slice method original method will be  not modify
const n2 = [10,20,30]
console.log(`Before Slice Method ${n2}`);
const elements = n2.slice(1,2)
console.log(`After Slice Method ${n2}`);
console.log(`Deleted Elements- ${elements}`);





