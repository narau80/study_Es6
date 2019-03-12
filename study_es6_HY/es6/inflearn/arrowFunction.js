
//콜백함수
setTimeout(function(){
	console.log("setTimeout");
},1000);

//arrow function
setTimeout(() =>{
	console.log("setTimeout arrow");
},2000);


let newArr = [1,2,3,4,5].map(function(val,idx,obj){
	return val *2;
});
console.log(newArr);


let newArr2 = [1,2,3,4,5].map((v) => (v *2));
console.log('arrow : ', newArr2);
console.log('arrow : ' + newArr2);//toString