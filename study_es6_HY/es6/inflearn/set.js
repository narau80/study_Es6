
//set : 중복없이 유일한 값을 저장하려고 할때, 이미 존재하는지 체크할때 유용, 모든 타입 저장가능
let mySet = new Set();
//console.log(toString.call(mySet));

mySet.add('crong');
mySet.add('hary');
mySet.add('crong');

console.log(mySet.has('crong'));

mySet.delete('crong');

mySet.forEach(function(v){
	console.log(v);//crong  hary
})



