const student ={
    class: 7,
    sname: 'Ravikanth',
    sub :['maths','Science','English'],
    id:23
}
const {sname,id} =student
console.log('Student Name ',sname+" , "+'id-'+"  "+id);
const jsp ={
    trainer: "Vivek",
    course : "Java",
    duration : "3 Months",
}
const {course, duration} =jsp
console.log(' course ', course+" , "+'duration-'+"  "+duration);
console.log('-----------------------------------------------------------------');
const user={
 uname1: 'Rani',
uage:20,
uBranch: 'B.Tech',
uaddress:{
    ucity:'Banglore',
    uPincode :550062
}
}
const {uname1, uaddress:{ucity,uPincode}} =user
console.log(' name1 ', uname1+" , "+'ucity-'+"  "+ucity);
console.log("-----------------------------------------------------------------");
const skills = ["HTML",'CSS','BOOTSTRAP','JAVASCRIPT']
const {a,b,c} = skills 
console.log(a);

