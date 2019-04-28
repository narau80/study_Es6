const arr=[{id:5,name:'Judith'},{id:7,name:'Francis'}];

let result= arr.findIndex(o=>o.id ===5);
console.log(result);//0

result= arr.findIndex(o=>o.name ==='Francis');
console.log(result);//1

result= arr.findIndex(o=>o.id===5 && o.name==='Judith');
console.log(result);//0

result= arr.findIndex(o=>o ===3);
console.log(result);//-1

result= arr.findIndex(o=>o.id===17);
console.log(result);//-1
