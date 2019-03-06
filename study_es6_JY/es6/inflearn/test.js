function addMark() {
	let newData= arguments.map(function(value) {
		return value + "!";
	});
	console.log(newData);	//[ '1!', '2!', '3!', '4!', '5!' ]
}
addMark(1,2,3,4,5);