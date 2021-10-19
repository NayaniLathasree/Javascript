 /* The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
By default, the sort() method sorts the values as strings in alphabetical and ascending order. 
sort() overwrites the original array.*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sortFruits= fruits.sort();
console.log('Sorted fruits - ',sortFruits);
console.log("-------------------2---------------------");

const months = ['March', 'Jan', 'Feb', 'Dec'];
const montSort=months.sort();
console.log('Sorting Months - ',months);
console.log("--------------------3---------------------");

const array1 = [1, 30, 4, 21, 100000];
const arraySort=array1.sort();
console.log('Sorting Array',arraySort);
console.log("--------------------4---------------------");

var items = [
    { name: 'Banu', value: 21 },
    { name: 'Ragavi', value: 37 },
    { name: 'Anu', value: 45 },
    { name: 'Thomos', value: -12 },
  ];
  const objectSort=   items.sort((a, b) =>{ a.value - b.value;});
  console.log('Sorting Object Array', objectSort);
  console.log("---------------------------------------------");
  var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
