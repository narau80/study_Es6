const arr = Array(10);
console.log(arr);

let newArr = arr.map(function(x){ return 5});
console.log(newArr);
for(let i=0;i<newArr.length;i++){
	console.log(`${i} : ${newArr[i]}`);
}

const str=[1,2,3,4,5];
delete str[2];
console.log(str);//[ 1, 2, <1 empty item>, 4, 5 ]
newArr = str.map(x=>0); 
console.log(newArr);// [ 0, 0, <1 empty item>, 0, 0 ]

