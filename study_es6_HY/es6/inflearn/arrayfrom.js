//ES6 from method

function addMark(){
	let newData=[];
	//가변적인 parameter가 들어올때 arguments사용
	for(let i=0;i<arguments.length;i++){ 
		newData.push(arguments[i] +'!');
	}

	
	//arguments는 배열이 아니라서 map을 사용할 수 없음.
	// let newData2 = arguments.map(function(vaule){
	// 	return value +'!';
	// })

	//from으로 배열을 만들어사용
	let newArray= Array.from(arguments);
	let newData2 = newArray.map(function(value){
		return value +'!';
	})

	console.log(newData);
	console.log(newData2);
}

addMark(1,2,3,4,5);