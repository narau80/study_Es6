const SYM = Symbol();

const o = {a:1, b:2, c:3, {SYM}:4};

for(let prop in o){
	if(!o.hasOwnProperty(prop)) continue;
	console.log(`${prop}: ${o[prop]}`)
}

hasOwnProperty 예제-----------------------

const obj = {
  a: 1,
  b: 2,
  c: 3
};
const copy = {};

let sum = 0;
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    sum += copy[key] = obj[key] * 2;

  }
}

sum => 2 + 4 + 6 = 12

--------------------------------------------

const SYM = Symbol();

const o = {a:1, b:2, c:3, {SYM}:4};

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));


- x로 시작하는 프로터티를 모두 가져온다.
const o = {apple:1, xochitl:2, balloon:3, guitar:4, xylophone:5,};

Object.keys(o).filter(prop=>prop.match(/^x/)).forEach(prop=>console.log(`${prop}: ${o[prop]}`));

- OOP 기본용어
클래스 -> 어떤 자동차 처럼 추상적이고 범용적
인스턴스 -> 특정 자동차 처럼 구체적이고 한정적
기능 -> 메서드
클래스 메서드 -> 클래스에 속하지만 특정 인스턴스에 묶이지는 않는 기능
인스턴스를 처음 만들때는 생성자가 실행
생성자는 객체 인스턴스를 초기화


class Car{
	constructor(make, model){
	this.make = make;
	this.model = model;
	this.userGears = ['P', 'N', 'R', 'D'];
	this.userGear = this.userGears[0];
	}
	shift(gear){
		if(this.userGears.indexOf(gear) < 0)
		throw new Error(`Invalid gear : ${gear}`);
		this.userGear = gear;
	}
	shift(gear) {this.userGear = gear;}
}
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift('D');
car2.shift('R');


car1 instanceof Car	//true
car1 instanceof Array	//false


------------ WeakMap을 사용하여 완벽하게 보호
const Car = (function() {

	const carProps = new WeakMap();

	class Car{
		constructor(make, model){
		this.make = make;
		this.model = model;
		this.userGears = ['P', 'N', 'R', 'D'];
		carProps.set(this,{userGear = this.userGears[0]});
		}
		get userGear() {return carProps.get(this).userGear;}
		set userGear(value){
			if(this._userGears.indexOf(value) < 0)
			throw new Error(`Invalid gear : ${gear}`);
			carProps.get(this).userGear = value;
		}
		shift(gear) {this.userGear = gear;}
	}
	return Car;



})();


-------------es5 car 클래스
function Car(make, model){
	this.make = make;
	this.model = model;
	this._userGears = ['P', 'N', 'R', 'D'];
	this._userGear = this.userGears[0];
}

---------es6
class Es6Car {}
function Es5Car{}
> typeof Es6Car
> typeof Es5Car			//음.. 뭔 개소리지..

