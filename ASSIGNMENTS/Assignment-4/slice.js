/* The slice() method returns selected elements in an array, as a new array.

slice() selects the elements starting at the given start argument, and ends at, but does not include,
 the given end argument.

slice() does not change the original array.
 */

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(`original - ${fruits}`);
const fru = fruits.slice(1, 3);
console.log(`After slice - ${fru}`);
console.log("--------------------2 example------------------------------");
const Numbers = [1,2,3,4,5,7,8];
console.log(`original - ${Numbers}`);
const elements = Numbers.slice(0,4);
console.log(`After slice - ${ elements}`);
console.log("--------------------3 example------------------------------")
const students = ["Lathasree", "Veda", "Divya", "Gagana", "Cheritesh"];
console.log(`original - ${students}`);
const stu = students.slice(1, 3);
console.log(`After slice - ${stu}`);
console.log("--------------------4 example------------------------------")
const numarr = [20,40,50,10];
console.log(`original - ${numarr}`);
const numbers = numarr.slice(0,3);
console.log(`After slice - ${numbers}`);
console.log("--------------------5 example------------------------------")
const numarrays = [20,40,50,10];
console.log(`original - ${numarrays}`);
const num = numarrays.slice(3,4);
console.log(`After slice - ${num}`);