const person ={
    pname:'Adhi',
    age:40

}
const personCopy = {...person}
console.log(personCopy);
console.log('.....................');
const numbers =[10,20,30,50]
const numberCopy = {...numbers}
console.log(numberCopy);
console.log('...........................');
const person1 = {
    age:40,
    pname:'guru'
}
const address ={
    city:'Banglore',
    pincode:550062
}
const personAddress = {...person,...address}
console.log(personAddress);
 const person2={
     color:'whitel',
     languages: ['Kannada','Hindi','Telugu']
 }
//to get age fron person1 and color from person2
//when we've age in both objects it's consider latest 
 const {age,color}={...person1,...person2}
 console.log(age+'   '+color);
