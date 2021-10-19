var todaysdate = new Date()
console.log(`Today's Date ${todaysdate}`);


var futureDate = new Date(2022 ,1 , 2, 123, 30, 45)
console.log(`Future Date: ${futureDate}`)

var dateofBirth = new Date(`march 13 1999`)
console.log(`Date Of Birth - ${dateofBirth}`)

var findDateusingmillisecond = new Date(86400000)
console.log(`Find Date Using Millisecond - ${findDateusingmillisecond}`)
console.log("--------------Date Methods-----------------------")

console.log(`Full Year - ${todaysdate.getFullYear()}`)
console.log(`Month- ${todaysdate.getMonth()}`)
console.log(`Date - ${todaysdate.getDate()}`)
console.log(`Day - ${todaysdate.getDay()}`)
console.log(`Date Time - ${Date.now()}`)

var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var formatDate = new Date('dec, 10,2021'); 
var month = formatDate.getMonth()
console.log(`${months[month]}  ${formatDate.getDate()}  ${formatDate.getFullYear()}`)
console.log("--------------Math Object-----------------------")
console.log(Math.round(1.8))
console.log(Math.abs(-6))
console.log(Math.pow(5,6))
console.log(Math.min(1,5))
console.log(Math.max(5,6,90))
console.log(Math.ceil(12.5))
console.log(Math.floor(12.2))
console.log(Math.random());
console.log("--------------Random number from 1 t0 100-----------------------")
console.log(Math.floor(Math.random()*100));

var a =[1,2,34,56,78,100]
console.log(Math.max(Math.max(...a)))










 





