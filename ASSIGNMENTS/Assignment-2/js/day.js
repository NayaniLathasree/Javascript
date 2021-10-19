var  days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var formatDate = new Date('dec, 10,2021'); 
var day = formatDate.getDay();
var month =formatDate.getMonth()
console.log(`${days[day]} ${months[month]} ${formatDate.getFullYear()}`)

