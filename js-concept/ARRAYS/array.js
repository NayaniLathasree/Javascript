var fruits =["Apple","Banana","Orange","Mango"]
console.log(".........Fruits............")
console.log(fruits[0]);
console.log(fruits[1]);
console.log("...........print from starting...................")

for (var i=0; i<fruits.length;i++){
    console.log('Fruits at index: '+ i +'' +fruits[i])
}
console.log("............print from back..................")
for (var i =fruits.length-1;i>=0 ;i--){

    console.log(`Fruits at index:  ${i} ${fruits[i]}`) 
}
console.log("............multiple types of ..................")
var person =["Ragini",25,"black",false ]
for(var i=0 ; i<person.length; i++){
    console.log(person[i]);
}
console.log("..............................")
var data = [null, undefined, 'string',12,true, , , , ]
for(i=0;i<data.length;i++){
    if(data.length>4){
    console.log(data[i]);
    }
}

var movies =new Array('kgf 2','Pushpa','RRR','Spider No way home','Jersey','83')
for(var i=0;i<movies.length;i++){
    console.log(movies[i])
}
movies = []
// movies.length =0
console.log('movies', movies)

var book =[
    {
        title: 'javascript',
        price:1500,
    },
    {
        title: 'java',
        price:800,
    },
    {
        title: 'python',
        price: 1000,
    },
    {
        title: 'Sql',
        price:550,
    }
]
for(var i=0; i<book.length;i++){
    if(book[i].title.length > 4){
    console.log(book[i]);
    }
}

