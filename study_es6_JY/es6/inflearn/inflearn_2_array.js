1. for ~ of
- for ~ of : �ڽ��� ���� ���� �ʴ� ���� ������� �ʴ´�. for ~ in �� ��������� �������� ����?
- for ~ in �� object �� ��ȸ�� �� ���
(�迭�� ������ object�� ��ȸ�� ������ �ڱ� �ڽ��� �������� ���� ������ �߰��� ������� ����� ��Ÿ�� �� �ִ�
=> �迭���� ��� x)
- for �� foreach �ܿ��� for ~ of�� ���� �迭�� ���� ��ȸ�� �� �ִ�.
- ���ڿ��� ���� ������ ���鼭 �� ���� ������ֱ⵵��.

2. spread operator : ��ħ������ (...)
... ���� ���� �����ش�
ex1) 
let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(pre, newData);
/*���� ���� ���´�. �׷��� �ΰ��� �ٸ� �����ʹ�.
���� ������ �������� �ʰ� ���縦 ��.
*/

ex2)
let pre = ["apple", "orange", 100, null];
let newData = [0,1,2, ...pre, 4];	//[ 0, 1, 2, 'apple', 'orange', 100, null, 4 ]
//�迭 ���̿� ���� �����ؼ� �ְ������ ��ħ������ ���. pre�� newData�� �������. ��ħ�����ڸ� ���� �������� ���� �ʿ��� ��ġ�� �ٸ� ���� �ҷ��� �� �ִ�

ex3)
function sum(a,b,c) {
	return a+b+c;
}
let pre = [100,200,300];

console.log(sum.apply(null,pre));	//600, ��ħ������ ������ �� ��� ���. apply : �迭 �״�θ� ����
console.log(sum(...pre));	//600, apply �̿��ؼ� ���ʿ��ϰ� null�� ���� �ʿ������. 

=> �迭���� �Ű������� �Ҵ��ϴ°� ������.
�迭�� �ٲ��� �ʰ� ���ο� ���� ������ �� ����. �迭�� ��ġ�ų� ���ο� �Լ��� �Ķ���ͷ� ������ �� �����ϰ� �� �� ����.


3. from
function addMark() {
	let newData= [];
	for (let i = 0; i<arguments.length; i++ ) {
		newData.push(arguments[i] + "!");
	}
	console.log(newData);	//[ '1!', '2!', '3!', '4!', '5!' ]
}
addMark(1,2,3,4,5);

//arguments : ���ڰ��� ���� �ʾƵ� �������� �� Ư���� �������� �̿��Ͽ� ���ڵ��� �迭�� ����� ���·� ������..? ��ü.�������� �Ķ���Ͱ� ���ö� ���� ����ϸ�, �������� ����

function addMark() {
	let newArray = Array.from(arguments);	//arguments�� ���� �迭�� �����? arguments�� ��¥ �迭�� �ƴϱ� ����
	let newData= arguments.map(function(value) {
		return value + "!";
	});
	console.log(newData);
}
addMark(1,2,3,4,5);