class Vehicle {
	constructor() {
		this.passengers = [];
		console.log("Vehicle created");
	}
	addPassenger(p) {
		this.passengers.push(p);
	}
}

class Car extends Vehicle {
	constructor() {
		super();
		console.log("Car created");
	}
	deployAirbags() {
		console.log("BWOOSH!");
	}
}


class Motorcycle extends Vehicle {}
const c = new Car();
const m = new Motorcycle();
console.log(c instanceof Car);	
console.log(c instanceof Vehicle);
console.log(m instanceof Car);
console.log(m instanceof Motorcycle);
console.log(m instanceof Vehicle);

/*
true
true
false
true
true
*/