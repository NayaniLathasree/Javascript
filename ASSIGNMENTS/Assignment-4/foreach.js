console.log("----------------------foreach Array Method--------------------------------------");
const numArr = [1, 2, 3];
 
numArr.forEach(function(element) {
  console.log(element);
}) 
console.log("-------------------------- 2 example-------------------------");
const color =['Red','Black','Blue'] 
color.forEach(function(colors) {
  console.log(colors);

})
console.log("-------------------------- 3 example-------------------------");
const mobiles =['Redmi','iPhone','Vivo'] 
mobiles.forEach(function(phone) {
  console.log(phone);
})
console.log('----------------------------------------------------');
mobiles.map(function(phone){
  console.log(phone);
})
console.log("-------------------------- 4 example-------------------------");
const course =['Java','Javascript','Sql'] 
course.forEach(function(skills) {
  console.log(skills);
})
console.log("-------------------------- 5 example-------------------------");
const city =['Banglore','Hyderabad','Anantapur'] 
city.forEach(function(cities) {
  console.log(cities);
})