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

	// �̸��� value ���� ��ġ�Ѵٸ� �� return���� �Ʒ��� ���� ���� �� �� �ִ�. �̷� key������ object�� ���� ������ �� �ִ�.
	return{getName, setName}
}

var obj = getObj();
//console.log(obj);	//{ getName: [Function: getName], setName: [Function: setName] }
console.log(obj.getName()); //crong
console.log(obj); 
/*
return{getName, setName, name}���� ���� �� ����ϸ� �����
{ getName: [Function: getName],
  setName: [Function: setName],
  name: 'crong' }
  => ���ο� object ��ȯ�� �� �ִ�.
*/

3)
const data = {
	name,
	getName() {
	},
	age
}

//object ���ͷ��� ���� ���� ���� �ִ�..