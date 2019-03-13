1. object
1)
const name = "crong";
const age = 33;

const obj = {
	name : name,
	age : age
}
console.log(obj);	//{ name: 'crong', age: 33 }



2)
function getObj() {
	const name = "crong";
	const getName = function() {
		return name;
	}

	const setName = function(newname) {
		name = newname;
	}

	const printName = function() {
		console.log(name);
	}

	/*
	return {
		getName : getName,
		setName : setName
	}
	*/

	// 이름과 value 값이 일치한다면 위 return문을 아래와 같이 쉽게 쓸 수 있다. 이런 key값으로 object를 쉽게 선언할 수 있다.
	return{getName, setName}
}

var obj = getObj();
//console.log(obj);	//{ getName: [Function: getName], setName: [Function: setName] }
console.log(obj.getName()); //crong
console.log(obj); 
/*
return{getName, setName, name}으로 수정 후 출력하면 결과는
{ getName: [Function: getName],
  setName: [Function: setName],
  name: 'crong' }
  => 새로운 object 반환할 수 있다.
*/

3)
const data = {
	name,
	getName() {
	},
	age
}

//object 리터럴을 쉽게 만들 수도 있다..