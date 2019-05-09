const SYM = Symbol();

const o = {a:1, b:2, c:3, {SYM}:4};

for(let prop in o){
	if(!o.hasOwnProperty(prop)) continue;
	console.log(`${prop}: ${o[prop]}`)
}

hasOwnProperty ����-----------------------

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


- x�� �����ϴ� ������Ƽ�� ��� �����´�.
const o = {apple:1, xochitl:2, balloon:3, guitar:4, xylophone:5,};

Object.keys(o).filter(prop=>prop.match(/^x/)).forEach(prop=>console.log(`${prop}: ${o[prop]}`));

- OOP �⺻���
Ŭ���� -> � �ڵ��� ó�� �߻����̰� ������
�ν��Ͻ� -> Ư�� �ڵ��� ó�� ��ü���̰� ������
��� -> �޼���
Ŭ���� �޼��� -> Ŭ������ �������� Ư�� �ν��Ͻ��� �������� �ʴ� ���
�ν��Ͻ��� ó�� ���鶧�� �����ڰ� ����
�����ڴ� ��ü �ν��Ͻ��� �ʱ�ȭ


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


------------ WeakMap�� ����Ͽ� �Ϻ��ϰ� ��ȣ
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


-------------es5 car Ŭ����
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
> typeof Es5Car			//��.. �� ���Ҹ���..

