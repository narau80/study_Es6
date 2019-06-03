/*
Map : 키와 값연결
*/

const u1 ={name:'Cynthia'};
const u2 ={name:'Jackson'};
const u3 ={name:'Olive'};
const u4 ={name:'Janmes'};

/* 방법1
const userRoles = new Map();
userRoles.set(u1,'User');
userRoles.set(u2,'User');
userRoles.set(u3,'Admin');
*/

/* 방법2 : 체인 
const userRoles = new Map();
userRoles.set(u1,'User')
	.set(u2,'User')
	.set(u3,'Admin');
*/

/* 방법3  : 배열 */
const userRoles = new Map([
	[u1,'User'],
	[u2,'User'],
	[u3,'Admin']
]);

/*키값확인*/
console.log(userRoles.get(u2));//User
console.log(userRoles.get(u3));//Admin
console.log(userRoles.get(u4));//undefined

/*키존재확인*/
console.log(userRoles.has(u2));//true
console.log(userRoles.has(u3));//true
console.log(userRoles.has(u4));//false

/*교체*/
console.log(userRoles.get(u1)); //User
userRoles.set(u1,'Admin');
console.log(userRoles.get(u1));//Admin

console.log(userRoles.size);//3


/* map의 키*/
for(let u of userRoles.keys())
	console.log(u.name);
/*
Cynthia
Jackson
Olive
*/

/* 값 */
for(let r of userRoles.values())
	console.log(r);

/*
Admin
User
Admin
*/

/*
첫번째요소 :키
두번째요소 : 값
-> 각각 배열로 반환
*/
for(let ur of userRoles.entries())
	console.log(`${ur[0].name} : ${ur[1]}`);
/*
Cynthia : Admin
Jackson : User
Olive : Admin
*/

//맵분해
for(let [u,r] of userRoles.entries())
	console.log(`${u.name} :${r}`);

/*
Cynthia :Admin
Jackson :User
Olive :Admin
*/

//entries() : 맵의 기본 이터레이터 즉, 생략가능
for(let [u,r] of userRoles)
	console.log(`${u.name} :${r}`);

/*
Cynthia :Admin
Jackson :User
Olive :Admin
*/

console.log([...userRoles.values()]);//[ 'Admin', 'User', 'Admin' ]
console.log([...userRoles.keys()]);//[ { name: 'Cynthia' }, { name: 'Jackson' }, { name: 'Olive' } ]

userRoles.delete(u2);
console.log(userRoles.size);//2

userRoles.clear();
console.log(userRoles.size);//0