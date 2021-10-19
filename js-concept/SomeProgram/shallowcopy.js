const person ={
    name:'Ajay',
    age:40,
    hobbies: ['Ciricket','Kabaddi'],
    address:{
        city:'Banglore',
        pincode: 560062
    }
}
const p =Object.assign({},person)
console.log(person.address.city = 'Hyderabad');
console.log('here we are chaning persons adrress but it changing "p" address also ')
console.log(person.address.city = 'Hyderabad');;
console.log("-------------------------------------------");
person.name= 'Abhi'
console.log(person.name);
console.log(p.name);