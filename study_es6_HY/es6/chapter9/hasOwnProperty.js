class Super{
	constructor(){
		this.name ='Super';
		this.isSuper=true;
	}
}

//권장X
Super.prototype.sneaky = 'not recommended!';

class Sub extends Super{
	constructor(){
		super();
		this.name='Sub';
		this.isSub=true;
	}
}

const obj = new Super();

for(let p in obj){
	console.log(`${p} : ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : '(inherited)'));
}
/*
obj가 super 인스턴스일때
name : Super
isSuper : true
sneaky : not recommended!(inherited)
*/

/*
obj가 sub 인스턴스일때
name : Sub
isSuper : true
isSub : true
sneaky : not recommended!(inherited)
*/