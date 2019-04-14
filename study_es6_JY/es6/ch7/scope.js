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


// p191 (1)
let name = "Irena"; //전역
let age = 25;		//전역

function greet() {
	console.log(`Hello, ${name}!`);
}
function getBirthYear() {
	return new Date().getFullYear() - age;
}
greet(); // 전역변수에 의존함.



// p191 (2)
let user = {
	name : "Irena",
	age : 25,
};//사용자 정보를 단일객체에 보관. 책대로 : 대신 = 사용하면 에러 발생

function greet() {
	console.log(`Hello, ${user.name}!`);
}
function getBirthYear() {
	console.log(new Date().getFullYear() - user.age);
	return new Date().getFullYear() - user.age;
}

console.log(user.age);

greet();
getBirthYear();

/*
결과
25
Hello, Irena!
1994
*/


// p192
let user = {
	name : "Irena",
	age : 25,
};//사용자 정보를 단일객체에 보관. 책대로 : 대신 = 사용하면 에러 발생

function greet(user) {
	console.log(`Hello, ${user.name}!`);
}
function getBirthYear(user) {
	console.log(new Date().getFullYear() - user.age);
	return new Date().getFullYear() - user.age;
}

console.log(user.age);

greet(user);
getBirthYear(user);



// p193 (1)
console.log('before block');
{
	console.log('inside block');
	const x = 3;
	console.log(x);
}
console.log(`outside block; x=${x}`);

/*
결과
before block
inside block
3

x is not defined 에러 
=> x는 블록 안에서 정의됐고, 블록 나가는 즉시 x도 스코프 밖으로 사라지므로 정의되지 않은 것으로 간주

*/

// p193 (2)
{
	//block 1
	const x = 'blue';
	console.log(x);
}
console.log(typeof x);
{
	//block 2
	const x = 3;
	console.log(x);
	console.log(typeof x);
}
console.log(typeof x);

/*
결과
blue
undefined
3
number
undefined

=>undefined인 이유 ? x가 스코프 밖에 있기 때문에.
변수 이름이 같아도 스코프 하나가 끝난 다음에 다른 스코프가 있는 식이라 이해가 쉬운 편
*/

// p194 (1)
{
	//외부 블록
	let x = 'blue';
	console.log(x);
	{
		//내부 블록
		let x = 3;
		console.log(x);
	}
	console.log(x);
}
console.log(typeof x);

/*
결과
blue
3
blue
undefined
*/


// p194 (2)
{
	//외부 블록
	let x = {color : 'blue'};
	let y = x;	//y와 x는 같은 객체 가리킴.
	let z = 3;
	{
		//내부 블록
		let x = 5;	// 바깥 x는 가려짐
		console.log(x);
		console.log(y.color);
		y.color = 'red';
		console.log(z);	//z는 숨겨지지 않음.
	}
	console.log(x.color);
	console.log(y.color);	//객체는 내부 스코프에서 수정 됐고, x와 y는 같은 객체를 가리킴.
	console.log(z);
}

/*
결과
5
blue
3
red
red
3
*/


// p196 (1)
let globalFunc;	//정의되지 않은 전역 함수
{
	let blockVar = 'a';
	globalFunc = function() {
		console.log(blockVar);	// 결과 : a
	}
}
globalFunc();


// p196 (2)
let f;
{ let o = {note : 'Safe'};
	f = function() {
		return o;
	}
}
let oRef = f();
oRef.note = "Not so safe after all!";
console.log(oRef.note);


/*
결과
Not so safe after all!
*/

// p197 
const message = (function() {
	const secret = "I'm a secret!";
	return `The secret is ${secret.length} characters long.`;
})();
console.log(message);	//The secret is 13 characters long.


// p198 (1)
const f = (function() {
	let count = 0;
	return function() {
		console.log(`I have been called ${++count} time(s).`);
		//return `I have been called ${++count} time(s).`;
	}
})();
f();
f();
/*
결과
return 주석처리 하면
I have been called 1 time(s).
I have been called 2 time(s).

안하면
I have been called 1 time(s).
I have been called 3 time(s).
*/


// p198 (2)
let var1;
let var2 = undefined;
console.log(var1);
console.log(var2);
console.log(undefinedVar);
/*
결과
undefined
undefined
에러 : undefinedVar is not defined
=> 아직 선언되지 않은 변수는 에러를 일으키지만, 존재하되 값이 undefined인 변수는 에러를 일으키지 않음.
*/


// p199 
console.log(x);	//x가 정의되지 않아 에러 발생
let x = 3;

console.log(y);	//undefined
var y = 5;
console.log(y);	//5

/* => let을 쓰면, 변수를 선언하기 전 사용 시 에러 남. var로 변수 선언하면 선언 전에도 사용 가능
var로 선언한 변수는 호이스팅(끌어올린다는 뜻)을 따르기 때문에 사용 가능.
함수나 전역 스코프 전체를 살펴보고 var로 선언한 변수를 맨 위로 끌어올림.(선언만 끌어올리고, 할당은 끌어올리지 않음)
*/


// p200 (1)
if (x !== 3) {
	console.log(y);
	var y = 5;
	if (y === 5) {
		var x = 3;
	}
	console.log(y);
}
if (x === 3) {
	console.log(y);
}

/*
결과
undefined
5
5

=> var 변수 선언을 끌어올려 x는 undefined 이기 때문에 첫 if문을 만족하게 됨
*/


// p200 (2)
var x = 3;
if (x ===3) {
	var x = 2;
	console.log(x);
}
console.log(x);

/*
결과
2
2

=> 함수나 전역 스코프 안에서는 var로 새 변수 만들 수 없음. let으로 가능했던 변수 숨김도 불가능함.
블록 안에서 두번째 var문 썼지만 변수 x는 하나뿐.
*/


// p201 
f();	// f => 함수 선언도 스코프 맨 위로 끌어올려짐. 함수 선언하기 전에 호출 할 수 있다.
function f() {
	console.log('f');
}

// p202 (1) 
f();	// ReferenceError: f is not defined => 변수에 할당한 함수 표현식은 끌어올려지지 않는다.
let f = function() {
	console.log('f');
}

// p202 (2) 
if(typeof x === "undefined") {
	console.log("x doesn't exist or is undefined");
} else {
	// x를 사용해도 안전한 코드
}

/*
결과
x doesn't exist or is undefined
=> typeof : 변수가 선언됐는지 알아볼 때 널리 쓰임, 존재를 확인하는 안전한 방법으로 알려짐
let 키워드 도입되고 변수 사각지대 생기기 전에는 코드는 항상 안전하며 에러 발생하지 않았음
*/

// p202 (2) 
if(typeof x === "undefined") {
	console.log("x doesn't exist or is undefined");
} else {
	// x를 사용해도 안전한 코드
}
let x = 5;

/*
결과
ReferenceError: x is not defined
* 사각지대 : let으로 선언하는 변수는 선언하기 전까지 존재하지 않는다는 직관적 개념을 잘 나타낸 표현
*/


// p204  
(function() {
	'use strict';

	/*코드를 전부 이 안에 작성
	이 코드는 스트릭트 모드로 동작하지만, 이 코드와 함께 동작하는 다른 스크립트는 스트릭트 모드에 영향받지 않음.
	*/
})();