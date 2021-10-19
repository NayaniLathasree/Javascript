var student = {
    name:"Avi Reddy",
    Class:7,
    age:12
}
for(var students in student){
    console.log(student[students])
}
console.log("===========================")
var car = {
    brand:"BMW",
    Color:'red',
    price:300000
}
for(var cars in car){
    console.log(car[cars])
}
console.log("===========================")
var Mobile = {
    brand:"Redmi",
    Color:'blue',
    price:25000
}
for(var mobile in Mobile){
    console.log(Mobile[mobile])
}
console.log("===========================")
var book = {
    brand:"Java",
    price:2500
}
for(var books in book){
    console.log(book[books])
}
console.log("===========================")
var city = {
   place:'Banglore',
   pincode:560078,
   Area:'Banshankari'
}
for(var cities in city){
    console.log(city [cities])
}
console.log("=============Arrays==============")
var studentname = ["Arun","Ravi","Ragavi","sree"]
for(var stu in studentname){
    console.log(studentname[stu])
}
console.log("=============2 ==============")
var Author = ["Stephen King","J. K. Rowling.","J. R. R. Tolkien"]
for(var authors in Author){
    console.log(Author[authors])
}
console.log("=============3 ==============")
var Subject= ["Maths","English","Hindi"]
for(var subjects in Subject){
    console.log(Subject[subjects])
}
console.log("=============4 ==============")
var Technology= ["Java","Javascript","Sql"]
for(var skills in Technology){
    console.log(Technology[skills])
}
console.log("=============5 ==============")
var color =["Red","Black","White"]
for(var colors in color){
    console.log(color[ colors ])
}
