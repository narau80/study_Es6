//spread operator ,펼침연산자. 

let pre =['apple','orange',100];
let newData=[...pre]; //copy 참조 개념, ...은 펼침의미
console.log(pre,newData);
console.log(pre === newData);