const person ={
    name : 'Arun',
    age : 23,
    branch: 'B.Tech'
}
const stringifiedPerson = JSON.stringify(person)
console.log('Converting Js to JSON -', stringifiedPerson );
console.log('----------------------------------------------');
const jsPersonObject = JSON.parse(stringifiedPerson)
console.log('Converting JSON to JS -', jsPersonObject );
