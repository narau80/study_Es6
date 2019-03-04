

// const name ='crong';
// const age=33;
// const obj={
// 	name:name,
// 	age:age,
// }
// console.log(obj);

function getObj(){
	const name='crong';
	const getName= function(){
		return name;
	}
	const setName= function(){
		name=newName;
	}
	const printName=function(){
		console.log(name);
	}

	// return{
	// 	getName: getName,
	// 	setName: setName
	// }

	//name과 value값이 동일하다면 아래와 같이 return할수 있다.
	return{getName, setName}
}

let obj= getObj();
console.log(obj);//{ getName: [Function: getName], setName: [Function: setName] }
console.log(obj.getName());

// const data={
// 	name,
// 	getName(){

// 	},
// 	age
// }