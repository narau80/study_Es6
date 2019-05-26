class Vehicle{
	constructor(){
		this.passengers=[];
		console.log('Vehicle created');
	}
	addPassenger(p){
		this.passengers.push(p);
	}
}

class Car extends Vehicle{//상속
	constructor(){
		super();//슈퍼클래스의 생성자 호출
		console.log('Car created');
	}
	deployAribags(){
		console.log('BWOOSH!');
	}
}
class Motorcycle extends Vehicle{}

const v = new Vehicle();
v.addPassenger('Frank');
v.addPassenger('Judy');
console.log(v.passengers);

const c = new Car();
c.addPassenger('Alice');
c.addPassenger('Cameron');
console.log(c.passengers);

const m = new Motorcycle();

//v.deployAribags(); //error
c.deployAribags();


/*
Vehicle created
[ 'Frank', 'Judy' ]
Vehicle created
Car created
[ 'Alice', 'Cameron' ]
BWOOSH!

*/

console.log(c instanceof Car);//true
console.log(c instanceof Vehicle);//true
console.log(m instanceof Car);//false
console.log(m instanceof Motorcycle);//true
console.log(m instanceof Vehicle);//true