function sayHello(){
	console.log('Hello world!');
	console.log('Hallo wereld!');
}
//sayHello();

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
console.log(ff(5,6,7));//5 - 6 -7
console.log(ff(5,6));//5 - 6 - 3
console.log(ff(5));//5 - default - 3
console.log(ff());//undfined - default - 3