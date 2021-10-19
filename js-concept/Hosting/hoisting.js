console.log(x);
var x;
function hoist(){
  
    console.log(y)
    var y=20
}
hoist()
console.log("---------------------")
var a=10
function test(){
    console.log(a)
    var a=20
}
test();

console.log("---------------------")
gettName()
function gettName(){
 console.log("Lathasree")
}
console.log("------------Uncaught TypeError: wish is not a function------------")
wish()
var wish =()=>{
    console.log("wish you the same")
} 
getID()
var getID =()=>{
    console.log("12")
}

