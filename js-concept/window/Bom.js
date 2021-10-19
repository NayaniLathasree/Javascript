const str ='Hello'
console.log(str);
console.log('window str - ', window.str);
console.log('-----------------------------------'); 
function getName(){
    return 'latha'
}
console.log(' getname - ', getName());
console.log('window getname',window.getName());
console.log('------------------------------------------');
console.log(window);
console.log('Inner Height -',window.innerHeight);
console.log( 'Inner Width-',window.innerWidth);
/* window.alert('Good Afternoon')
console.log('------------------------------------------');

const isEligible=window.confirm("Is Your greater than 18?")
console.log(`isELigible - ${isEligible}`);
if(isEligible){
    console.log(`Eligible for voting `);
} else{
    console.log(`Not Eligible`);
} */
/* console.log('------------------------------------------');

const age=window.prompt('Please Enter your Age',30)
console.log(`Age- ${age}`);
if(age>=18){
    // console.log(`Eligible for voting `);
    window.open('https://www.flipkart.com')
    
}else{
    window.open('https://www.firstcry.com')
    // console.log(`Not Eligible`);
}
 */
console.log('Location- ',location);
console.log('History - ',history);
console.log('Navigator',navigator);
navigator.geolocation.getCurrentPosition(loc=>{
    console.log('location -',loc);
})