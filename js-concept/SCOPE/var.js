var x= 10; //global scope
console.log(x);

function test(){
    var x=20  //local or function scope
    console.log(x);
}
for(var i=0;i<5;i++){
    console.log(i);  //block scope
}
console.log("-------------------");
console.log(i);
//reassigment
var z=5
z=10;
console.log(z);
//reDeclaration
var y=20
var y=30
console.log(y);


/* Problems with var keyword
1.hoisting (i.e, can access variables before declaration)
2.reassigning  are allowed 
3. redeclaration are allowed 
4.block scope not supported.
Note: To overcome these pblms let and const keywords was introduced in ES6.
*/

//let keyword
console.log("---------Let keyword----------");
let a=10
console.log(`Global Access`,a);
function LetVariables(){
    console.log(`Inside Function`,a);
}
LetVariables()
for(let j=0;j<=3;j++ ){
  console.log(j);
}
// console.log(j);  if i access outside function it show error : a is not define

/*  ReferenceError: 
console.log(b);Cannot access 'b' before initialization
let b=10;    */

/* If I declare like below code it show errorr:Identifier 'c' has already been declared
let c=20
let c=40
console.log(c);
 */
//Reassigning is allowed.
let d=100
console.log(d);
 
d=20
console.log(d);
console.log("-----------------const Keyword----------------------");


// const keyword

/* p is not defined
 console.log(p)
p=30; */
/*  for(const k=0;k<3;k++) // TypeError: Assignment to constant variable.
 {
     console.log(k);             i.e, k=0, k=1,k=2,k=3 (RE-Assignment not allowed in const)

 }
 console.log(k); */
if(10>6){
    const name= 'Ajay';
    console.log(`Name- ${ name}`); 
}

function constfunction(){
    const r=90;
    console.log(`Function Scope- `,r);
}
constfunction()
/* console.log(`outside Scope- `,r); 
 ReferenceError: r is not define */
 
 /* SyntaxError: 
 const n=490
 const n=670    Identifier 'n' has already been declared
 console.log(n); */

/*  
 const m=850
 m=340      TypeError: Assignment to constant variable.
 console.log(m); */


const fruits =['Apple','Banana','Mango','Grapes','Dragon']
/* fruits =['Apple','Banana','Mango','Grapes','Dragon']  ->this is not supported as we are using assigninment  
and trying to reassign the variable */
fruits.push('KIWI','Orange')
console.log(fruits);

