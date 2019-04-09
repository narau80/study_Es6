let globalFunc;
{
	let blockVar='a';
	globalFunc = function(){
		console.log(blockVar);
	}
}
globalFunc();

let f;
{
	let o ={note:'safe'};
	f= function(){
		return o;
	}
}
let oRef=f();
console.log(oRef.note);
console.log(f().note);
oRef.note = "Not so saafe after all";
console.log(oRef.note);
console.log(f().note);