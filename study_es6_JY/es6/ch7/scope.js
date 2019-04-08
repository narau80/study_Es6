//p187
function f(x) {
	return x + 3;
}
console.log(f(5));	//8
console.log(x);	//ReferenceError: x is not defined


// p189 (1)
function f1() {
	console.log('one');
}
function f2() {
	console.log('two');
}

console.log(f2());	// two
console.log(f1());	// one
console.log(f2());	// two
// -> 프로그램 실행흐름과 읽는 순서는 다름.


// p189 (2)
const x = 3;

function f() {
	console.log(x);
	console.log(y);
}
{	// 새 스코프
	const y = 5;
	console.log(f());	//ReferenceError: y is not defined
}
/*함수 f 호출하면 x는 그 바디 안의 스코프에 있지만 y는 그렇지 않음(정적 스코프)
함수 f는 자신이 정의될 때 접근할 수 있었던 식별자에는 여전히 접근 가능하나, 호출할 때 스코프에 있는 식별자에는 접근 불가*/
