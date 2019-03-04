

//weakset : 참조가 가지고 있는 객체만 저장이 가능하다.
//객체형태를 중복없이 저장하려ㅗ 할때 유용하다.

let arr=[1,2,3,4];
let arr2=[5,6,7,8];
let obj={arr, arr2};
let ws= new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);
arr=null;
//ws.add(111);
//ws.add('111');
//ws.add(null);
//ws.add(function(){});
//객체가 null이나 필요가 없어지면 쓰레기값으로 없어짐?
//참고하면 모니터링
console.log(ws);
console.log(ws.has(arr), ws.has(arr2));