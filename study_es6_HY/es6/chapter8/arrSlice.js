const arr=[1,2,3,4,5];
/*
3.배열 일부 가져오기
arr.slice(i,j) : arr배열에서 x>= i && x<j 인 x값들을 가져옴.
기존 배열은 변경되지 않음.
*/
let result = arr.slice(3);//index 3~ 
console.log(arr);//1,2,3,4,5
console.log(result);//4,5
console.log('------------------------------');

result = arr.slice(2,4);//2번째 인덱스 이상 4번째 인덱스 미만
console.log(arr);
console.log(result);//3,4
console.log('------------------------------');

result= arr.slice(-2);
console.log(result);//4,5

result= arr.slice(1,-2);
console.log(result);//2,3 **잘생각하기

result=arr.slice(-2,-1);
console.log(result);//4