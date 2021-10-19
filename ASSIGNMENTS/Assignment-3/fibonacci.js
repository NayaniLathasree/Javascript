function  fibonacci(num){
    var a=0, b=1;
    console.log(`  ${a}`);
     for(var i=2;i<=num;i++){
         var temp = a+b;
         a=b
         b=temp;
         console.log(temp);
     }
     return temp
}
fibonacci(10);
console.log("-----------Arrow Function---------------");
var fibo=num=>{
    var a=0;
    console.log(`  ${a}`);
     for(var i=1;i<=num;i++){
         var temp = a+b;
         a=b
         b=temp;
         console.log(temp);
     }
     return temp;
}

fibonacci(7);
console.log("-----------Anonymous Function---------------");
var fibono= function(num){
    var a=0, b=1;
    console.log(`  ${a}`);
     for(var i=2;i<=num;i++){
         var temp = a+b;
         a=b
         b=temp;
         console.log(temp);
     }
     return temp
}
fibono(6);
console.log("-----------IIFE Function---------------");
(function(num){
    var a=0, b=1;
    console.log(`  ${a}`);
     for(var i=2;i<=num;i++){
         var temp = a+b;
         a=b
         b=temp;
         console.log(temp);
     }
     return temp
})(8)



