const object1 = {};
object1.property1 = 42;
console.log(object1.hasOwnProperty('property1'));
console.log("---------------------------------------------");
console.log(object1.hasOwnProperty('toString'))
console.log("------------------------------------------------");
console.log(object1.hasOwnProperty('hasOwnProperty'));
console.log("-------------------------------------------------");
let fruits = ['Apple', 'Banana','Watermelon', 'Orange']; 
console.log(fruits.hasOwnProperty(3));
console.log(fruits.hasOwnProperty(4) );
console.log("---------------------------------------------");
let foo = { bar: 'Here be dragons' };
 console.log(Object.hasOwn(foo, "bar"));

