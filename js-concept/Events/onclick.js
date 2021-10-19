/* function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
function hideName(){
    const h1Element = document.querySelector('.showHiddenName')
    console.log(h1Element);
    h1Element.getElementsByClassName.display = "None"
} */
function showName(){
    const h1Element = document.querySelector('.showHiddenName')
    if(h1Element.style.display ==='block'){
        h1Element.style.display='none'
    }else{
        h1Element.style.display= 'block'
    }
}
/* function hideName(){

        const h1Element = document.querySelector('.showHiddenName')
        h1Element.style.color= 'red'
    }
 */
 function displayover(){
     const h1Element = document.querySelector('.showHiddenName')
     h1Element.style.color= 'blue'
 } 

/*  function showItems(){
     const h1Element = document.querySelector('.showHideItems')
     h1Element.style.visibility= 'visible'
 }
 function hideItems(){
    const h1Element = document.querySelector('.showHideItems')
    h1Element.style.visibility= 'hidden'
} */

function getPrice(){
    console.log('price'); 
    const PriceElement = document.getElementById('price')
    console.log('value -',PriceElement.value);
    const divElement = document.getElementById('priceValue')
    divElement.innerText = PriceElement.value;

}
function showPrice(){
    console.log('Show Price');
    const PriceElement= document.getElementById('price')
    console.log('value - ',PriceElement.value);

    
}


const buttonEvent= document.getElementById('clickEvent')
buttonEvent.addEventListener('click' ,(event)=>
{
    console.log('Clicked');
    console.log(event);

});

const inputElement= document.getElementById('nameValue')
inputElement.addEventListener('mouseover' ,(event)=>
{
    console.log('Mouse Over');
    console.log(event);

})
inputElement.addEventListener('keyup' ,(event)=>
{
    console.log('keyup');
    console.log(event);

})
inputElement.addEventListener('mouseenter' ,(event)=>
{
    console.log('Mouse Enter');

})
const  checkElement =document.getElementById('checkValue')
checkElement.addEventListener('click',()=>{
    document.getElementById('checkValue').checked=true;
    console.log('checked');
})
const buttonEle = document.getElementById('date"')
buttonEle.addEventListener('click',()=>
{
 buttonEle    = getDate();
 console.log(buttonEle);
})











