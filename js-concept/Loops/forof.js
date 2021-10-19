var fruits =["Banana", "Apple", "Orange","Grapes"]
console.log(fruits[0])
allFruits =''
for(var fruit of fruits){
   allFruits = fruits.join('-')

}
console.log(`fruits - ${fruits}`)
console.log(`fruits - ${allFruits}`)