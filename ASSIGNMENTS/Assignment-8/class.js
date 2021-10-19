let Person=class{
    constructor(name,age){
        this.name = name;
        this.age= age;
    }
} 
let person1 = new Person('anu',20)
console.log(person1);
let person2 = new Person('Ajay',25)
console.log(person2);

//By using class we can create number of object... class is blue print of object..
//.when we are using we need to use constructor
console.log('-------------------------------closure-------------------------------------');
function myFunction(){
    let name = 'latha'
    function display() {
        console.log(name);
        
    }
    display()
} 
myFunction()
    