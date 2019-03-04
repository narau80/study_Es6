var name="global var";

function home(){
	var homevar='homevar';
	for(let i=0;i<100;i++){//let vs var
		//console.log(i);
	}
	//console.log(i); //var 일경우 100 , let일경우 error
	if(true){
		let myif='myif';
	}
	console.log(myif);//let은 block단위 scope라서 error
}
home();

