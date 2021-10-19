const numbs =[100,200,300]
const numAfteraddingTen = numbs.map(function(val){
  val +=10;
  return val
})
console.log(`Numbers Aftr Adding Ten ${numAfteraddingTen}`);

console.log("------------------------------------------");

console.log("------------------------------------------");
const numdsaddingUsingArrow = numbs.map(val=>val+10)
console.log(` NumdsUsinArrow ${numdsaddingUsingArrow }`);