var obj = {name:'latha',age:22, Branch : "Cse"}
console.log(obj);
console.log(Object.keys(obj));  //returns arrays 
console.log("--------------------------------------");
var object = { 0: 'x', 1: 'y', 2: 'z' };
console.log(Object.keys(object));
console.log('---------------------------------');
var check = ['x', 'y', 'z']; 
console.log(Object.keys(check));
console.log("--------------------------------------------");
const obj6 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj6)) {
  console.log(`${key} ${value}`); 
}

console.log("=================================================================");
const obj4 = { foo: 'bar', baz: 42 };
console.log(Object.values(obj4)); 

console.log('------------------------------------------');
// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1 )); 

console.log('------------------------------------------');

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2 )); 

console.log('------------------------------------------');

// getFoo is property which isn't enumerable
const my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); 

// non-object argument will be coerced to an object
console.log(Object.values('foo')); 

console.log('---------------------------------------------');


const object5 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object5));

  console.log('=====================objectentries()==========================');

  const obj8 = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj8)); 

console.log('---------------------------------------------');

// array like object
const obj7 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj7)); 

console.log('---------------------------------------------');

// array like object with random key ordering
const anObj1 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj1)); 

console.log('---------------------------------------------');

// getFoo is property which isn't enumerable
const myObj1 = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj1)); 

console.log('---------------------------------------------');

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); 

// returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
console.log(Object.entries(100)); 

console.log('---------------------------------------------');

// iterate through key-value gracefully


// Or, using array extras
Object.entries(obj6).forEach(([key, value]) => {
  console.log(`${key} ${value}`); 
});

console.log('===============================objectCreate()========================================');

function Shape() {
    this.x = 0;
    this.y = 0;
  }
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };

  function Rectangle() {
    Shape.call(this); 
  }
  
  
  Rectangle.prototype = Object.create(Shape.prototype);
  
  
  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();
  
  console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
  console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
  rect.move(1, 1);

  const obj0 = Object.create({ foo: 1 }, { 
    bar: {
      value: 2  
    },
    baz: {
      value: 3,
      enumerable: true  
    }
  });
  
  const copy1 = Object.assign({}, obj0);
  console.log(copy1);