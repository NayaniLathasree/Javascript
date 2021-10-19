/* const car = ["BMW","Volvo", "Saab", "Ford", "Fiat", "Audi"]
for(let i=0;i<car.length;i++)
{
    console.log(car[i])
}
console.log("============== Undefined Array=================")
const arr =[];
for(const i=0; i<5; i++){
    if(arr[i] ==undefined){
   console.log('array ',arr[i]);
}
}
console.log("============== Undefined,null Array=================")
let data = [null, undefined, 'string',12,true, , , , ]
for(i=0;i<data.length;i++){
    console.log(data[i]);
}
console.log("==============Number Datatype  Array=================")
let numbers = [1, 2, 3, 12, 13,14]
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i])
}
console.log("==============Boolean Datatype  Array=================")
let Bool= [true, false,true,false]
for(let i=0;i<Bool.length;i++)
{
    console.log(Bool[i])
}
console.log("==============Boolean Datatype  Array=================")
let All= ["latha", 20,null ,true ]
for(let i=0;i<Bool.length;i++)
{
    console.log(Bool[i])
}
console.log("==============empty  Array=================")
let color =[]
for(let i=0;i<color.length;i++){
    console.log(color[i])
}
movies = []
console.log('movies', movies) */
console.log("==============object Array================")
let mobile= [
    {
        brand:'Redmi',
        price:25000,
        color: 'Black',
    },
    {
     brand:'onePlus',
     price:45000,
     color: 'Red',
 },
 {
  brand:'Vivo',
  price:30000,
  color: 'gold',
}]
console.log(mobile[1].brand + '    '+mobile[1]. price);  
for(let i=0;i<mobile.length;i++)
{

    console.log(mobile[i]);
}
