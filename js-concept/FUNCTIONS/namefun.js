function add(n1,n2){
    var sum= n1+n2
    return sum;
}
var result = add(10,20)
console.log(`Result ${result}`)
console.log(`===========Anonymous Function====================`)
var sub = function(n1,n2){
    return n1-n2;
}
var res = sub(20,30);
console.log(`Result ${res}`);
console.log(`===========IIFE Function====================`);
(function(n1,n2){
    var r= n1*n2;
    console.log(`result : ${r}`);
}) (10,20)
console.log(`===========Arrow Function====================`);
//single line- returns stmt will be return/add by js engine
var divide = (n1,n2 )=>n1/n2
var d = divide(20,10)
console.log(`value ${d}`)

// single parameter-parenthesis is optional
var greet = (name)=> {
    return `welcome to the team, ${name}`
}
console.log(greet('lathasree'))

//no parameter - parenthesis is madatory
var printTenNum = ()=>{
    for(var i=0;i<10;i++){
        console.log(i)
    }
} 
printTenNum()

var greeting = name=> `welcome to team, ${name}`
console.log(greeting('Avi'))
console.log(`====================================================`);
function findSquareOfTwoNumbers(n1,n2){
    return function(){
        console.log(`Square of two numbers - ${n1*n2}`);
    }
}
var SquareFunction = findSquareOfTwoNumbers(10,20)
console.log(`Square Function `+SquareFunction);
SquareFunction()
//curring
findSquareOfTwoNumbers(10,20)()  // 2nd way to call function
console.log(`====================================================`);
function findSquareOfTwoNumbers(n1,n2){
    return function(){
        return function(){
        console.log(`Square of two numbers - ${n1*n2}`);
        }
    }
}
var SquareFunction = findSquareOfTwoNumbers(10,20)
findSquareOfTwoNumbers(10,20)()()
// callback function : passing a function as an argument to another function
console.log(`====================================================`);
function test (callback){
    console.log('test function')
    callback()
}
function sample(){
    console.log("Sample Function")
}
test(sample)







