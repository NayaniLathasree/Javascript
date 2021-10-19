


let name ='latha'
let namecopy = name;

name ='Divya'
console.log(`name ${name}`);
console.log(`nameCopy - ${namecopy}`)
// IMMUTABLE
let car ={
    color:'Red',
    tyres:4
}
let copycar= car
copycar.car='blue'
console.log(car.color);
console.log(copycar);

//Making objects behave like immutable
const person ={
    name:'latha',
    age:30
}
const personcopy = Object.assign({},car)
console.log(person.name);
console.log(personcopy.name);
console.log("-----------------------------------");
personcopy.name = 'Veda'
console.log(person.name);
console.log(personcopy.name);
//Example for Array Immutables
let numbers = [100,200,300,400,500]
let numbercopy = numbers
console.log(`Numbers - ${numbers}`);
console.log(`Numbers Copy ${numbercopy}`);