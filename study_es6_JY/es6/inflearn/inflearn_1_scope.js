1. let

var name = "global var";

function home() {
	var homevar = "homevar";
	for (var i = 0; i<100; i++) {
	}
	console.log(i);	//100
}
home();

/*
home() 함수 실행, 밖의 전역변수가 함수 안에서 접근 가능하지만
var의 지역변수가 우선이기 때문에 지역변수 값을 먼저 찾고 scope 따라 name 값을 찾는다
*/

var name = "global var";

function home() {
	var homevar = "homevar";
	for (let i = 0; i<100; i++) {
	}
	console.log(i);	// 에러나옴
}
home();

/* for 문 안에서만 유효한 값이라 에러 나옴
for문 안에서 출력하면 0~100까지 출력
for문이나 if문과 같이 블록 단위의 scope가 let에서는 지원이 됨. 블록 안에서만 실행? */



2. closure
colsure 변수 : 밖의 i값을 참조를 유지하면서 for문 안에서 계속 똑같은 값을 갖고 있다..?
이때 for문에서 var -> let으로 선언하면 블록이 갖고 있는 특정 변수를 기억하고 있다가 참조?

3. const
function home() {
	const homename = "my house";
	homename = "your house";
	console.log(homename);	// 에러 나옴. const는 타입에 상관없이 재할당하면 에러남. homename이 배열이라도 동일함
}
home();

- const를 기본으로 사용,
- 변경이 될 수 있는 변수는 let 사용.
- var는 사용하지 않음.
- const를 사용하더라도 배열과 오브젝트의 값을 변경할 수 있다.(const는 불변을 의미하는 것은 아니다)

4. ES2015 string에 새로운 매서드들.
1) startsWith - 시작이 일치하는 문자열인지
ex) 
let str = "hello world ! ";
let matchstr = "hello";
str.startsWith(matchstr));
// 결과 : true

2)endsWith - 끝이 일치하는 문자열인지
let str = "hello world ! ";
let matchstr = "^ !";
str.endsWith(matchstr));
// 결과 : false

3)includes - 매칭되는 문자열이 있는지
ex)
let str = "hello world ! ";
str.includes("world");
// 결과 : true