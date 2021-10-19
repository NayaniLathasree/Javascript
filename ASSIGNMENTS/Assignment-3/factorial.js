function Factorial(num){
  var num, fact=1
  for(var i=1;i<=num;i++)
  {
      fact *=i;
  }
  return fact;
}
console.log(`Factorial of : ${Factorial(3)}`);
console.log("------------------Arrow Function--------------------------------");
var factnum = num=>{
    var num, fact=1
    for(var i=1;i<=num;i++)
    {
        fact *=i;
    }
    return fact;
  }
  console.log(`Factorial of : ${factnum(4)}`);
  console.log("------------------Anonymous Function--------------------------------");
var factnumber =function(num) {
    var num, fact=1
    for(var i=1;i<=num;i++)
    {
        fact *=i;
    }
    return fact;
  }
  console.log(`Factorial of : ${factnumber(5)}`);
  console.log("------------------IIFE Function--------------------------------");
  var factorialnumber=(function(num) {
      
      var num=5, fact=1
      for(var i=1;i<=num;i++)
      {
          fact *=i;
      }
    console.log(`Factorial of : ${fact}`);
    })(6)
  