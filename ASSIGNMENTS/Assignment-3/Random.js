function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max- min)) + min;
    }
    console.log(`Random Interger ${getRndInteger(150,250)}`)
console.log("--------------------Arrow Function-----------------------");
var getRnd= (min, max) =>{
    return Math.floor(Math.random() * (max- min)) + min;
    }
    console.log(`Random Interger ${getRnd(1,50)}`)
    console.log("--------------------Anonymous Function-----------------------");
var rndInteger= function(min, max){
    return Math.floor(Math.random() * (max- min)) + min;
    }
    console.log(`Random Interger ${rndInteger(100,150)}`)
    console.log("--------------------IIFE Function-----------------------");
(function(min, max){
    return Math.floor(Math.random() * (max- min)) + min;
    })( console.log(`Random Interger ${(300,450)}`))
