// p224
*프로퍼티 나열 : 순서가 보장되지 않는다.
* for...in 객체 프로퍼티 나열할 때 주로 사용, 루프에는 키가 심볼인 프로퍼티는 포함되지 않음
(hasOwnProperty : 상속된 프로퍼티가 for ... in 에 나타날 위험을 제거하기 위해 사용, 아래 예제에서는 생략해도 차이 없음.)
{
})
const SYM = Symbol();

const o = {a:1, b:2, c:3, [SYM]:4};

for(let prop in o) {
	if (!o.hasOwnProperty(prop)) continue;
	console.log(`${prop}:${o[prop]}`);
}
/*
a:1
b:2
c:3
*/

* Object.keys : 객체에서 나열 가능한 문자열 프로퍼티를 배열로 반환
const SYM = Symbol();
const o = {a:1, b:2, c:3, [SYM]:4};
Object.keys(o).forEach(prop=>console.log(`${prop}:${o[prop]}`));
//결과 위와 같음


// p225
객체의 프로퍼티 키를 배열로 가져와야 할 때 Object.keys가 편리함.(객체에서 x로 시작하는 프로퍼티를 모두 가져오는 예)
const o = {apple:1, xochitl:2, balloon:3, guitar:4, xylophone:5, };
Object.keys(o)
	.filter(prop=>prop.match(/^x/))
	.forEach(prop=>console.log(`${prop}:${o[prop]}`));
/*
결과
xochitl:2
xylophone:5
*/

// p226
자동차가 객체라면?
- 클래스 : 추상적이고 범용적인 것 ex) 어떤 자동차
- 인스턴스 : 구체적이고 한정적인 것 ex) 특정 자동차
- 메서드 : 기능 ex) '시동을 거는' 기능
- 생성자 : 객체 인스턴스를 초기화

es6에서는 클래스를 간편하게 만드는 새 문법 도입.
class Car	//새 클래스 car를 만듬
{
	constructor() {
	}
}

//인스턴스 만들때는 new 키워드 사용
const car1 = new Car();
const car2 = new Car();

//instanceof : 객체가 클래스의 인스턴스인지 확인
console.log(car1 instanceof Car);	//true, Car의 인스턴스이다.
console.log(car1 instanceof Array);	//false

// p227
//this 키워드는 메서드를 호출한 인스턴스를 가리키는 목적으로 쓰임.
class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
		this.userGears = ['P', 'N', 'R', 'D'];
		this.userGear = this.userGears[0];
	}
	shift(gear) {
		if (this.userGears.indexOf(gear) < 0)
			throw new Error(`Invalid gear : ${gear}`);
		this.userGear = gear;
	}
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift('D');
car2.shift('R');
console.log(car1.shift('D'));


console.log(car1.useGear);	//'D'
console.log(car2.useGear);	//'R'
//**실행해보면 주석의 결과같이 나오지 않고 undefined만 뜸..**

// p229 (1)
class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
		this._userGears = ['P', 'N', 'R', 'D'];
		this._userGear = this._userGears[0];
	}
	get userGear() {return this._userGear;}
	set	userGear(value) {
		if(this._userGears.indexOf(value) < 0)
			throw new Error(`Invalid gear: ${value}`);
		this._userGear = value;
	}
	shift(gear) {this.userGear = gear;}
}
*외부에서 접근하면 안 되는 프로퍼티 이름 앞에 밑줄을 붙임. '가짜접근제한' ex) this._userGears


// p229 (2)
//프로퍼티를 꼭 보호해야 한다면 weakMap 인스턴스를 사용
const Car = (function() {
	const carProps = new WeakMap();

	class Car {
		constructor(make, model) {
			this.make = make;
			this.model = model;
			this._userGears = ['P', 'N', 'R', 'D'];
			carProps.set(this, {userGear : this._userGears[0]});
		}
		get userGear() {return carProps.get(this).userGear;}
		set	userGear(value) {
			if(this._userGears.indexOf(value) < 0)
				throw new Error(`Invalid gear: ${value}`);
			carProps.get(this).userGear = value;
		}
		shift(gear) {this.userGear = gear;}
	}
	return Car;
})();
//weakMap을 클로저로 감싸고 바깥에서 접근할 수 없게함.


// p230
//es5에서의 Car 클래스(클래스는 사실 함수일뿐이다.)
function Es5Car(make,model) {
	this.make = make;
	this.model = model;
	this._userGears = ['P','N','R','D'];
	this._userGear = this.userGears[0];
}

console.log(Car);	//[Function: Car]

//es6에서도 똑같이 할 수 있다.
class Es6Car {}
function Es5Car {}
> typeof Es6Car
> typeof Es5Car

// p232
*프로토타입 : 클래스의 인스턴스에서 사용할 수 있는 메서드 ex) Car의 인스턴스에서 사용할 수 있는 shift 메서드는 프로토타입 메서드다.
표기법 : Car.prototype.shift -> Car#shift 로 최근에 널리 쓰임.
class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
		this.userGears = ['P', 'N', 'R', 'D'];
		this.userGear = this.userGears[0];
	}
	shift(gear) {
		if (this.userGears.indexOf(gear) < 0)
			throw new Error(`Invalid gear : ${gear}`);
		this.userGear = gear;
	}
}

const car1 = new Car();
const car2 = new Car();
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift('D'));
//console.log(car1.shift('d'));	// 주석 지우면 에러 발생.
console.log(car1.userGear);
console.log(car1.shift === car2.shift);

car1.shift = function(gear) {this.userGear = gear.toUpperCase();}
console.log(car1.shift === Car.prototype.shift);
console.log(car1.shift === car2.shift);
console.log(car1.shift('d'));
console.log(car1.userGear);

/*
결과
true
undefined
D
true
false
false
undefined
D
*/

// p233
정적 메서드 : 정적메서드에서 this는 인스턴스가 아니라 클래스 자체에 묶임. 클래스에 관련되지만 인스턴스와는 관련 없는 범용적인 작업에 사용됨. 일반적으로 this 대신 클래스 이름을 사용함.
class Car {
	static getNextVin() {
		return Car.nextVin++;	//this.nextVin++ 라고 써도 되나, Car를 앞에 쓰면 정적 메서드라는 점을 상기하기 쉬움
	}

	constructor(make,model) {
		this.make = make;
		this.model = model;
		this.vin = Car.getNextVin();
	}
	static areSimilar(car1,car2) {
		return car1.make===car2.make && car1.model===car2.model;
	}
	static areSame(car1,car2) {
		return car1.vin===car2.vin;
	}
}
Car.nextVin = 0;

const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");

console.log(car1.vin);	//0
console.log(car2.vin);	//1
console.log(car3.vin);	//2

console.log(Car.areSimilar(car1, car2));	//false
console.log(Car.areSimilar(car2, car3));	//true
console.log(Car.areSame(car2, car3));	//false
console.log(Car.areSame(car2, car2));	//true


* 상속 : 클래스의 인스턴스는 클래스의 기능을 모두 상속함.
// p235
class Vehicle {
	constructor() {
		this.passengers = [];
		console.log("Vehicle created");
	}
	addPassenger(p) {
		this.passengers.push(p);
	}
}

class Car extends Vehicle {	//extends : Car를 Vehicle의 서브클래스로 만들어줌.
	constructor() {
		super();	// 슈퍼클래스의 생성자를 호출하는 함수, 서브클래스에서는 이 함수를 반드시 호출해야 함.(안하면 에러)
		console.log("Car created");
	}
	deployAirbags() {
		console.log("BWOOSH!");
	}
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);

const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
console.log(c.passengers);

//v.deployAirbags();	//error, c에서는 deplyAirbags를 호출할 수 있지만, v에서는 불가능
//=> 상속은 단방향. Car클래스의 인스턴스는 Vehicle 클래스의 모든 메서드에 접근할 수 있지만, 반대는 불가능.
c.deployAirbags();

/*
결과

Vehicle created
[ 'Frank', 'Judy' ]
Vehicle created
Car created
[ 'Alice', 'Cameron' ]
BWOOSH!

*/

// p236
* 다형성 : 여러 슈퍼클래스의 멤버인 인스턴스를 가리키는 말.
* instanceof : 객체가 클래스인지 인스턴스인지 확인하는 연산자
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


// p 237
class Super {
	constructor() {
		this.name = 'Super';
		this.isSuper = true;	//슈퍼클래스 생성자에서 선언한 프로퍼티는 서브클래스 인스턴스에도 정의됨.
	}
}
//유효하지만, 권장하지는 않음. => 슈퍼클래스 프로토타입에 직접 정의.
Super.prototype.sneaky = 'not recommeded!';

class Sub extends Super {
	constructor() {
		super();
		this.name = 'Sub';
		this.isSub = true;
	}
}

const obj = new Sub();

for(let p in obj) {
	console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
}

/*
결과
"name: Sub"
"isSuper: true"
"isSub: true"
"sneaky: not recommeded! (inherited)"
*/

// p 239
모든 객체는 Object를 상속하므로 Object의 메서드는 기본적으로 모든 객체에서 사용할 수 있음.
* toString : 객체의 기본적인 문자열 표현을 제공함, 객체에 관한 중요한 정보를 제공한다면 디버깅에도 유용하고 객체를 한 눈에 파악 할 수 있음.
ex) Car 클래스의 toString 메서드가 제조사,모델,VIN을 반환하도록
class Car {
	toString() {
		return `${this.make} ${this.model} : ${this.vin}`;
		//Car의 인스턴스에서 toString을 호출하면 객체 식별에 필요한 정보를 얻게됨.
	}
	//...

*다중상속 : 클래스가 슈퍼클래스를 두 개 가지는 기능, 충돌의 위험이 있음.
*믹스인 : 다중상속에 대한 해답?! 기능을 필요한 만큼 섞어 놓은 것.
// p 240 (1)
class InsurancePolicy {}
function makeInsurable(o) {
	o.addInsurancePolicy = function(p) {this.insurancePolicy = p;}
	o.getInsurancePolicy = function() {return this.insurancePolicy;}
	o.isInsured = function() {return !!this.insurancePolicy;}
}

makeInsurable(Car);

const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());		//error, 아래와 같이함 

const car1 = new Car();
makeInsurable(car1);
car1.addInsurancePolicy(new InsurancePolicy());	//works	=> 난 에러남

makeInsurable(Car.prototype);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());	//works


// p 241
class InsurancePolicy {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
	o[ADD_POLICY] = function(p) {this[_POLICY] = p;}
	o[GET_POLICY] = function(p) {return this[_POLICY];}
	o[IS_INSURED] = function(p) {return !!this[_POLICY];}
}
