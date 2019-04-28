const arr=[5,7,12,15,17];
let result = arr.some(x=>x%2 ===0);
console.log(result);//true
result = arr.some(x=>Number.isInteger(Math.sqrt(x)));
console.log(result);//false