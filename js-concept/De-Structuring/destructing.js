const person ={
    name1: 'Rani',
    age:20,
    Branch: 'B.Tech',

}
const {name1,age} =person;
console.log(`name1 - ${name1}`);
console.log(`age - ${age}`);
console.log("------------------------------");
const hobbies =['cricket','Singing','Dancing','Travelling']
const [hobby1,hobby2,hobby3] = hobbies   //one way
 //this is another way to destructring:const {hobbies : [hobby1,hobby2]} =hobbies
console.log(`hobby1 ${hobby1}`);
console.log(`hobby2 ${hobby2}`);
console.log(`hobby3 ${hobby3}`);

const personData={
    name1: 'Rani',
    age:20,
    Branch: 'B.Tech',
    address:{
        city:'Banglore',
        Pincode :550062
    }
}
const {address} = personData
console.log('Address -',address);
/* one way but if access like below we can't print name along 
with address bcoz we are accessing personData.address */
 const {city,pincode} = personData.address
console.log('city - ',city)
console.log('pincode -',pincode); 
console.log('-------------------------------');

const personData1={
    pname1: 'Rani',
    page:20,
    pBranch: 'B.Tech',
    paddress:{
        pcity:'Banglore',
        pPincode :550062
    }
}
//second way here we access with name and address
const {pname1, paddress:{pcity,ppincode}} =personData1;
console.log('person details -',personData1);



