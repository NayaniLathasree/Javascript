console.log('//ARRAY METHODS');
// 1.join
console.log('// 1 . join()');
const name1 = ['veda','jyothi']
console.log(name1.join('') );
// map
console.log('// 2 . map()');
const name2 = ['latha','veda','Rashnmi','Hema']
var val2 = name2.map((value)=>value.length)
console.log(val2)
// filter
console.log('// 3. filter()');
const fruits = ['mango','banana','apple']
var val3 = fruits.filter((fruit)=>fruit==='apple')
console.log(`fruits - ${fruits}   - ${val3}`);