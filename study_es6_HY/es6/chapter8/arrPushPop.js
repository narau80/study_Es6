const arr=['b','c','d'];
/*
1.배열의 처음/끝에 요소 하나를 추가/제거
push,pop : 배열요소 끝에 추가 및 제거
unshift,shift : 배열요소 앞에 추가 및 제거
*/
arr.push('e'); 
console.log(arr);//b,c,d,e

arr.pop();
console.log(arr);//b,c,d

arr.unshift('a');
console.log(arr);//a,b,c,d

arr.shift();
console.log(arr);//b,c,d
