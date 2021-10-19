function secondHighest(arr){
    
    var highest = arr[0], secondHighest = arr[0];
    
    for(var i=0; i<arr.length; i++){
      if(arr[i] > highest){
        secondHighest = highest;
        highest = arr[i]; 
      }else if(arr[i] < highest && arr[i] > secondHighest)
      {
        secondHighest = arr[i];
      }
   
    }
    return secondHighest;
}
var arr = [1,2, -3, 15, 77, 12, 55]
console.log(`Second Largest Number: ${secondHighest(arr)}`)

console.log("==============Arrow Functions=========================");
var secondlar = arr=>{
    var largest = arr[0],SecondLargest =arr[0]
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>largest){
            SecondLargest = largest;
            largest= a[i]
        }else if(arr[i]<largest && arr[i]>SecondLargest){
            SecondLargest = arr[i]
        }
    }
    return SecondLargest;
}
var arr =[1,2, -3, 15, 77, 65, 55]
console.log(`Second Largest Number: ${secondHighest(arr)}`)
console.log("==============Anonymous Functions=========================");
var second = function(arr){
    var largest = arr[0],SecondLargest =arr[0]
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>largest){
            SecondLargest = largest;
            largest= a[i]
        }else if(arr[i]<largest && arr[i]>SecondLargest){
            SecondLargest = arr[i]
        }
    }
    return SecondLargest;
}
var arr =[1,2, -3, 15, 77, 85, 55]
console.log(`Second Largest Number: ${secondHighest(arr)}`)
console.log("==============IIFE Functions=========================");
(function(arr){


    
    var largest = arr[0],SecondLargest =arr[0]
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>largest){
            SecondLargest = largest;
            largest= arr[i]
        }else if(arr[i]<largest && arr[i]>SecondLargest){
            SecondLargest = arr[i]
        }
    }
    console.log(`Second Largest Number: ${SecondLargest}`)
})([1,2, 3, 15, 90, 85, 55])
