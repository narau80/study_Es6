const arr=[5,7,11,15,17];
let result = arr.every(x=>x%2 ===1);
console.log(result);//true
result = arr.every(x=>Number.isInteger(Math.sqrt(x)));
console.log(result);//false