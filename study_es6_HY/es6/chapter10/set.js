/*
set : 중복을 허용ㅎ지 않는 데이터 집합
*/

const roles = new Set();
roles.add('User');
console.log(roles); //Set { 'User' }

roles.add('Admin');
console.log(roles);//Set { 'User', 'Admin' }

console.log(roles.size)//2

roles.delete('Admin');
console.log(roles);//Set { 'User' }
console.log(roles.delete('Admin'));//false
