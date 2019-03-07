1. Destructuring Array
let data = ["crong", "honux", "jk", "jinny"];
/*let jisu = data[0];
let jung = data[2];*/
//위와 같이 필요한 배열의 원소가 n개 있을 때 특정 인덱스에 있는 값에 의미가 있을때 그것을 뽑아 쓸 수 있다.

let [jisu,,jung] = data;
console.log(jisu, jung);	//crong jk
//0번째, 2번째 값을 가지고 jisu, jung 이란 이름으로 사용하겠다.
//변수에 배열이나 오브젝트에 필요한 값을 할당하는데 유용하게 사용.


2. Destructuring Object
let obj = {
	name : "crong",
	address : "Korea",
	age : 10
}

let {name, age} = obj;
console.log(name, age);	//crong 10

//다른 이름으로 바꿀 수도 있음
let {name:myName, age:myAge} = obj;	//<- = obj; 로 써서 할당.
console.log(myName);	//crong

3. Destructuring 활용