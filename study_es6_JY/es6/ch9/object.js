// p224
* for...in 루프에는 키가 심볼인 프로퍼티는 포함되지 않음
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
es6에서는 클래스를 간편하게 만드는 새 문법 도입.
class Cart
{
	constructor() {
	}
}

인스턴스 만들때는 new 키워드 사용
const car1 = new Car();
const car2 = new Car();

car1 instanceof Car	//true
car1 instanceof Array	//false


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

// p228
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift('D');
car2.shift('R');


car1.useGear	//'D'
car2.useGear	//'R'