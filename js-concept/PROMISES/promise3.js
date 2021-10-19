const myPromise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([10,20,30])
    }, 4000)
})

const myPromise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([100,200,300])
    }, 1000)
})

Promise.all([myPromise1, myPromise2]).then(result=>{
    console.log('result', result);
}).catch(err=>{
    console.log('Error is ', err);
})
