function first(test,test1){
    setTimeout(function(){
      console.log('first Function');
      test()
        test1()
    },1000)
}
function Second(){
  
      console.log('Second Function');

   }
  

function Third(){
  
    console.log('Third Function');
}

first(Second,Third)
