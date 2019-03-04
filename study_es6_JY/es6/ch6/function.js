// p167
function sayHello() {
	// 함수 바디는 여는중괄호로 시작하고

	console.log("Hello world!");
	console.log("i Hola mundo!");
	console.log("Hallo wereld!");

	//닫는 중괄호로 끝납니다.
}
sayHello();	// 함수를 호출해야 바디의 console.log 가 실행되어 화면에 노출

// p168~169
function getGreating() {
	return "Hello world!";
} //함수를 즉시 종료하고 값을 반환

//getGreating();	//console.log(getGreeting());	->	Hello world!
//getGreating;		//console.log(getGreating);	->	[Function:getGreating]

const f = getGreating; //함수를 변수에 할당 하면 변수명으로 함수를 호출
f(); //console.log(f()); -> "Hello world!"

const o = {};
o.f = getGreating; // 함수를 객체 프로퍼티에 할당
o.f();	//console.log(o.f());	->	Hello world!

const arr = [1,2,3]; 
arr[1] = getGreating; // 배열 요소에 할당 
arr[1](); //console.log(arr[1]());	->	Hello world!

// p170
function avg(a,b){     // a와 b를 정해진 매개변수
	return (a + b) / 2;
}
avg(5, 10); //7.5
//console.log(avg(5,10));

const a = 5 , b = 10;
console.log(`${a}, ${b}`);
avg(a, b);
console.log(avg(a, b));

// p171
function f(x){
	console.log(`f 내부: x = ${x}`);
	x = 5;
	console.log(`f 내부: x = ${x} (할당 후)`);
}

let x = 3;
console.log(`f를 호출하기 전: x = ${x}`);
f(x);
console.log(`f를 호출한 다음: x = ${x}`);

/*
	실행결과 책 참조
*/

// p172 (1)
function f(o){
	o.message = `f 안에 수정함 (이전 값: '${o.message}')`;
}
let o = {
	message: "초기 값"
};

console.log(`f를 호출하기 전 : o.message = "${o.message}"`);
f(o);
console.log(`f를 호출한 다음 : o.message = "${o.message}"`);

// f를 호출하기 전: o.message = "초기 값"
// f를 호출한 다음 : o.message="f 안에서 수정함 (이전 값: '초기 값')"


// p172 (2)
function f (o){
	o.message = "f에서 수정함";
	o = {
		message : "새로운 객체!"
	};
	console.log(`f 내부: o.message = "${o.message}" (할당 후)`);
}

let o = {
	message: '초기값'
};
console.log(`f를 호출하기 전: o.message = "${o.message}"`);
f(o);
console.log(`f를 호출한 다음: o.message = "${o.message}"`);

/*
"f를 호출하기 전: o.message = \"초기값\""
"f 내부: o.message = \"새로운 객체!\" (할당 후)"
"f를 호출한 다음: o.message = \"f에서 수정함\""
*/


// p173
function f(x) {
	return `in f: x = ${x}`;
}
f();
//console.log(f());	-> in f: x = undefined


//p174 (1)
function getSentence({ subject, verb, object}) {
	return `${subject} ${verb} ${object}`;
}

const o = {
	subject: "I",
	verb : "love",
	object : "JavaScript",
};

console.log(getSentence(o));	// I love JavaScript


// p174 (2)
function getSentence([ subject, verb, object]) {
	return `${subject} ${verb} ${object}`;
}
const arr = ["I", "love", "JavaScript"];
getSentence(arr);
console.log(getSentence(arr));	// I love JavaScript

// p175 (1)
function addPrefix(prefix, ...words) {
	const prefixedWords = [];
	console.log(words);	//["verse", "vex"]
	for(let i = 0; i < words.length; i++) {
		prefixedWords[i] = prefix + words[i];
	}
	return prefixedWords;
}
console.log(addPrefix("con", "verse", "vex"));	//["converse", "convex"]

// p175 (2)
function f(a, b = "default", c = 3) {
	return `${a} - ${b} - ${c}`;
}
f(5,6,7); 
console.log(f(5,6,7)); // "5 - 6 - 7"
f(5,6); 
console.log(f(5,6)); // "5 - 6 - 3"
f(5); 
console.log(f(5)); // "5 - default - 3"
f(); 
console.log(f()); // "undefined - default - 3"


//p176
const o = {
	name : "Wallace",
	bark : function() {return 'Woof!';},
}
console.log(o);
console.log(o.bark());
//위와 아래는 동일, {name : 'Wallace', bark : [Function : bark]}
//메서드?!를 호출하면 "Woof!"
const b = {
	name : "Wallace",
	bark() {return 'Woof!';},
}
console.log(b);
console.log(b.bark());

// p177
const o = {
	name : "Wallace",
	speak() {return `My name is ${this.name}`;}, //this는 o에 묶임
}	//this가 o에 묶인 이유는 speak가 o의 프로퍼티여서가 아니라, o에서 speak를 호출했기 때문

console.log(o.speak());	//My Name is Wallace

const speak = o.speak;
speak === o.speak; 
console.log(speak === o.speak); // true; 두 변수는 같은 함수를 가리킵니다.
speak(); 
console.log(speak());// my name is undefined;

// p178 (1)
const o = {
	name : 'julie',
	greetBackwards: function() {
		function getReversName() {
			let nameBackward = '';
			for(let i=this.name.length-1; i >=0; i--){
				nameBackward += this.name[i];
			}
			return nameBackward;
		}
		return `${getReversName()} si eman ym, olleH`;
	},
};
o.greetBackwards();
console.log(o.greetBackwards());	//에러발생

// p178 (2)
const o = {
	name : 'julie',
	greetBackwards: function() {
		const self = this;
		function getReversName() {
			let nameBackward = '';
			for(let i = self.name.length -1; i >=0; i--){
				nameBackward += self.name[i];
			}
			return nameBackward;
		}
		return `${getReversName()} si eman ym, olleH`;
	},
}
o.greetBackwards();
console.log(o.greetBackwards());	//eiluj si eman ym, olleH


// p179 
const f = function(){
	// ....

};
/* 함수의 선언과 동등. 식별자 f가 이 함수를 가리킨다.
일반적인 함수 선언과의 차이점은 함수 표현식으로 익명 함수를 만든 다음 그 함수를 변수에 할당한 점.
*/

// p180 (1)
const g = function f(){
	// ....

} 
/* 함수에 이름을 정하고 다시 변수에 할당하면?
이름 g에 우선순위가 있음. 함수 바깥에서 함수에 접근할 때는 g를 써야 한다. f로 접근하면 변수가 정의되지 않았다는 에러 발생
아래 예제와 같이 함수 안에서 자기 자신을 호출할 때(재귀) 이런 방식이 필요할 수 있음.
*/

// p180 (2)
const g = function f(stop) {
	if(stop) console.log('f stopped');
	f(true);
};
g(false);
console.log(g()); // 결과 : f stopped 이 매우 많이 출력되다가 멈춤.
/*
함수 안에서는 f를 써서 자기 자신을 참조, 함수 바깥에서는 g를 써서 함수를 호출.
(이름 붙은 함수 표현식이 어떻게 동작하는지 보기 위함이며, 함수에 두 가지 이름 붙이는 건 좋지 않음)
*/


//p181
//화살표 표기법 (새로추가)
//function 을 생략해도 된다
//함수에 매개변수가 단 하나 뿐이라면 (())도 생략할 수 있다.
//함수 바디가 표현식 하나라면 중괄호와 return 문도 생략할 수 있다.

const f1 = function() {return "hello!";}
//또는
const f1 = () => "hello!";

const f2 = function(name) {return `hello, ${name}!`;}
//또는
const f2 = name => `hello, ${name}!`;

const f3 = function(a, b){return a + b;}
//또는
const f3 = (a,b) => a + b;

// p182
const o = {
	name : 'julie', 
	greetBackwards: function(){
		const getReversName = () => {
			let nameBackwards = '';
			for(let i = this.name.length-1; i >= 0; i--){
				nameBackwards += this.name[i];
			}
			return nameBackwards;
		};
		return `${getReversName()} si eman ym , olleH`;
	},
};
o.greetBackwards();
console.log(o.greetBackwards());	//eiluj si eman ym , olleH

//p183 (1)
//call 메서드
//call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있다.

const bruce = {name : "Bruce"};
const madeline = {name : "Madeline"};

//이 함수는 어떤 객채에도 연결되지 않았지만 this를 사용한다.
function greet() {
	return `Hello, I'm ${this.name}!`;
}

greet();
console.log(greet());	//"Hello, I'm  undefined!" - this는 어디에도 묶이지 않았습니다.
greet.call(bruce);
console.log(greet.call(bruce));	//"Hello, I'm  Bruce!" - this는 bruce
greet.call(madeline);
console.log(greet.call(madeline));	//"Hello, I'm  Madeline!" - this는 madeline


// p183 (2) ~ 184 (1)
const bruce = {name : "Bruce"};
const madeline = {name : "Madeline"};

console.log(bruce);	//{name : "Bruce"};
console.log(madeline);	//{name : "Madeline"};

function update(birthYear, occupation) {
	this. birthYear =  birthYear;
	this. occupation =  occupation;
}

//call의 첫번째 매개변수는 this로 사용할 값, 매개변수가 더 있으면 그 매개변수는 호출하는 함수로 전달(매개변수를 직접 받음)
update.call(bruce, 1949, 'singer');
console.log(bruce);	// {name : "Bruce", birthYear: 1949, occupation: "singer"} 
update.call(madeline, 1942, 'actress');
console.log(madeline);	//{ name: 'Madeline', birthYear: 1942, occupation: 'actress' }

// apply는 매개변수를 배열로 받음. 그 외엔 call과 완전히 같음
update.apply(bruce, [1955, "actor"]);
console.log(bruce);	//{name : "Bruce", birthYear: 1955, occupation: "actor"} 
update.apply(madeline, [1918, "writer"]);
console.log(madeline);	//{ name: 'Madeline', birthYear: 1918, occupation: 'writer' }


// p184 (2)
//apply는 배열 요소를 함수 매개변수로 사용할 때 유용함
const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr);
console.log(Math.min.apply(null, arr));	// -5
Math.max.apply(null, arr); 
console.log(Math.max.apply(null, arr));	// 15

// p184 (3)
const bruce = {name : "Bruce"};
const arr = [2, 3, -5, 15, 7];

function update(birthYear, occupation) {
	this. birthYear =  birthYear;
	this. occupation =  occupation;
}

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);
Math.min(...arr);
console.log(Math.min(...arr));	//-5
console.log(Math.max(...arr)); // 15


// p185 (1)
//this의 값을 바꿀수 있는 마지막 함수는 bind
//bind를 사용하면 함수의 this 값을 영구히 바꿀수 있다.
const bruce = {name : "Bruce"};
const madeline = {name : "Madeline"};

function update(birthYear, occupation) {
	this. birthYear =  birthYear;
	this. occupation =  occupation;
}

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
console.log(bruce);	//{ name: 'Bruce', birthYear: 1904, occupation: 'actor' }
console.log(madeline);	//{ name: 'Madeline' }
updateBruce.call(madeline, 1274, "king");
console.log(bruce);	//{ name: 'Bruce', birthYear: 1274, occupation: 'king' }
console.log(madeline);	//{ name: 'Madeline' }

// p185 (2)
//bind는 함수의 동작을 영구적으로 바꿈 
const bruce = {name : "Bruce"};

function update(birthYear, occupation) {
	this. birthYear =  birthYear;
	this. occupation =  occupation;
}

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
console.log(bruce);
/*{ name: 'Bruce',
  birthYear: 1949,
  occupation: 'singer, songwriter' }
*/