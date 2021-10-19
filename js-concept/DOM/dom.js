const element=document.getElementById("test")
console.log("Element -",element);
console.log(element.innerText);
console.log(element.innerHTML);
console.log(element.textContent);
element.innerText = "Good Afternoon"
// element.textContent = "<h1>Good Evening</h1>"
// element.innerText = "<p>Good Afternoon</p>"
element.innerHTML = "<h1>Good Evening</h1>"
// document.write('Welcome to Js Class')
const pElement= document.createElement('p')
pElement.textContent = "Monday Mock"
console.log('------------------------------------------');
element.insertAdjacentHTML('afterend','<p>Monday Strict Mock</p>')
console.log('------------------------------------------');
const h1Element=document.getElementsByTagName('h1')
console.log('H1 Element ',h1Element);
 const demoClass= document.getElementsByClassName('demo')
console.log('class Element',demoClass);
const h1Elements = document.querySelector('h1')
console.log('query Selector',  h1Elements);
const pElements = document.querySelectorAll('p')
console.log('query Selector All -',  pElements);
/*  element.style.color = 'lightblue'
 element.style.background ='blue'
 element.style.border = '1px solid blue' */

//  const randomTextElememt = document.getElementById('randomText')
//  randomTextElememt.className = 'randomStyle'
// andomTextElememt.classList = 'randomStyle  '
for(style in demoClass){
    demoClass[style].style.color = 'red'
    demoClass[style].style.border = '1px solid blue';
}
console.log("---------------------------------");
/*  for(let i=0 ; i<demoClass.length; i++){
    demoClass[i].style.color ='blue'
 }
 */





