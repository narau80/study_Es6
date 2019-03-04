//map & weakMap
//Array -> set,weakset
// object -> map,weakmap

//map은 key, value
let wm = new WeakMap();
let myfunc = function(){};

//이 함수가 얼마나 실행됐지? 를 알고 할때 
wm.set(myfunc,0);
//console.log(wm);
for(let i=0;i<10;i++){
	count = wm.get(myfunc); //get value
	count++;
	wm.set(myfunc, count);
	//console.log(wm.get(myfunc));
}

console.log(wm.get(myfunc));
myfunc = null;
console.log(wm.get(myfunc));
console.log(wm.has(myfunc));

//key,value로 유일한 값 , 중복없이 사용하고자 할 때ㄴ