const arr1 = [0, 1, 2, [3, 4]]; //it creates sub array inside array  
console.log(arr1.flat());  // ----singlearray
console.log("----------------2---------------------");

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
console.log("----------------3-------------------");
let arr = [1, 2, 3, , 4];
let newArr = arr.flat();
console.log('falt removes white space- ',newArr);
console.log("--------------------4-------------------------");
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));