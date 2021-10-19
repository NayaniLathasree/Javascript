const fruits = ['Apple','Orange','Kiwi','Grapes']
const filterLength = fruits.filter(val=>val.length>5)
console.log(` filterLength -${filterLength }`);

console.log("---------------------------------------------------");
const filterFruits = fruits.filter(val=>val.includes('e'))
console.log(`filterFruits ${filterFruits}`);
console.log("---------------------------------------------------");
const filterToUpper = fruits.map(val=>val.toUpperCase())
console.log(` filter To Upper case -${ filterToUpper }`);