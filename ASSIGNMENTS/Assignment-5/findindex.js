const numbers = [23,34,56,12,34];
const numberindex = numbers.findIndex(numbers => numbers === 12);
console.log('index number -',numberindex );
console.log('Equal To 12 - ',numbers[numberindex]);
console.log("-----------------------------------------------------");
const fruits = ["apple", "banana", "Mango", "Grapes", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "grapefruit");
console.log('index number -',index); 
console.log('equal to grapefruit -',fruits[index]); 
console.log("-----------------------3------------------------------");
const students = [
    { name: "Rani", age:18  },
    { name: "Ragu", age: 25 },
    { name: "Vani", age: 23 }
  ];
  const objectindex = students.findIndex(students=> students.name ==='Vani')
  console.log('index number -' ,objectindex);
  console.log('equal to Vani -',students[objectindex ]);
console.log("-----------------------4------------------------------");

  const array1 = [1,2,3,"grapefruit", 4,"Grapes"];
const indexarray1 = array1.findIndex(array1 => array1 === "grapefruit");
console.log('index number -',indexarray1 ); 
console.log('equal to grapefruit -',array1[indexarray1 ]);
console.log("-----------------------5-----------------------------");

const arr = [1,2,3,"grapefruit", 5,6 ,4,"Grapes"];
const indexarr1 = arr.findIndex(arr1 => arr1 === 4);
console.log('index number -',indexarr1 ); 
console.log('equal to 4 -',arr[indexarr1 ]);