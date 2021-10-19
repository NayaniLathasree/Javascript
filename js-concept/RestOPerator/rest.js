function addNumber(...nums){
    let sum =0
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]

    }
    console.log(`sum - ${sum}`);
}
addNumber(10,20,30)
addNumber(10)
addNumber(10,2,30,90)

//default Parameters
 //here greet function passing default value to parameter if user didn't pass any parameter default value prints
function greet(name ='latha'){
    console.log(`Welcome ${name}`);
}
greet() //it  prints default value bcoz we are not passing any parameter
greet('veda')
