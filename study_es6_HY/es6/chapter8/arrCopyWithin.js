const arr=[1,2,3,4];
/*
5.배열 안에서 요소 교체
arr.copyWithin(a,b,c) : arr배열에서 x>=b && x<c 인 x를 복사한 값을 a번째부터 arr배열에 덮어씌운다.
*/
arr.copyWithin(1,2);//붙여넣을 장소(인덱스), 복사를 시작할 위치
console.log(arr);//1,3,4,4

arr.copyWithin(2,0,2);//붙여넣을 장소(인덱스), 복사를 시작할 위치,복사 끝내는 위치(이전까지)
console.log(arr);//1,3,1,3

arr.copyWithin(0,-3,-1);
console.log(arr);//3,1,1,3