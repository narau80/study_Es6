

let obj = {
	name:'crong',
	address:'korea',
	age:10
}

let {name,age} = obj;
console.log(name,age);


//다른이름으로 저장해서 사용가능
//필요한 key,value값을 뽑아낼 수 있음.
let {name:myName, age:myAge} = obj; //할당
console.log(myName, myAge);