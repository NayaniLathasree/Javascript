var person = {
    name:"ragavi",
    age:23,
}
for(var key in person){
    console.log(person[key])
    console.log(key)
    console.log(`${key} - ${person[key]}`)
}
console.log(person.name)

console.log("===============Arrays =============================")
var mobilebrands = ['Redmi','Samsung','Oneplus']
for(var index in  mobilebrands){
    console.log( mobilebrands[index])
    console.log(`${index} - ${ mobilebrands[index]}`)
}

console.log("================for loop============================")
var numbers = [1,2,4,6,87,23,,"","",,,,87]
for(var i =0 ; i<numbers.length ; i++)
{
    console.log(numbers[i])

}
console.log("=================for in==========================")
for(var index in numbers)
{
    console.log(numbers[index])
  
}
console.log("===========================================")
var book = {
    title:'Javascript',
    price: 530
}
var books =[' web fundamentals','Javascript','Java']
books[0] ="python"
books['element'] = '.net' //like only consider in for in loop because it can accepts both objects and arrays.
console.log("=================for loop==========================")
for(var i=0; i<books.length;i++)
{
    console.log(books[i]);
}
console.log("=================for in==========================")

for(var index in books)
{
    console.log(books[index]);
}