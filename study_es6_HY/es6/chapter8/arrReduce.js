/*
reduce : 배열 자체를 변형, 배열의 밗을 하나로 줄이는 동작, 반환값은 배열 또는 객체일 수 있음.
*/

const arr=[5,7,2,4];
/*
a: 누적값  				0 5 12 14 18			
x: 현재 배열 요소			5 7 2  4
0: 누적값은 0부터 시작(초기값) , 생략시 배열의 첫번째 요소
*/
const sum = arr.reduce((a,x)=>a += x,0);
const sum2 = arr.reduce((a,x)=>a+=x);
console.log(sum); //18
console.log(sum2); //18