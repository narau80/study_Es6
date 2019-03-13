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
=> crong이 두 번 있지만 중복된 값 제외
*/