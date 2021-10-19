console.log('JS started');

const promiseExample = new Promise(function(resolve, reject){
    if (10>5) {
        resolve('10 is greater than 5') 
    } else {
        reject('10 is less than 5')
    }
})

promiseExample.then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error);
})

function greet() {
    console.log('Welcome');
}

greet()
console.log('JS ended');