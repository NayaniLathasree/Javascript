const student = new Promise((resolve,reject)=>{
    isStudentCompletedAssignment = true;
    if(isStudentCompletedAssignment){
        resolve('yes,Student Completed their Assignment',isStudentCompletedAssignment)
    }else{
        reject("'No , They didn't completed",isStudentCompletedAssignment)
    }
})
student.then((res)=>{
    resolve(res)
}).catch((err)=>
{
    reject(err)
})
function greet(){
    console.log('hello');
} 

console.log('---------------------------------------------------------------');
 