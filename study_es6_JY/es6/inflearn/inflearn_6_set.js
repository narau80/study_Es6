1. SET
중복없이 유일한 값을 저장하려고 할 때, 이미 존재하는지 체크할 때 유용.

let mySet = new Set();
console.log(toString.call(mySet));	//[object Set]


mySet.add("crong");	
mySet.add("hary");
mySet.add("crong");
//add : set에서 제공하는 메소드

console.log(mySet.has("crong"));	//true, has : 값 있는지 확인

mySet.delete("crong");

mySet.forEach(function(v) {	//forEach 통해 루프를 돌림
	console.log(v);
})

/*
crong
hary
=> crong이 두 번 있지만 중복된 값 제외,

mySet.delete("crong"); 를 하게 되면 crong을 삭제하여
hary
*/