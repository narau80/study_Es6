1. Destructuring Array
let data = ["crong", "honux", "jk", "jinny"];
/*let jisu = data[0];
let jung = data[2];*/
//���� ���� �ʿ��� �迭�� ���Ұ� n�� ���� �� Ư�� �ε����� �ִ� ���� �ǹ̰� ������ �װ��� �̾� �� �� �ִ�.

let [jisu,,jung] = data;
console.log(jisu, jung);	//crong jk
//0��°, 2��° ���� ������ jisu, jung �̶� �̸����� ����ϰڴ�.
//������ �迭�̳� ������Ʈ�� �ʿ��� ���� �Ҵ��ϴµ� �����ϰ� ���.


2. Destructuring Object
let obj = {
	name : "crong",
	address : "Korea",
	age : 10
}

let {name, age} = obj;
console.log(name, age);	//crong 10

//�ٸ� �̸����� �ٲ� ���� ����
let {name:myName, age:myAge} = obj;	//<- = obj; �� �Ἥ �Ҵ�.
console.log(myName);	//crong

3. Destructuring Ȱ��