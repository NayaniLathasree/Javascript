// what is hoisting in js?
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// A variable can used before it has been declared
// In functions, only Named function can used before it has been declared.

var x;
console.log(x); // prints undefined bcoz we aren't declared value
console.log("------------------------------------"); 
console.log(y);  // prints undefined bcoz we are printing before declaration;
var y =5;  // here only variable moves to up not declaration.
