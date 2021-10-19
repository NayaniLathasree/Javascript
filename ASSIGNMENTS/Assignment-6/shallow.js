let student = {  
    name: 'Abhimanyu',  
    department: 'Computer Science',  
            enroll_no: '3210316330',  
    permanent_address: {  
        house_no: '200',  
        city: 'Banglore',  
        country: 'INDIAN'  
    }  
};
let studentCpy = Object.assign({},student);
 studentCpy.name = 'Rachana';
 studentCpy.permanent_address.city = 'Mumbai';
 studentCpy.permanent_address.house_no=342
console.log(student);
console.log(studentCpy);
console.log('------------------Deep Copy ----------------------')

var employee = {
    eid: "330",
    ename: "Anupriya",
    eaddress: "Chennai",
    salary: 50000
}
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);






 
