var weight = 45  
var height = 5/ 3.281; 
var bmi = weight/(height*height);  
if (bmi < 18.5)
{
    console.log( "Underweight");
}
else if (bmi >= 18.5 && bmi <= 25)
{
    console.log( "Healthy weight");
}
else if (bmi > 25 && bmi <= 30)
{
    console.log("Overweight");
}
else
{
    console.log("Obese ");
}

var w = 45 , h = 5.4;
var e=h*2*254
var BMI = w/e
BMI < 18.5 ?  console.log( "Underweight") :
BMI >25 && BMI <=30 ?  console.log( "Over weight"):
 BMI>=18.5 && BMI <=25 ?  console.log( "Healthy weight"): 
console.log( "Obese");


