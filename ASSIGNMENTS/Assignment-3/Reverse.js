
console.log("----------------Named Function---------------");
function reverseString(str){
    var newString ="";
    for(var i=str.length-1; i>=0; i-- ){
        newString += str[i];

    }
    return newString;
}
console.log('Before Reverse Sring')
console.log('Hello');
console.log('After Reverse Sring')
console.log(reverseString("Hello"))

console.log("----------------Arrow Function---------------");

var Reverse= (str)=>{
    var newString ="";
    for(var i=str.length-1; i>=0; i-- ){
        newString += str[i];

    }
    return newString;
}
console.log('Before Reverse Sring')
console.log('Hello');
console.log('After Reverse Sring')
console.log(Reverse("Hello"))

console.log("----------------Anonymous Function---------------");

var RevStr= function(str){
    var newString ="";
    for(var i=str.length-1; i>=0; i-- ){
        newString += str[i];

    }
    return newString;
}
console.log('Before Reverse Sring')
console.log('Hello');
console.log('After Reverse Sring')
console.log(RevStr("Hello"))

console.log("----------------IIFE Function---------------");

(function(str){
    var newString ="";
    for(var i=str.length-1; i>=0; i-- ){
        newString += str[i];

    }
    console.log('Before Reverse Sring')
    console.log(str);
    console.log('After Reverse Sring')
    console.log(newString);
})("hello")
