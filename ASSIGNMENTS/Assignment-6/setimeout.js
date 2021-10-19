const greet= setTimeout(function(){
        console.log(`Hello!!`)
    },2000)
    console.log('This message shown first')
/* 
 function myStopFunction() {
    clearTimeout(greet);
  }
  myStopFunction() */
 /* -------------------------------------------------------- */
/* 
function myFunction() {
const  myVar = setTimeout(function(){ alert("Hello") });
}
setTimeout(myFunction,0) */
/* ------------------------------------------------------------ */

function myFunction(){
    setTimeout(function(){
    console.log(`I am Executing After 3sec `);
  },3000) 
}
myFunction()
console.log('---------------------------------------------');
  let intervalTimmer =   setInterval(() => {
        console.log('Iam Executing Set Interval');
    }, 1000);
function myInteralstopFunction() {
    clearInterval(intervalTimmer);
  }
  myInteralstopFunction() 
