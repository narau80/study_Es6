/*
프로토타입 : 동적 디스패치 - 메서드 호출같은 의미
인스턴스에서 메서드나 프로퍼티를 정의하면 프로토타입에 있는 것으 ㄹ가리는 효과가 있음.
자바스크립트는 먼저 인스턴스를 체크하고 거기에 없으면 포로토타입을 체크하기 때문임.
인스턴스에서 초기값이 필요하면 생성자에서 만들것. 즉, 프로퍼티 수정 권장하지 않음.
*/
const Car = (function(){
	//weakMap은 클래스 외부에서 접근하면 안되는 property를 안전하게 저장.
	const carProps = new WeakMap();

	//클래스 생성
	class Car{
		constructor(make,model){//생성자
			this.make = make;//제조사
			this.model = model;//모델
			this._userGears =['P','N','R','D'];//기어목록
			carProps.set(this,{userGear:this._userGears[0]});//현재 기어
		}
		get userGear(){return carProps.get(this).userGear;}
		set userGear(v){
			if(this._userGears.indexOf(v) < 0)
				throw new Eroor(`Invalid gear:${v}`);
			carProps.get(this).userGear =v;
		}
		shift(gear){this.userGear = gear;}
	}
	return Car;
})();

//인스턴스 생성
const hyCar = new Car();
const hsCar = new Car();
console.log(hyCar.shift === Car.prototype.shift); //true

hyCar.shift('D');
//hyCar.shift('d');//error : throw new Eroor(`Invalid gear:${v}`);
console.log(hyCar.userGear); //D
console.log(hyCar.shift === hsCar.shift); //true
console.log('hycar.shift : '+hyCar.shift + "\nhscar.shift : "+hsCar.shift );

hyCar.shift = function(gear){this.userGear = gear.toUpperCase();} //인스턴스 메서드 정의
console.log(hyCar.shift === Car.prototype.shift); //false
console.log(hyCar.shift === hsCar.shift);//false
console.log('hycar.shift : '+hyCar.shift + "\nhscar.shift : "+hsCar.shift +"\nCar.prototype.shift : " + Car.prototype.shift);

hyCar.shift('d');
console.log(hyCar.userGear);//D


/*
true
D
true
hycar.shift : shift(gear){this.userGear = gear;}
hscar.shift : shift(gear){this.userGear = gear;}
false
false
hycar.shift : function(gear){this.userGear = gear.toUpperCase();}
hscar.shift : shift(gear){this.userGear = gear;}
Car.prototype.shift : shift(gear){this.userGear = gear;}
D

*/



