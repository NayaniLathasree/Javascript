const trees = ["Neem", "Banyan", "Curry leaves", "pepal"];
  const findtreewithm = trees.find(tree => tree.includes("m"));
  console.log('find tree which includes m - ',findtreewithm);
 console.log("--------------------2---------------------------");
  const students = [
    { name: "Rani", age:18  },
    { name: "Ragu", age: 25 },
    { name: "Vani", age: 23 }
  ];
  // if we use find() when a test has multiple results, we only get the first value found:
  const greatherthan = students.find(students => students.age ==18);  //testing function
  console.log(' greather than 18 - ',greatherthan); 
  console.log("----------------------------3---------------------------");
  const numbers = [10,20,40,12,56]
  const numbersgreatherthan = numbers.find(number=>number===20)
  console.log('numbersgreatherthan - ',numbersgreatherthan);
  console.log("---------------------------4 --------------------------");
  
