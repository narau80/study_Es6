
//console.log('-----6.1 반환 값 -----');
function sayHello(){
	console.log('Hello world!');
	console.log('Hallo wereld!');
}
//sayHello();


//console.log('-----6.2 호출과 참조 -----');
function getGreeting(){
	return "Hello world!!";
};
//console.log(getGreeting());

//변수에 할당& 호출
const g= getGreeting;
//console.log(g());

//객체 프로퍼티에 할당 & 호출
const o={};
o.f=getGreeting;
//console.log(o.f());

//배열 요소로 할당& 호출
const arr=[1,2,3];
arr[1] =getGreeting;// [1, function getGreeting,3]
//console.log(arr[1]());



//console.log('-----6.3 argument, parameter -----');
function avg(a,b){
	return (a+b)/2;
}
//console.log(avg(5,10));

function f(x){
	//console.log(`f 내부: x= ${x}`);//3
	x=5;
	//console.log(`f 내부: x= ${x} (할당후)`);5
}

let x= 3;
//console.log(`f를 호출하기 전 : x =${x}`);//3
f(x);
//console.log(`f를 호출한 다음 : x =${x}`);//3

function fn(o1){
	o1.message=`f 안에서 수정함(이전값 : '${o1.message}')`;//초기값
}
let o1={
	message:"초기값"
};
//console.log(`fn를 호출하기전 : o1.message='${o1.message}'`);//초기값
fn(o1);
//console.log(`fn를 호출한 다음 : o1.message='${o1.message}'`);//f 안에서 수정함(이전값 :초기값)

function fun(z){
	z.message ='fun에서 수정함';
	z={
		message:'새로운 객체!'
	};
	//console.log(`fun 내부 :z.message ='${z.message}' (할당 후)`);//새로운 객체
}
let z={
	message:'초기값'
};
//console.log(`f를 호출하기 전:z.message ='${z.message}'`);//초기값
fun(z);
//console.log(`f를 호출한 후:z.message ='${z.message}'`);//fun에서 수정함

function a(x){
	return `in f: x=${x}`;
}
//console.log(a());//in f: x=undefined

function getSentence({subject, verb,object}){
	return `${subject} ${verb} ${object}`;
}
const s = {
	subject:'I',
	verb:'love',
	object:'Javascript',
};
//console.log(getSentence(s));

function getSentence2([subject, verb,object,z]) {
	return `${subject} ${verb} ${object} ${z}`;
}
const ar=['I','love','Javascript'];
//console.log(getSentence2(ar));


function addPrefix(prefix,...words){
	const prefixedWords =[];
	for(let i=0;i<words.length;i++){
		prefixedWords[i] = prefix + words[i];
	}
	return prefixedWords;
}
//console.log(addPrefix('con','verse','vex')); //[ 'converse', 'convex' ]


function ff(a,b='default',c=3) {
	return `${a} - ${b} - ${c}`;
}
//console.log(ff(5,6,7));//5 - 6 -7
//console.log(ff(5,6));//5 - 6 - 3
//console.log(ff(5));//5 - default - 3
//console.log(ff());//undfined - default - 3


//console.log('-----6.4 method -----');
const y = {
	name: 'Wallace', //원시 값 프로퍼티
	bark: function(){ return 'Woof!';}, //함수 프로퍼티(메서드)
}

const y2 ={
	name:'Wallace',//원시 값 프로퍼티
	bark(){return 'Woof!';},//함수 프로퍼티(메서드)
}

//console.log(y2.name + ", "+ y2.bark());




//console.log('-----6.5 this -----');
const y3={
	name:'wallace',
	speak(){return `My name is ${this.name}!`;},
}

//console.log(y3.speak());
const speak = y3.speak;
//console.log(speak === y3.speak);//true  같은 함수를 가르킴.
//console.log(speak());

const y4={
	name:'Julie',
	greetBackwards: function(){
		const self= this; //this를 다른 변수에 할당
		function getReversName(){
			let nameBackwards='';
			for(let i= self.name.length -1; i>=0;i--){
				nameBackwards += self.name[i];
			}
			return nameBackwards;
		}
		return `${getReversName()} si eman ym, olleH`;
	},
};
//console.log(y4.greetBackwards());


//console.log('-----6.6 anonymous function -----');
//함수 표현식 : 다른 곳에 할당하거나 다름 한수에 넘길 목적으로 함수를 만들때 사용
//함수 선언 : 나중에 호출할 때 사용
const fx= function(){
	console.log('anonymous function');
}
//fx();

//재귀함수일경우 함수안에서 자기자신의 함수를 호출할 경우
const gf= function func(stop){ 
	if(stop) console.log('f stopped');
	func(true);
};
//gf(false);


//console.log('-----6.7 arrow notation -----');
//화살표 함수는 익명함수를 만들어 다른 곳에 전달하려 할때 가장 유용함.
/*
	1. function 생략
	2. 함수에 매개변수가 단 하나뿐이라면 괄호() 생략
	3. 함수 바디에 표현식이 하나라면 중괄호와 return문도 생략
*/
//const f1 = function(){return 'hello!';}
const f1 = ()=>"hello!";
//console.log(f1());

//const f2 = function(name){return `Hello ${name}!`; }
const f2 = name => `Hello ${name}!`;
//console.log(f2('hy'));

//const f3= function(a,b){return a+ b};
const f3 = (a,b)=>  a+b;
//console.log(f3('a','b'));

const f4={
	name:'Julie',
	greetBackwards: function(){
		const getReversName = () =>{
			let nameBackwards='';
			for(let i= this.name.length -1; i>=0;i--){
				nameBackwards += this.name[i];
			}
			return nameBackwards;
		}
		return `${getReversName()} si eman ym, olleH`;
	},
};
//console.log(f4.greetBackwards());


//console.log('-----6.8 call, apply,bind -----');
const bruce ={name:'bruce'};
const madeline ={name:'Madeline'};

function greet(){
	return `Hello, I'm ${this.name}!`;
}
//call메서드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있습니다.
//console.log(greet());//Hello, I'm undefined!
//console.log(greet.call(bruce));//Hello, I'm bruce!
//console.log(greet.call(madeline)); //Hello, I'm Madeline!

//함수를 호출하면서 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체의 메서드인 것처럼 사용가능
function update(birthYear, occupation){
	this.birthYear = birthYear;
	this.occupation = occupation;
	return this;
}
//console.log(update.call(bruce,1949,'singer'));//(this,매개변수, 매개변수)
//{name:'brue',birthYear:1949,occupation:'singer'}
//console.log(update.call(madeline,1942,'actress'));
//{name:'madeline',birthYear:1942,occupation:'actress'}

//apply는 배열요소를 함수 매개변수로 사용해야 할 때 유용함.
//console.log(update.apply(bruce,[1949,'singer']));
//{name:'brue',birthYear:1949,occupation:'singer'}
//console.log(update.apply(madeline,[1942,'actress']));
//{name:'madeline',birthYear:1942,occupation:'actress'}

const numArray = [2,3,-5,5,8,15];

//첫번재 매개변수가 null인이유는 this와 관계없이 동작하기 때문
//즉, 무엇을 넘기든 상관없음.
//console.log(Math.min.apply(null,numArray));
//console.log(Math.max.apply(null,numArray));
//console.log(Math.min(-7,...numArray));
//console.log(Math.max(0,10,...numArray));

//bind는 함수의동작을 영구적으로 바꿈.
const updateBruce = update.bind(bruce);
console.log(updateBruce(1904, 'actor'));
//{ name: 'bruce', birthYear: 1904, occupation: 'actor' }
console.log(updateBruce.call(madeline,1272,'king'));
//{ name: 'bruce', birthYear: 1272, occupation: 'king' }

const updateBruce1949 = update.bind(bruce,1949);
console.log(updateBruce1949('singer,songwriter'));
//{ name: 'bruce',  birthYear: 1949,  occupation: 'singer,songwriter' }


