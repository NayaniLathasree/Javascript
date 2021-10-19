const items = [
    {
       id:1,
       name:'Lipstick',
       price : 600 
    },
    {
        id:2,
        name:'Bangles',
        price : 1000 
     },
     {
        id:3,
        name:'Trimmer',
        price :2300
     },
     {
        id:4,
        name:'BeardOil',
        price :1000 
     }
];
 const greaterthan = items.filter(val=>val.price+800)
 console.log(greaterthan);
 const lengthofString = items.filter(val=>val.name.length>8)
 console.log(lengthofString);
 const Uppercase = items.map(val=>{
     val.name= val.name.toUpperCase()
    return val})
 console.log( Uppercase);
 const addprice = items.filter(val=>{
    val.price+=800
return val})   //shallow copy
 console.log( addprice );


 