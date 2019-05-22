1. 
// p244

const u1 = {name : 'Cynthia'};
const u2 = {name : 'Jackson'};
const u3 = {name : 'Olive'};
const u4 = {name : 'James'};

//맵 생성
const userRoles = new Map();

//set() 메서드 사용하여 사용자 역할 할당
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

//set() 메서드는 체인으로 연결할 수 있어 타이핑하는 수고를 덜어줌. 윗부분을 간소화?!
userRoles
  .set(u1, 'User')
  .set(u2, 'User')
  .set(u3, 'Admin');

//생성자에 배열의 배열을 넘기는 형태로 써도 됨.
const userRoles = new Map([
  [u1, 'User'],
  [u2, 'User'],
  [u3, 'Admin],
]);
    
//u2의 역할을 알아볼 때는 get() 메서드를 씀, 맵에 존재하지 않는 키에 get 호출하면 undefined 반환
//맵에 이미 존재하는 키에 set()을 호출하면 값 교체됨 
console.log(userRoles.get(u2)); //"User" => 객체를 키값으로 쓸 수 있다.

*has() : 맵에 키가 존재하는지 확인하는 메서드
console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));

/*
결과
true
"User"
false
undefined
*/
  
console.log(userRoles.get(u1)); //"User"
userRoles.set(u1, 'Admin');
console.log(userRoles.get(u1)); //"Admin"

*size 프로퍼티 : 맵의 요소 숫자를 반환
console.log(userRoles.size);  //3
  
*key() : 맵의 키를, values() : 맵의 값을, entries() : 첫 번째 요소가 키이고 두번째 요소가 값인 배열을 각각 반환
const u1 = {name : 'Cynthia'};
const u2 = {name : 'Jackson'};
const u3 = {name : 'Olive'};
const u4 = {name : 'James'};


const userRoles = new Map();
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

  
for (let u of userRoles.keys())
  console.log(u.name);

for (let r of userRoles.values())
  console.log(r);

for (let ur of userRoles.entries())
  console.log(`${ur[0].name}: ${ur[1]}`);

/*
결과
"Cynthia"
"Jackson"
"Olive"
"User"
"User"
"Admin"
"Cynthia: User"
"Jackson: User"
"Olive: Admin"
*/

//맵도 분해 가능함. 좀 더 자연스러운 코드가 된다.
for (let [u,r] of userRoles.entries())
  console.log(`${u.name} : ${r}`);

//entries() 메서드는 맵의 기본 이터레이터(스스로 반복할 수 있는 객체)라 위 코드를 단축해서 쓸수도 있음.
for (let [u,r] of userRoles)
  console.log(`${u.name} : ${r}`);

/*
결과 (둘다 같은 결과)
"Cynthia : User"
"Jackson : User"
"Olive : Admin"


*delete() : 맵의 요소를 지울때 사용
*clear() : 맵의 요소를 모두 지울때 사용
userRoles.delete(u2);
console.log(userRoles.size);//2

userRoles.clear();
console.log(userRoles.size);//0


2. 위크맵
- 맵과의 차이 ? 키는 반드시 객체여야함 / WeakMap의 키는 가비지 콜렉션에 포함될 수 있음 / WeakMap은 이터러블이 아니며 clear() 메서드도 없음
- 객체 인스턴스의 전용 키를 저장하기에 알맞음
// p 247 (1)
const SecretHolder = (function() {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this, secret);
    }
    getSecret() { 
      return secrets.get(this);
    }
  }
})();


const SecretHolder = (function() {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this, secret);
    }
    getSecret() { 
      return secrets.get(this);
    }
  }
})();


// p 247 (2)
const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

console.log(a.getSecret('secret A'));//"secret A"
console.log(b.getSecret('secret B'));//"secret B"
//Map을 써도 되지만, 그렇게 하면 SecretHolder 인스턴스에 저장한 내용은 가비지 콜렉션에 포함되지 않음.

3. 셋
중복을 허용하지 않는 데이터 집합 => 추가할 것이 셋에 이미 있는지 확인할 필요 없음(있다면 아무 일도 일어나지 않음)

// p 248
const roles= new Set();

//add() : 사용자 역할 추가해줌
roles.add("User");
roles.add("Admin");//관리자 역할 추가하려면 다시 add() 호출
console.log(roles.size);//2

//delete() : 역할 제거시 사용, 제거 성공하면 true 반환
console.log(roles.delete("Admin"));//true
console.log(roles.delete("Admin"));//false

4. 위크셋
객체만 포함할 수 있음 / 이 객체들은 가비지 콜렉션의 대상이 됨. / 주어진 객체가 셋 안에 존재여부를 알아보는것 뿐
// p 250
const naughty = new WeakSet();

const children = [
  {name : "Suzy"},
  {name : "Derek"},
];

naughty.add(children[1]);

for(let child of children) {
  if(naughty.has(child))
    console.log(`Coal for ${child.name}!`);
  else
    console.log(`Presents for ${child.name}!`);
}

/*
결과
"Presents for Suzy!"
"Coal for Derek!"
*/
