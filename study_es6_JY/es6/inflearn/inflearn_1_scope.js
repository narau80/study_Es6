1. let

var name = "global var";

function home() {
	var homevar = "homevar";
	for (var i = 0; i<100; i++) {
	}
	console.log(i);	//100
}
home();

/*
home() �Լ� ����, ���� ���������� �Լ� �ȿ��� ���� ����������
var�� ���������� �켱�̱� ������ �������� ���� ���� ã�� scope ���� name ���� ã�´�
*/

var name = "global var";

function home() {
	var homevar = "homevar";
	for (let i = 0; i<100; i++) {
	}
	console.log(i);	// ��������
}
home();

/* for �� �ȿ����� ��ȿ�� ���̶� ���� ����
for�� �ȿ��� ����ϸ� 0~100���� ���
for���̳� if���� ���� ��� ������ scope�� let������ ������ ��. ��� �ȿ����� ����? */



2. closure
colsure ���� : ���� i���� ������ �����ϸ鼭 for�� �ȿ��� ��� �Ȱ��� ���� ���� �ִ�..?
�̶� for������ var -> let���� �����ϸ� ����� ���� �ִ� Ư�� ������ ����ϰ� �ִٰ� ����?

3. const
function home() {
	const homename = "my house";
	homename = "your house";
	console.log(homename);	// ���� ����. const�� Ÿ�Կ� ������� ���Ҵ��ϸ� ������. homename�� �迭�̶� ������
}
home();

- const�� �⺻���� ���,
- ������ �� �� �ִ� ������ let ���.
- var�� ������� ����.
- const�� ����ϴ��� �迭�� ������Ʈ�� ���� ������ �� �ִ�.(const�� �Һ��� �ǹ��ϴ� ���� �ƴϴ�)

4. ES2015 string�� ���ο� �ż����.
1) startsWith - ������ ��ġ�ϴ� ���ڿ�����
ex) 
let str = "hello world ! ";
let matchstr = "hello";
str.startsWith(matchstr));
// ��� : true

2)endsWith - ���� ��ġ�ϴ� ���ڿ�����
let str = "hello world ! ";
let matchstr = "^ !";
str.endsWith(matchstr));
// ��� : false

3)includes - ��Ī�Ǵ� ���ڿ��� �ִ���
ex)
let str = "hello world ! ";
str.includes("world");
// ��� : true