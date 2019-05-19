/*
정적메서드(클래스메서드) :  특정 인스턴스에 적용되지 않고, 범용적인 작업에 사용 또는 여러 인스턴스를 대상으로 하는 작업에 종종쓰임
*/
class Car{
	static getNextVin(){
		return Car.nextVin++; //this.nextVin++;과 같음. 그러나 클래스 이름을 쓰는 것이 좋음. (정적메서드 상기)
	}

	constructor(make,model){
		this.make = make;
		this.model = model;
		this.vin =Car.getNextVin();
	}
	static areSimilar(c1,c2){
		return c1.make === c2.make && c1.model ===c2.model;
	}

	static areSame(c1,c2){
		return c1.vin === c2.vin;
	}

}

Car.nextVin = 0;

const c1 = new Car('Tesla','S');
const c2 = new Car('Mazda','3');
const c3 = new Car('Mazda','3');

console.log(`${c1.vin} ${c2.vin}  ${c3.vin} `);

let result;
result = Car.areSimilar(c1,c2);
console.log(result);

result = Car.areSimilar(c3,c2);
console.log(result);

result = Car.areSame(c1,c2);
console.log(result);

result = Car.areSame(c3,c2);
console.log(result);

/*
0 1  2
false
true
false
false

*/




