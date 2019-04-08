const x=3;

function f(){
	console.log(x);
	//console.log(y); //error - y is not defined.
}

{
	const y = 5;
	f();
}

