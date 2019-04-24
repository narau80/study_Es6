const arr=[1,5,7];
/*
4. 임의의 위치에 요소 추가/제거
arr.splice(a,b,c,d,e,..,z): arr배열에 a번째 인덱스부터 b개만큼 제거하고 a번째 인덱스에 c~z요소를 추가
*/
arr.splice(1,0,2,3,4);//수정을 시작할 인덱스,제거할 요소숫자(0일경우 제거X),추가 요소
console.log(arr);//1,2,3,4,5,7

result= arr.splice(5,0,6);
console.log(arr);//1,2,3,4,5,6,7

result=arr.splice(1,2);//index 1 부터 2개 제거
console.log(arr);//1,4,5,6,7

result=arr.splice(2,1,'a','b');
console.log(arr);//1,4,'a','b',6,7

result=arr.splice(1,1);
console.log(arr);

result=arr.splice(3);
console.log(arr);

result=arr.splice(0,0);
console.log(arr);

result=arr.splice(0,0,'A');
console.log(arr);
