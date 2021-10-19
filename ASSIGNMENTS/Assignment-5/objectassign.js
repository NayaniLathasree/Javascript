const obj9 = { a: 1 };
const copy = Object.assign({}, obj9);
console.log(copy);

console.log('-------------------------------');

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obje = Object.assign(o1, o2, o3);
console.log(obje);
console.log(o1); 

console.log('-----------------------------------');

const o11 = { a: 1, b: 1, c: 5 };
const o22 = { b: 2, c: 2 };
const o33 = { c: 3 };

const obje1 = Object.assign({}, o11, o22, o33);
console.log(obje1);

console.log('----------------------------------');

const o12 = { a: 1 };
const o23 = { [Symbol('foo')]: 2 };

const obje2 = Object.assign({}, o12, o23);
console.log(obje2); 

console.log('--------------------------------------');

