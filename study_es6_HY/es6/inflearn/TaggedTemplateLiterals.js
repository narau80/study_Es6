const data=[
	{
		name :'coffee-bean',
		order: true,
		items:['americano','milk','green-tea']
	},
	{
		name:'starbucks',
		order:false,
	},
	{
		name:'coffe-king',
		order:true,
		items:['americano','latte']
	},
]

//Tagged template literals
/* 이해안됨 다시해볼것.*/
function fn(tags,name,items){
	//console.log(tags);
	if(typeof items === "undefined"){
		items='주문가능한 상품이 없습니다.';
	}
	return (tags[0] + name + tags[1] + items + tags[2]);
}
data.forEach((v) =>{
	let template =fn`<div>welcome ${v.name} !!</div>
	<h2>주문가능항목</h2><div>${v.items}</div>`;
	console.log(template);
});


// let template =fn`<div>welcome ${data[0].name} !!</div>
// <h2>주문가능항목</h2><div>${data[0].items}</div>`;
// console.log(template);