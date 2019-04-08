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