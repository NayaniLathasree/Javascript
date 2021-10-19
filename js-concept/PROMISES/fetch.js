/* what is fetch api?
The Fetch API is a promise-based JavaScript API for making asynchronous HTTP requests in the browser  
await - it is use
 d make our execution process 
   
*/

console.log('Js started');

async function fetchPosts(){
try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    console.log(response);
    const data = await response.json()
    console.log('data',data);
    console.log('hello');
    data.foreach(val=>val.title)
}catch{
    
}
}
fetchPosts()

console.log('Js ended')

