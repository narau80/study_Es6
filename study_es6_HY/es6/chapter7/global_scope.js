let user={
	name:'hy',
	age:30,
};
function greet(user){
	console.log(`Hello, ${user.name}!`);
}

function getBirthYear(user){
	return new Date().getFullYear() - user.age;
}

greet(user);
console.log(getBirthYear(user));