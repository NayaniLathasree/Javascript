function bubble(arr){
    var i, j, len = arr.length;
    var swapped = false;
    for(i=0 ; i<len;i++){
         swapped= false;
         for(j=0 ; j<len-i-1;j++){
                if(arr[j]>arr[j+1])
                {
                    var temp = arr[j];
                    arr[j]=arr[j+1]
                    arr[j+1]=temp;

                }
         }
        
    }
        return arr;
}
var arr = [234,44,66,5,6,23]
console.log('Before Bubble Sorting');
console.log(arr);
bubble(arr)
console.log('After Bubble Sorting');
console.log(arr);

console.log("--------------------------Arrow Function--------------------------")
var bubble = arr=>{
    var i, j, len = arr.length;
    var swapped = false;
    for(i=0 ; i<len;i++){
         swapped= false;
         for(j=0 ; j<len-i-1;j++){
                if(arr[j]>arr[j+1])
                {
                    var temp = arr[j];
                    arr[j]=arr[j+1]
                    arr[j+1]=temp;

                }
         }
        
    }
        return arr;
}
var arr = [234,44,66,5,6,23]
console.log('Before Bubble Sorting');
console.log(arr);
bubble(arr)
console.log('After Bubble Sorting');
console.log(arr);
console.log("--------------------------Anonymous Function--------------------------")
var bubblesort = function(arr){
    var i, j, len = arr.length;
    var swapped = false;
    for(i=0 ; i<len;i++){
         swapped= false;
         for(j=0 ; j<len-i-1;j++){
                if(arr[j]>arr[j+1])
                {
                    var temp = arr[j];
                    arr[j]=arr[j+1]
                    arr[j+1]=temp;

                }
         }
        
    }
        return arr;
}
var arr = [234,44,66,5,6,23]
console.log('Before Bubble Sorting');
console.log(arr);
bubblesort(arr)
console.log('After Bubble Sorting');
console.log(arr);
console.log("--------------------------IIFE Function--------------------------"); 
(function(sort)
{
    // var sort = [234,44,66,5,6,23]
  var i, j, len =sort.length;
    var swapped = false;
  
    for(i=0 ; i<len;i++)
    {
         swapped= false;
         for(j=0 ; j<len-i-1;j++)
         {
                if(sort[j]>sort[j+1])
                {
                    var temp = sort[j];
                    sort[j]=sort[j+1]
                    sort[j+1]=temp;

                }
         }
    } 
    console.log(`After Bubble Sort ${sort}`)
})([234,44,66,5,6,23])