const o={name:"Jerry"};
const arr=[1,5,'a',o,true,5,[1,2],'9'];

let result = arr.indexOf(5);
console.log(result); //1

result = arr.lastIndexOf(5);
console.log(result); //5

result =arr.indexOf('a');
console.log(result);//2

result =arr.lastIndexOf("a");
console.log(result);//2

result =arr.indexOf({name:"Jerry"});
console.log(result);//-1  ? ?  ?

result =arr.indexOf(o);
console.log(result);//3

result =arr.indexOf([1,2]);
console.log(result);//-1   ? ? ? ?

result =arr.indexOf('9');
console.log(result);//7

result =arr.indexOf(9);
console.log(result);//-1

result =arr.indexOf('a',5);//(find something , start index)
console.log(result);//-1

result =arr.indexOf(5,5);//(find something , start index)
console.log(result);//5

result =arr.lastIndexOf(5,4);//(find something , start index)
console.log(result);//1

result =arr.lastIndexOf(5,5);//(find something , start index)
console.log(result);//5

result =arr.lastIndexOf(true,3);//(find something , start index)
console.log(result);//-1