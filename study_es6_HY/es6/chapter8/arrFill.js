const arr=new Array(5).fill(1);
console.log(arr);//1,1,1,1,1
/*
6.특정값으로 배열채우기
arr.fill(a,b,c) : arr배열에 a를 x>=b && x<c 인 x번째에 채우기
*/


arr.fill('a');
console.log(arr);//a,a,a,a,a

arr.fill('b',1);
console.log(arr)//a,b,b,b,b

arr.fill('c',2,4);
console.log(arr);//a,b,c,c,b

arr.fill(5.5,-4);
console.log(arr);//a,5.5,5.5,5.5,5.5

arr.fill(0,-3,-1);
console.log(arr);//a,5.5,0,0,5.5