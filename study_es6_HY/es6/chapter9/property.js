/*
★객체 프로퍼티 나열은 순서가 없음★
키가 Symbol인 프로퍼티는 for in루프에 포함되지 않음.
hasOwnProperty
배열 : for루프 또는 forEach권장
*/

const SYM = Symbol();
const o={a:1,b:2,c:3,[SYM]:4};
for(let prop in o){
	if(!o.hasOwnProperty(prop)) continue;
	console.log(`${prop}: ${o[prop]}`);
}

/*
a: 1
b: 2
c: 3
*/