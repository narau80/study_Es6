1. for ~ of
- for ~ of : 자신이 갖고 있지 않는 값은 출력하지 않는다. for ~ in 를 사용했을때 문제점을 개선?
- for ~ in 은 object 를 순회할 때 사용
(배열도 일종의 object라 순회가 되지만 자기 자신이 갖고있지 않은 상위의 추가된 값들까지 결과를 나타낼 수 있다
=> 배열에서 사용 x)
- for 나 foreach 외에도 for ~ of를 통해 배열을 쉽게 순회할 수 있다.
- 문자열을 문자 단위로 돌면서 그 값을 출력해주기도함.

2. spread operator : 펼침연산자 (...)
... 뒤의 값을 펼쳐준다
ex1) 
let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);
/*같은 값이 나온다. 그러나 두개는 다른 데이터다.
같은 참조를 유지하지 않고 복사를 함.
*/

ex2)
let pre = ["apple", "orange", 100, null];
let newData = [0,1,2, ...pre, 4];	//[ 0, 1, 2, 'apple', 'orange', 100, null, 4 ]
//배열 사이에 값을 복사해서 넣고싶을때 펼침연산자 사용. pre와 newData는 상관없다. 펼침연산자를 통해 기존보다 쉽게 필요한 위치에 다른 값을 불러올 수 있다

ex3)
function sum(a,b,c) {
	return a+b+c;
}
let pre = [100,200,300];

console.log(sum.apply(null,pre));	//600, 펼침연산자 전에는 이 방법 사용. apply : 배열 그대로를 전달
console.log(sum(...pre));	//600, apply 이용해서 불필요하게 null값 넣을 필요없어짐. 

=> 배열값을 매개변수로 할당하는게 쉬워짐.
배열을 바꾸지 않고 새로운 값을 복사할 수 있음. 배열을 합치거나 새로운 함수의 파라미터로 전달할 때 유용하게 쓸 수 있음.


3. from
function addMark() {
	let newData= [];
	for (let i = 0; i<arguments.length; i++ ) {
		newData.push(arguments[i] + "!");
	}
	console.log(newData);	//[ '1!', '2!', '3!', '4!', '5!' ]
}
addMark(1,2,3,4,5);

//arguments : 인자값을 주지 않아도 지역변수 내 특별한 변수값을 이용하여 인자들을 배열과 비슷한 형태로 나오게..? 객체.가변적인 파라미터가 들어올때 가끔 사용하며, 권장하진 않음

function addMark() {
	let newArray = Array.from(arguments);	//arguments로 부터 배열을 만든다? arguments는 진짜 배열이 아니기 때문
	let newData= arguments.map(function(value) {
		return value + "!";
	});
	console.log(newData);
}
addMark(1,2,3,4,5);