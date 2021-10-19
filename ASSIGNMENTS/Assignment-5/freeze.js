const objj = {
    prop: 42
  };
  
  Object.freeze(objj);
  
  objj.prop = 33;
  
  console.log(objj.prop);

  console.log('------------------------------------');

  const obj111 = {
    internal: {}
  };
  
  Object.freeze(obj111);
  obj111.internal.a = 'aValue';
  
  console.log(obj111);

  console.log('------------------------------------');

  const employee = {
    name: "Mayank",
    designation: "Developer",
    address: {
      street: "Rohini",
      city: "Delhi"
    }
  };
  
  Object.freeze(employee);
  
  employee.name = "Dummy"; 
  employee.address.city = "Noida"; 
  
  console.log(employee.name);  //name will not change after freezing.
  console.log(employee.address.city) //property value of child object can be modified

  console.log('-----------------------------------------');

  let ar = [0];
Object.freeze(ar); // The array cannot be modified now.

ar[0] = 1;   //in strict mode it will throw error

console.log(ar);
console.log('------------------------------------');
let numbers = [10,20,30,50]
console.log(Object.freeze(numbers));
numbers = [20,30,]