const data=[
	{
		name: 'cooffe-bean',
		order:true,
		items :['americano','milk','green-tea']
	},
	{
		name:'starbucks',
		order:false,
	}
]

//json으로 응답을 받고 javascript object로 변환한 후에 어떠한 데이터처리 조작을 한 후에 DOM에 추가
//데이터 + HTML 문자열의 결합이 필요하기 때문

const template=`<div>welcome ${data[0].name} !!</div>`;
console.log(template);
