/*
weakMap : 키는 반드시 객체, 객체 인스턴스의 전용(provate) 키 저장, 키를 가비지 콜렉션에 포함할 수 있음.clear()없음
자바스크립트는 Map이 존재하는 한 메모리에 계속 유지.WeakMap은 그렇지 않음
*/

const SecretHolder =(function(){
	const secrets  = new WeakMap();
	return class{
		setSecret(secret){
			secrets.set(this, secret);
		}
		getSecret(){
			return secrets.get(this);
		}
	}
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

console.log(a.getSecret());
console.log(b.getSecret());

/*
secret A
secret B
*/