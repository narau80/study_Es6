// p167
function sayHello() {
	// �Լ� �ٵ�� �����߰�ȣ�� �����ϰ�

	console.log("Hello world!");
	console.log("i Hola mundo!");
	console.log("Hallo wereld!");

	//�ݴ� �߰�ȣ�� �����ϴ�.
}
sayHello();	// �Լ��� ȣ���ؾ� �ٵ��� console.log �� ����Ǿ� ȭ�鿡 ����

// p168~169
function getGreating() {
	return "Hello world!";
} //�Լ��� ��� �����ϰ� ���� ��ȯ

//getGreating();	//console.log(getGreeting());	->	Hello world!
//getGreating;		//console.log(getGreating);	->	[Function:getGreating]

const f = getGreating; //�Լ��� ������ �Ҵ� �ϸ� ���������� �Լ��� ȣ��
f(); //console.log(f()); -> "Hello world!"

const o = {};
o.f = getGreating; // �Լ��� ��ü ������Ƽ�� �Ҵ�
o.f();	//console.log(o.f());	->	Hello world!

const arr = [1,2,3]; 
arr[1] = getGreating; // �迭 ��ҿ� �Ҵ� 
arr[1](); //console.log(arr[1]());	->	Hello world!

// p170
function avg(a,b){     // a�� b�� ������ �Ű�����
	return (a + b) / 2;
}
avg(5, 10); //7.5
//console.log(avg(5,10));

const a = 5 , b = 10;
console.log(`${a}, ${b}`);
avg(a, b);
console.log(avg(a, b));

// p171
function f(x){
	console.log(`f ����: x = ${x}`);
	x = 5;
	console.log(`f ����: x = ${x} (�Ҵ� ��)`);
}

let x = 3;
console.log(`f�� ȣ���ϱ� ��: x = ${x}`);
f(x);
console.log(`f�� ȣ���� ����: x = ${x}`);

/*
	������ å ����
*/

// p172 (1)
function f(o){
	o.message = `f �ȿ� ������ (���� ��: '${o.message}')`;
}
let o = {
	message: "�ʱ� ��"
};

console.log(`f�� ȣ���ϱ� �� : o.message = "${o.message}"`);
f(o);
console.log(`f�� ȣ���� ���� : o.message = "${o.message}"`);

// f�� ȣ���ϱ� ��: o.message = "�ʱ� ��"
// f�� ȣ���� ���� : o.message="f �ȿ��� ������ (���� ��: '�ʱ� ��')"


// p172 (2)
function f (o){
	o.message = "f���� ������";
	o = {
		message : "���ο� ��ü!"
	};
	console.log(`f ����: o.message = "${o.message}" (�Ҵ� ��)`);
}

let o = {
	message: '�ʱⰪ'
};
console.log(`f�� ȣ���ϱ� ��: o.message = "${o.message}"`);
f(o);
console.log(`f�� ȣ���� ����: o.message = "${o.message}"`);

/*
"f�� ȣ���ϱ� ��: o.message = \"�ʱⰪ\""
"f ����: o.message = \"���ο� ��ü!\" (�Ҵ� ��)"
"f�� ȣ���� ����: o.message = \"f���� ������\""
*/


// p173
function f(x) {
	return `in f: x = ${x}`;
}
f();
//console.log(f());	-> in f: x = undefined


//p174 (1)
function getSentence({ subject, verb, object}) {
	return `${subject} ${verb} ${object}`;
}

const o = {
	subject: "I",
	verb : "love",
	object : "JavaScript",
};

console.log(getSentence(o));	// I love JavaScript


// p174 (2)
function getSentence([ subject, verb, object]) {
	return `${subject} ${verb} ${object}`;
}
const arr = ["I", "love", "JavaScript"];
getSentence(arr);
console.log(getSentence(arr));	// I love JavaScript

// p175 (1)
function addPrefix(prefix, ...words) {
	const prefixedWords = [];
	console.log(words);	//["verse", "vex"]
	for(let i = 0; i < words.length; i++) {
		prefixedWords[i] = prefix + words[i];
	}
	return prefixedWords;
}
console.log(addPrefix("con", "verse", "vex"));	//["converse", "convex"]

// p175 (2)
function f(a, b = "default", c = 3) {
	return `${a} - ${b} - ${c}`;
}
f(5,6,7); 
console.log(f(5,6,7)); // "5 - 6 - 7"
f(5,6); 
console.log(f(5,6)); // "5 - 6 - 3"
f(5); 
console.log(f(5)); // "5 - default - 3"
f(); 
console.log(f()); // "undefined - default - 3"


//p176
const o = {
	name : "Wallace",
	bark : function() {return 'Woof!';},
}
console.log(o);
console.log(o.bark());
//���� �Ʒ��� ����, {name : 'Wallace', bark : [Function : bark]}
//�޼���?!�� ȣ���ϸ� "Woof!"
const b = {
	name : "Wallace",
	bark() {return 'Woof!';},
}
console.log(b);
console.log(b.bark());

// p177
const o = {
	name : "Wallace",
	speak() {return `My name is ${this.name}`;}, //this�� o�� ����
}	//this�� o�� ���� ������ speak�� o�� ������Ƽ������ �ƴ϶�, o���� speak�� ȣ���߱� ����

console.log(o.speak());	//My Name is Wallace

const speak = o.speak;
speak === o.speak; 
console.log(speak === o.speak); // true; �� ������ ���� �Լ��� ����ŵ�ϴ�.
speak(); 
console.log(speak());// my name is undefined;

// p178 (1)
const o = {
	name : 'julie',
	greetBackwards: function() {
		function getReversName() {
			let nameBackward = '';
			for(let i=this.name.length-1; i >=0; i--){
				nameBackward += this.name[i];
			}
			return nameBackward;
		}
		return `${getReversName()} si eman ym, olleH`;
	},
};
o.greetBackwards();
console.log(o.greetBackwards());	//�����߻�

// p178 (2)
const o = {
	name : 'julie',
	greetBackwards: function() {
		const self = this;
		function getReversName() {
			let nameBackward = '';
			for(let i = self.name.length -1; i >=0; i--){
				nameBackward += self.name[i];
			}
			return nameBackward;
		}
		return `${getReversName()} si eman ym, olleH`;
	},
}
o.greetBackwards();
console.log(o.greetBackwards());	//eiluj si eman ym, olleH


// p179 
const f = function(){
	// ....

};
/* �Լ��� ����� ����. �ĺ��� f�� �� �Լ��� ����Ų��.
�Ϲ����� �Լ� ������� �������� �Լ� ǥ�������� �͸� �Լ��� ���� ���� �� �Լ��� ������ �Ҵ��� ��.
*/

// p180 (1)
const g = function f(){
	// ....

} 
/* �Լ��� �̸��� ���ϰ� �ٽ� ������ �Ҵ��ϸ�?
�̸� g�� �켱������ ����. �Լ� �ٱ����� �Լ��� ������ ���� g�� ��� �Ѵ�. f�� �����ϸ� ������ ���ǵ��� �ʾҴٴ� ���� �߻�
�Ʒ� ������ ���� �Լ� �ȿ��� �ڱ� �ڽ��� ȣ���� ��(���) �̷� ����� �ʿ��� �� ����.
*/

// p180 (2)
const g = function f(stop) {
	if(stop) console.log('f stopped');
	f(true);
};
g(false);
console.log(g()); // ��� : f stopped �� �ſ� ���� ��µǴٰ� ����.
/*
�Լ� �ȿ����� f�� �Ἥ �ڱ� �ڽ��� ����, �Լ� �ٱ������� g�� �Ἥ �Լ��� ȣ��.
(�̸� ���� �Լ� ǥ������ ��� �����ϴ��� ���� �����̸�, �Լ��� �� ���� �̸� ���̴� �� ���� ����)
*/


//p181
//ȭ��ǥ ǥ��� (�����߰�)
//function �� �����ص� �ȴ�
//�Լ��� �Ű������� �� �ϳ� ���̶�� (())�� ������ �� �ִ�.
//�Լ� �ٵ� ǥ���� �ϳ���� �߰�ȣ�� return ���� ������ �� �ִ�.

const f1 = function() {return "hello!";}
//�Ǵ�
const f1 = () => "hello!";

const f2 = function(name) {return `hello, ${name}!`;}
//�Ǵ�
const f2 = name => `hello, ${name}!`;

const f3 = function(a, b){return a + b;}
//�Ǵ�
const f3 = (a,b) => a + b;

// p182
const o = {
	name : 'julie', 
	greetBackwards: function(){
		const getReversName = () => {
			let nameBackwards = '';
			for(let i = this.name.length-1; i >= 0; i--){
				nameBackwards += this.name[i];
			}
			return nameBackwards;
		};
		return `${getReversName()} si eman ym , olleH`;
	},
};
o.greetBackwards();
console.log(o.greetBackwards());	//eiluj si eman ym , olleH

//p183 (1)
//call �޼���
//call �޼���� ��� �Լ����� ����� �� ������, this�� Ư�� ������ ������ �� �ִ�.

const bruce = {name : "Bruce"};
const madeline = {name : "Madeline"};

//�� �Լ��� � ��ä���� ������� �ʾ����� this�� ����Ѵ�.
function greet() {
	return `Hello, I'm ${this.name}!`;
}

greet();
console.log(greet());	//"Hello, I'm  undefined!" - this�� ��𿡵� ������ �ʾҽ��ϴ�.
greet.call(bruce);
console.log(greet.call(bruce));	//"Hello, I'm  Bruce!" - this�� bruce
greet.call(madeline);
console.log(greet.call(madeline));	//"Hello, I'm  Madeline!" - this�� madeline


// p183 (2) ~ 184 (1)
const bruce = {name : "Bruce"};
const madeline = {name : "Madeline"};

console.log(bruce);	//{name : "Bruce"};
console.log(madeline);	//{name : "Madeline"};

function update(birthYear, occupation) {
	this. birthYear =  birthYear;
	this. occupation =  occupation;
}

//call�� ù��° �Ű������� this�� ����� ��, �Ű������� �� ������ �� �Ű������� ȣ���ϴ� �Լ��� ����(�Ű������� ���� ����)
update.call(bruce, 1949, 'singer');
console.log(bruce);	// {name : "Bruce", birthYear: 1949, occupation: "singer"} 
update.call(madeline, 1942, 'actress');
console.log(madeline);	//{ name: 'Madeline', birthYear: 1942, occupation: 'actress' }

// apply�� �Ű������� �迭�� ����. �� �ܿ� call�� ������ ����
update.apply(bruce, [1955, "actor"]);
console.log(bruce);	//{name : "Bruce", birthYear: 1955, occupation: "actor"} 
update.apply(madeline, [1918, "writer"]);
console.log(madeline);	//{ name: 'Madeline', birthYear: 1918, occupation: 'writer' }


// p184 (2)
//apply�� �迭 ��Ҹ� �Լ� �Ű������� ����� �� ������
const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr);
console.log(Math.min.apply(null, arr));	// -5
Math.max.apply(null, arr); 
console.log(Math.max.apply(null, arr));	// 15

// p184 (3)
const bruce = {name : "Bruce"};
const arr = [2, 3, -5, 15, 7];

function update(birthYear, occupation) {
	this. birthYear =  birthYear;
	this. occupation =  occupation;
}

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);
Math.min(...arr);
console.log(Math.min(...arr));	//-5
console.log(Math.max(...arr)); // 15


// p185 (1)
//this�� ���� �ٲܼ� �ִ� ������ �Լ��� bind
//bind�� ����ϸ� �Լ��� this ���� ������ �ٲܼ� �ִ�.
const bruce = {name : "Bruce"};
const madeline = {name : "Madeline"};

function update(birthYear, occupation) {
	this. birthYear =  birthYear;
	this. occupation =  occupation;
}

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
console.log(bruce);	//{ name: 'Bruce', birthYear: 1904, occupation: 'actor' }
console.log(madeline);	//{ name: 'Madeline' }
updateBruce.call(madeline, 1274, "king");
console.log(bruce);	//{ name: 'Bruce', birthYear: 1274, occupation: 'king' }
console.log(madeline);	//{ name: 'Madeline' }

// p185 (2)
//bind�� �Լ��� ������ ���������� �ٲ� 
const bruce = {name : "Bruce"};

function update(birthYear, occupation) {
	this. birthYear =  birthYear;
	this. occupation =  occupation;
}

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
console.log(bruce);
/*{ name: 'Bruce',
  birthYear: 1949,
  occupation: 'singer, songwriter' }
*/