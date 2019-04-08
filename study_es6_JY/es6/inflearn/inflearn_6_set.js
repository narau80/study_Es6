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

2. WeakSET
참조를 가지고 있는 객체만 저장 가능. 객체형태를 중복없이 저장하려고 할 때 유용.

let arr = [1,2,3,4];
let ws = new WeakSet();

ws.add(arr);
console.log(ws); //WeakSet { [items unknown] }

ws.add(1111);
console.log(ws); // 에러남
ws.add("1111");
console.log(ws); // 에러남
ws.add(null);
console.log(ws); // 에러남
ws.add(function(){});
console.log(ws); //WeakSet { [items unknown] }



let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));


3. MAP
array ->(개선) set, weakset
object -> map, weakmap

key/value 구조로 저장.

let wm = new WeakMap();
let myfun = function() {};
//이 함수가 얼마나 실행됐는지 알려고 할때

wm.set(myfun, 0);

console.log(wm);	//WeakMap { [items unknown] }

for (let i=0; i<10; i++) {
	count = wm.get(myfun);
	count++;
	wm.set(myfun, count);
}
console.log(wm);	//WeakMap { [items unknown] }
console.log(wm.get(myfun));	//10
myfun = null;
console.log(wm.get(myfun));	//10