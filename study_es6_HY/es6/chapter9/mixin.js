class Car{}
class InsurancePolicy{}
//심볼은 항상 고유하므로 믹스인이 Car클래스의 기능과 충돌할 가능성이 없음.
const ADD_POLICY =Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

/**/
function makeInsuranable(o){
	o[ADD_POLICY] = function(p){this[_POLICY] =p;}
	o[GET_POLICY] = function(){return this[_POLICY];}
	o[IS_INSURED] = function(){return !!this[_POLICY];}
}

/**/
function makeInsuranable(o){
	o.addInsurancePolicy = function(p){this.InsurancePolicy =p;}
	o.getInsurancePolicy = function(){return this.insurncePolicy;}
	o.isInsured = function(){return !!this.insurncePolicy;}
}

makeInsuranable(Car);
const c1 = new Car();
//c1.addInsurancePolicy(new InsurancePolicy()); //error : : c1.addInsurancePolicy is not a function

makeInsuranable(c1);
c1.addInsurancePolicy(new InsurancePolicy());
console.log(c);

makeInsuranable(Car.prototype);
const c2 = new Car();
c2.addInsurancePolicy(new InsurancePolicy());
console.log(c);