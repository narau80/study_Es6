var data=[1,2,undefined,NaN,null,''];

//1.기본 for문
console.log('-------for-------');
for(var i=0;i<data.length;i++){
	console.log(data[i]);
}

//2. foreach
console.log('-------for each-------');
data.forEach(function(value){
	console.log('value is', value);
})


//보통 object순회할때 사용
//프로토타입에 의해서 만들어진 상위 포함된 값을 출력할 수 있음.
//따라서, array에서 for in사용하지 않음.
//3. for in
console.log('-------for in-------');
Array.prototype.getIndex= function(){};
for(let idx in data){
	console.log(data[idx]);
}

//4. for of
console.log('-------for of-------');
//forin  대신해 forof
for(let value of data){
	console.log(value);
}

//문자 순회에도 사용
console.log('-------for of(character)-------');
var str='hello world!!!!';
for(let value of str){
	console.log(value);
}
