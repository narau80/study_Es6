const msg = (function(){
	const secret = "I'm a secret";
	return `The secret is ${secret.length} characters long.`;
})();
console.log(msg);

const f = (function(){
	let count =0;
	return function(){
		return `I have been called ${++count} time(s).`;
	}
})();

let call = f();
let call2 = f();
console.log(call);
console.log(call2);
console.log(f());

for(let i=0;i<5;i++){
	console.log(f());
}