const book = [
    {
       name:'Javascript',
       price : 1600 
    },
    {
        name:'Java',
        price : 21000 
     }
    ]
    const deepcopyofBook = book.map(val =>
        {
            const valCpy = Object.assign({},items)
            valCpy +=100;
            return valCpy
        })    
  console.log(deepcopyofBook);      