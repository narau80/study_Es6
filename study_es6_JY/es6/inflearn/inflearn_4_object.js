1. object
const name = "crong";
const age = 33;

const obj = {
	name : name,
	age : age
}
console.log(obj);	//{ name: 'crong', age: 33 }




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

	return {
		getName : getName,
		setName : setName
	}
}

var obj = getObj();
console.log(obj);
console.log(obj.getName());