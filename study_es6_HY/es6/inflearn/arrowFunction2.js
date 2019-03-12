const myobj= {
	runTimeout(){
		setTimeout(function(){
			//console.log(this);
			this.printData();
		}.bind(this),200); // printData()함수 연결 bind()
	},
	printData(){
		console.log('hi codesquad!');
	}
}

myobj.runTimeout();


const myobj2= {
	runTimeout(){
		setTimeout(()=>{
			//console.log(this);
			this.printData();
		},200); //arrow function -> bind필요없음
	},
	printData(){
		console.log('hi codesquad!');
	}
}

myobj2.runTimeout();