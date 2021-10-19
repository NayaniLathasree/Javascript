let str ='hello'
str = str.toUpperCase()
console.log(` toUpperCase ${str}`);
console.log("---------------------------------------------");
str = str.toLowerCase()
console.log(` tolowerCase ${str}`);
console.log("---------------------------------------------");
let searchCharacter = str.charAt(4)
console.log(`searchCharacter - ${searchCharacter} `);
console.log("---------------------------------------------");
const indexOfE = str.indexOf('e')
console.log(`indexOfE -${indexOfE}`);
console.log("---------------------------------------------");
const greet = str.concat(', Good Morning')
console.log(`greet -${greet}`);
console.log("---------------------------------------------");
const includesO = str.includes('O')
console.log(`includesO - ${includesO}`);
console.log("---------------------------------------------");
const replaceH = str.replace('h','H') //only first ocuurence charcter will change
console.log(`replaceH  -${replaceH }`);
console.log("---------------------------------------------");
const replaceAllLs = str.replaceAll('l','L') //it will replace the all  ocuurence charcter //it will replace the all  ocuurence charcter 
console.log(`replaceH  -${ replaceAllLs }`);

console.log("=====================substr=========================================================");
const extractedstr = str.substr(1,3)
console.log(`Extrated String - ${extractedstr}`)

console.log("----------------substring -----------------------------");

const extractedString = str.substring(1,3)
console.log(`Extracted String - ${ extractedString } `);

console.log("------------------trim---------------------------");

const note ='  Hai,Welcome to ty         '
const noteAfterTRim = note.trim()
console.log(`NoteAfterTRim - ${noteAfterTRim}`);
console.log("-------------------TrimLeft --------------------------");


const noteAfterTrimLeft = note.trim()
console.log(`NoteAfterTRim - ${noteAfterTrimLeft }`);

console.log("--------------TrimRight-------------------------------");

const noteAfterTrimRight = note.trim()
console.log(`NoteAfterTRim - ${noteAfterTrimRight}`);
console.log("--------------Split-------------------------------");
const data = 'hello'
const dataAftersplit = data.split(' ')
console.log(` dataAftersplit - ${ dataAftersplit}`);
console.log("--------------Reverse String-------------------------------");
const reverseString = data.split('').reverse().join('')
console.log(`reverseString - ${reverseString}`);





