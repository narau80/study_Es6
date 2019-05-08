//p206
//배열 리터럴
const arr1 = [1,2,3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1,2,3], ["one", 2, "three"]];
const arr4 = [
	{ name : "Fred", type : "object", luckyNumbers = [5,7,13]},
	[
		{name : "Susan", type : "object"},
		{name : "Anthony", type : "object"},
	],
	1,
	function() {return "arrays can contain functions too";},
	"three",
];

//배열 요소에 접근하기
arr1[0];
arr2[2];
arr3[1];
arr4[1][0];

//배열길이
arr1.length;
arr4.length;
arr4[1].length;

//배열 길이 늘리기
arr1[4] = 5;
arr1;
arr1.length;

//배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로 배열의 길이가 늘어나지는 않음.
arr2[10];
arr2.length;

//Array 생성자(거의 사용안함)
const arr5 = new Array();
const arr6 = new Array(1,2,3);
const arr7 = new Array(2);
const arr8 = new Array("2");

* push & pop : 각각 배열의 끝에 요소를 추가하거나 제거
* shift & unshift : 각각 배열의 처음에 요소를 제거하거나 추가

// p207
const arr = ["b", "c", "d"];
console.log(arr);
arr.push("e");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("a");
console.log(arr);
arr.shift();
console.log(arr);

/*결과
[ 'b', 'c', 'd' ]
[ 'b', 'c', 'd', 'e' ]
[ 'b', 'c', 'd' ]
[ 'a', 'b', 'c', 'd' ]
[ 'b', 'c', 'd' ]
*/


* concat : 배열의 끝에 여러 요소를 추가한 사본을 반환

// p208 (1)
const arr = [1,2,3];
console.log(arr.concat(4,5,6));
console.log(arr.concat([4,5,6]));
console.log(arr.concat([4,5],6));
console.log(arr.concat([4,[5,6]]));

/*
결과
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, [ 5, 6 ] ]
arr는 바뀌지 않음
*/

* slice
- 배열의 일부만 가져옴. slice(어디서부터 가져올지, 어디까지 가져올지), 두번째 매개변수를 생략하면 배열의 마지막까지 반환.

// p208 (2)
const arr = [1,2,3,4,5];
console.log(arr.slice(3));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));
console.log(arr.slice(-2, -1));
console.log(arr);

/*
결과
[ 4, 5 ]
[ 3, 4]
[ 4, 5 ]
[ 2, 3 ]
[ 4 ]
[ 1, 2, 3, 4, 5 ]
arr는 바뀌지 않음
*/

* splice : 배열을 자유롭게 수정, splice(수정을 시작할 인덱스, 제거할 요소 숫자), 아무 요소도 제거하지 않을 때는 0을 넘김, 나머지 매개변수는 배열에 추가될 요소

// p209 (1)
const arr = [1,5,7];
console.log(arr.splice(1,0,2,3,4));
console.log(arr);

console.log(arr.splice(5,0,6));
console.log(arr);

console.log(arr.splice(1,2));
console.log(arr);

console.log(arr.splice(2,1,'a','b'));
console.log(arr);

/*
결과
[]
[ 1, 2, 3, 4, 5, 7 ]
[]
[ 1, 2, 3, 4, 5, 6, 7 ]
[ 2, 3 ]
[ 1, 4, 5, 6, 7 ]
[ 5 ]
[ 1, 4, 'a', 'b', 6, 7 ]
*/

*copyWithin 
- 배열 요소를 복사해서 다른 위치에 붙여놓고, 기존의 요소를 덮어씀. 
- copyWithin(복사한 요소를 붙여넣을 위치, 복사를 시작할 위치, 복사를 끝낼 위치)
- es6에서 도입한 새 메서드

// p209 (2)
const arr = [1,2,3,4];
console.log(arr.copyWithin(1,2));
console.log(arr.copyWithin(2,0,2));
console.log(arr.copyWithin(0,-3,-1));

/*
결과
[ 1, 3, 4, 4 ]
[ 1, 3, 1, 3 ]
[ 3, 1, 1, 3 ]
*/

* fill
- 정해진 값으로 배열을 채움, es6에서 도입한 새 메서드

// p210 (1)
const arr = new Array(5).fill(1);
console.log(arr);
console.log(arr.fill("a"));
console.log(arr.fill("b",1));
console.log(arr.fill("c",2,4));
console.log(arr.fill(5.5,-4));
console.log(arr.fill(0,-3,-1));

/*
결과
[ 'a', 'a', 'a', 'a', 'a' ]
[ 'a', 'b', 'b', 'b', 'b' ]
[ 'a', 'b', 'c', 'c', 'b' ]
[ 'a', 5.5, 5.5, 5.5, 5.5 ]
[ 'a', 5.5, 0, 0, 5.5 ]
*/

*reverse : 배열의 순서를 반대로

// p210 (2)
const arr = [1,2,3,4,5];
console.log(arr.reverse());	//[ 5, 4, 3, 2, 1 ]

* sort : 배열 요소의 순서 정렬

// p210 (3)
const arr = [5,3,2,4,1];
console.log(arr.sort());	//[1,2,3,4,5]

sort는 정렬 함수를 받을 수 있다(객체가 들어있는 배열을 정렬할 수 없지만, 정렬 함수를 사용하면 가능)
// p210 (4)
const arr = [{name : "Suzanne"}, {name : "Jim"},
		{name : "Trevor"}, {name : "Amanda"}];
console.log(arr.sort());
console.log(arr.sort((a,b) => a.name > b.name));
console.log(arr.sort((a,b) => a.name[1] < b.name[1]));

/*
결과
[ { name: 'Suzanne' },
  { name: 'Jim' },
  { name: 'Trevor' },
  { name: 'Amanda' } ]	
arr은 바뀌지 않음.

[ { name: 'Amanda' },
  { name: 'Jim' },
  { name: 'Suzanne' },
  { name: 'Trevor' } ]
arr은 name 프로퍼티의 알파벳 순으로 정렬

[ { name: 'Suzanne' },
  { name: 'Trevor' },
  { name: 'Amanda' },
  { name: 'Jim' } ]
arr은 name 프로퍼티의 두 번째 글자의 알파벳 역순으로 정렬
*/

* indexOf : 찾고자 하는 것과 정확히 일치(===)하는 첫 번째 요소의 인덱스를 반환.
lastIndexOf는 배열의 끝에서부터 검색하며 둘다 일치하는 것을 찾지 못하면 -1을 반환

// p211
const o = {name : "Jerry"};
const arr = [1,5,"a",o,true,5,[1,2],"9"];
console.log(arr.indexOf(5));	//1
console.log(arr.lastIndexOf(5));	//5
console.log(arr.indexOf("a"));	//2
console.log(arr.lastIndexOf("a"));	//2
console.log(arr.indexOf({name : "Jerry"}));	//-1
console.log(arr.indexOf(o));	//3
console.log(arr.indexOf([1,2]));	//-1
console.log(arr.indexOf("9"));	//7
console.log(arr.indexOf(9));	//-1

console.log(arr.indexOf("a",5));	//-1
console.log(arr.indexOf(5,5));	//5
console.log(arr.lastIndexOf(5,4));	//1
console.log(arr.lastIndexOf(true,3));	//-1




// p212 (1)
const arr = [{id : 5, name : "Judith"}, {id : 7, name : "Francis"}];
console.log(arr.findIndex(o => o.id === 5));
arr.findIndex(o => o.name === "Francis");
arr.findIndex(o => o.id ===5);
arr.findIndex(o => o === 3);
arr.findIndex(o => o.id === 17);

// p212 (2)
const arr = [{id : 5, name : "Judith"}, {id : 7, name : "Francis"}];
arr.find(o => o.id === 5);
arr.find(o => o.id === 2);

// p212 (3)
const arr = [1,17,16,5,4,16,10,3,49];
arr.find((x,i) => i > 2 && Number.isInteger(Math.sqrt(x)));

// p213 (1)
class Person {
	constructor(name) {
		this.name = name;
		this.id = Person,nextId++;
	}
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
	juliet =  new Person("Juliet"),
	peter =  new Person("peter"),
	Jay =  new Person("Jay");
const arr = [jamie, juliet, peter, jay];

// 옵션 1 : ID를 직접 비교하는 방법
arr.find(p => p.id === juliet.id);

// 옵션 2 : "this" 매개변수를 이용하는 방법
arr.find(function (p)) {
	return p.id === this.id
}, juliet);


// p213 (2)
const arr = [5,7,12,15,17];
arr.some(x => x%2===0);
arr.some(x => Number.isInteger(Math.sqrt(x)));


// p214 (1)
const arr = [4,6,16,36];
arr.every(x => x%2 === 0);
arr.every(x => Number.isInteger(Math.sqrt(x)));


*map :배열 요소를 변형함.
// p214 (2)
const cart = [{name : "Widget", price : 9.95}, {name : "Gadget", price : 22.95}];
const name = cart.map(x => x.name);
console.log(name);	//[ 'Widget', 'Gadget' ]
const prices = cart.map(x => x.price);
console.log(prices);	//[ 9.95, 22.95 ]
const discountPrices = prices.map(x => x*0.8);
console.log(discountPrices);	//[ 7.96, 18.36 ]

// p215 (1)
const items = ["Widget", "Gadget"];
const prices = [9.95,22.95];
const cart = items.map((x,i) => ({name : x, price : prices[i]}));
//cart : [{name : "Widget", price : 9.95}, {name : "Gadget", price : 22.95}]


// p215 (2)
const cards = [];
for (let suit of ['H', 'C', 'D', 'S'])
	for (let value=1; value<=13; value++)
		cards.push({suit,value});
		//console.log(cards);

 cards.filter(c=>c.value===2);
 //console.log( cards.filter(c=>c.value===2));
 cards.filter(c=>c.suit==='D');
//console.log( cards.filter(c=>c.suit==='D'));
 cards.filter(c=>c.value>10);
//console.log( cards.filter(c=>c.value>10));
 cards.filter(c=>c.value>10 && c.suit == 'H');
//console.log( cards.filter(c=>c.value>10 && c.suit == 'H'));




 // p216
 function cardToString(c) {
	 const suits = {'H' : '\u2665', 'C' : '\u2663', 'D' : '\u2666', 'S' : '\u2660'};
	 const values = {1 :'A', 11 : 'J', 12: 'Q', 13 : 'K'};
	 for (let i=2; i<=10 ;i++) values[i] = i;
	 return values[c.value] + suits[c.suit];
 }

cards.filter(c=>c.value === 2)
	.map(cardToString);

card.filter(c=>c.value > 10 && c.suit === 'H');
	.map(cardToString);

/*
reduce : 배열 자체를 변형, 배열의 밗을 하나로 줄이는 동작, 반환값은 배열 또는 객체일 수 있음.
*/

const arr=[5,7,2,4];
/*
a: 누적값  				0 5 12 14 18			
x: 현재 배열 요소			5 7 2  4
0: 누적값은 0부터 시작(초기값) , 생략시 배열의 첫번째 요소
*/
const sum = arr.reduce((a,x)=>a += x,0);
const sum2 = arr.reduce((a,x)=>a+=x);
console.log(sum); //18
console.log(sum2); //18

const words=['Beachball','Rodeo','Angel','Aardvark','Xylophone','November','Chocolate','Papaya','Uniform','Jpker','Clover','Bali'];
const alphabetical =words.reduce((a,x)=>{
	console.log(a[x[0]]);
	if(!a[x[0]]) a[x[0]]=[];
	a[x[0]].push(x);
	return a;
	}, {});

console.log(alphabetical);

/*
{ B: [ 'Beachball', 'Bali' ],
  R: [ 'Rodeo' ],
  A: [ 'Angel', 'Aardvark' ],
  X: [ 'Xylophone' ],
  N: [ 'November' ],
  C: [ 'Chocolate', 'Clover' ],
  P: [ 'Papaya' ],
  U: [ 'Uniform' ],
  J: [ 'Jpker' ] }


*/

const data= [3.3,5,7.2,12,4,6,10.3];

const stats =data.reduce((a,x)=> {
	a.N++;
	let delta = x - a.mean;
	a.mean += delta/a.N;
	a.M2 += delta*(x=a.mean);
	return a;
},{N:0,mean:0,M2:0});

if(stats.N >2){
	stats.variance = stats.M2 / (stats.N -1);
	stats.stdev = Math.sqrt(stats.variance);
}

console.log(stats);


// p220
es5에서 배열 초기화할때
const arr = Array(10).map(function(x) {return 5});
console.log(arr); //[ <10 empty items> ]


const arr = [1,2,3,4,5];
delete arr[2];
arr.map(x=>0);
console.log(arr);	//[ 1, 2, <1 empty item>, 4, 5 ]

// p221 
join
- 매개변수로 구분자 하나를 받고 요소들을 하나로 합친 문자열을 반환, 매개변수 생략 시 기본값은 쉼표
- 문자열 요소를 합칠 때 정의되지 않은 요소, 삭제된 요소, null, undefined는 모두 빈 문자열로 취급
const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
console.log(arr);
console.log(arr.join());
console.log(arr.join(''));
console.log(arr.join(' -- '));

/*
결과
[ 1, null, 'hello', <1 empty item>, true, undefined ]
1,,hello,,true,
1hellotrue
1 --  -- hello --  -- true --
*/

