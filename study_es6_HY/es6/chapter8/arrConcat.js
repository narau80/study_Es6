const arr=[1,2,3];
/*
2.배열끝에 여러요소 추가
arr.concat : arr배열끝에 여러 요소 추가한 사본을 반환
기존 배열은 변경되지 않음.
*/
let arrCopy;
arrCopy = arr.concat(4,5,6);
console.log(arr);//1,2,3
console.log(arrCopy);//1,2,3,4,5,6
console.log('------------------------------');

arrCopy = arr.concat([4,5,6]);
console.log(arr);
console.log(arrCopy);
console.log('------------------------------');

arrCopy = arr.concat([4,5],6);
console.log(arr);
console.log(arrCopy);
console.log('------------------------------');

arrCopy =arr.concat(4,[5,6]);
console.log(arr);
console.log(arrCopy);
console.log('------------------------------');

