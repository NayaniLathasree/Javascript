var numbers =[10,30,40]
numbers.forEach(function(value,index){
    console.log(`Value at ${index} - ${value}`);
})
console.log("---------------------------------")
numbers.forEach((value,index)=>{
    console.log(`Value at ${index} - ${value}`);
})
console.log("---------------------------------")
numbers.forEach((value,index)=>
    console.log(`Value at ${index} - ${value}`)
)
console.log("---------------------------------")
var animals =['Tiger','Lion','Elephant','Panda','Cat']
animals.forEach((value,index)=>console.log(`Value at index ${index} -${value}`))
console.log("---------------------------------")
var books =[{
    title:'java',
    price:1200
},
{
    title:'Python',
    price:1000
},
{
    title:'javascript',
    price:1500
}]
books.forEach(value=>
{if(value.price>1200)
console.log(value)})
