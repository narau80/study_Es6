class Person{
	constructor(name){
		this.name=name;
		this.id=Person.nextId++;
	}
}

Person.nextId=0;
const jamie = new Person('Jamie'),
	juliet =new Person('Juliet'),
	peter =new Person('Peter'),
	jay =new Person('Jay');
const arr = [jamie,juliet,peter,jay];

//1.ID직접 비교
let result = arr.find(p=>p.id === juliet.id);
console.log(result);//Person {name:'juliet',id:1}

//2.this 매개변수 이용법
result = arr.find(function(p){
	return p.id === this.id
},juliet);
console.log(result);//Person {name:'juliet',id:1}