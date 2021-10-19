console.log('JS started');

const myPromise = new Promise((resolve, reject)=>{
    if(10>5) {
        const data = [100,200,300,400]
        resolve(data)
    } else {
        reject('Failed to fetch data')
    }
})

myPromise.then(result=>{
    const filterRes = result.filter(val=>val>200)
    console.log(filterRes);
    return filterRes
}).then(filteredRes=>{
    console.log('filteredRes', filteredRes);
}).catch(error=>{
    console.error(error)
})

console.log('JS ended');
