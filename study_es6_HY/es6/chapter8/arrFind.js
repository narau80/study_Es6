const arr=[{id:5,name:'Judith'},{id:7,name:'Francis'}];

let result=arr.find(o=>o.id ===5);
console.log(result); //{id:5,name:'Judith'}

result = arr.find(o=> o.id ===2);
console.log(result); //undefined

const arr2 = [1,17,16,5,4,16,10,3,49];
result = arr2.find((x,i) =>i >5 && Number.isInteger(Math.sqrt(x)));
console.log(result);//49