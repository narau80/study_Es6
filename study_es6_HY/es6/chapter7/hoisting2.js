if(x !== 3){
	console.log(y); //undefined
	var y = 5;
	if(y===5){
		var x =3;
	}
	console.log(y); //5
}
if(x === 3){
	console.log(y);//5
}