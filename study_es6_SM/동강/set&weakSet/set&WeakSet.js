let mySet = new Set();
//console.log(toString.call(mySet));

//set : 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할때 유용.

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

//console.log(mySet.has("crong"));

mySet.delete("crong");

mySet.forEach(function(v){
	
	console.log(v);

});







//  WeakSet - 객체타입저장
//참조를 가지고 있는 객체만 저장이 가능하다.
//객체 형태를 중복없이 저장하려고 할때 유용하다.

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

