/*
객체 : 데이터  + 기능
- 클래스 		: 추상적, 범용적 - 어떤 자동차
- 인스턴스 		: 구체적, 한정적 - 특정 자동차
- 메서드			: 기능
- 클래스 메서드	: 클래스에 속하나 특정 인스턴스에 묶이지 않는 기능 ex)시동걸기
- 생성자			: 객체 인스턴스 초기화, 인스턴스 생성
- 슈퍼클래스		: ex)운송수단
- 서브클래스 	: ex)자동차, 보트(요트,카누,모터보트...), 비행기, 오토바이,자전거 ...
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
const MyCar = new Car('Tesla','Model S');
const godoCar = new Car('Mazda','3i');

MyCar.shift('D');
godoCar.shift('R');
//MyCar.userGear ='x'; --> error

console.log(`Mycar gear : ${MyCar.userGear}\ngodocar gear : ${godoCar.userGear} `);

/*
Mycar gear : D
godocar gear : R
*/
