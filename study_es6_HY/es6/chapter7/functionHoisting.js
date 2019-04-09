f();
function f(){
	console.log('function hoisting!');
}

//fn(); //error : fn is not defined.
let fn = function(){
	console.log('scope ~ ');
}
fn();