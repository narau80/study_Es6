/*
weakset :객체만 포함할 수 있음. 가비지 콜렉션의 대상, 객체가 셋안에존재하는지 아닌지 알아보는 역할정도
*/

const naughty = new WeakSet();

const children=[
	{name:'Suzy'},
	{name:'Derek'},
];

naughty.add(children[1]);
for(let child of children){
	if(naughty.has(child))
		console.log(`Coal for ${child.name}!`);
	else
		console.log(`Presents for ${child.name}!`);
}

/*
Presents for Suzy!
Coal for Derek!
*/