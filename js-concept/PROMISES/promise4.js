const myPromise1 = new Promise((resolve, reject)=>{
    // setTimeout(()=>{
    //     resolve([10,20,30])
    // }, 1000)
    fetch('https://jsonplaceholder.typicode.com/todos').
    then(res=>res.json()).then(data =>resolve(data))
})

const myPromise2 = new Promise((resolve, reject)=>{
    // setTimeout(()=>{
    //     resolve([100,200,300])
    // }, 1000)
    fetch('https://jsonplaceholder.typicode.com/posts').
    then(res=>res.json()).then(data=>resolve(data))
})

Promise.race([myPromise1, myPromise2]).then(response=>{
    console.log('response', response);
}).catch(err=>{
    console.log(err);
})