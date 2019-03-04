function home(){
	const homename = 'my house';
	//homename = 'your house';
	//homename=['1','2'];
	console.log(homename);
	//const를 기본으로 사용한다.
	//그런데 변경이 될 수 있는 변수는 let을 사용한다.
	//var는 사용하지 않는다.
}
home();

function home2(){
	const list=['apple','orange','watermelon'];
	//list ='test';
	list.push('banana');
	console.log(list);
}
home2();
//const를 사용하더라도 배열과 오브젝트의 값을 변경(추가/삭제)하는 것은 가능하다.
//값을 재할당이 불가능함.

//immutable array를 어떻게 만들까..?
//뒤로가기, 앞으로가기할때 이전데이터를 알고싶을때

const list =['apple','orange','watermelon'];
list2 = [].concat(list,'banana');
console.log(list===list2);
console.log(list,list2);