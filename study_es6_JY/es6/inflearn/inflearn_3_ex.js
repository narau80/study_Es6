//* �ǽ����� *

function print() {
	/*
	filter, includes, from �� ����ؼ� ���ڿ� 'e'�� ���� ������ �迭 ����� ��ȯ
	*/
	let list = document.querySelectorAll("li");
	let listArray = Array.from(list);	//li ���� ������ �迭
	console.log(toString.call(listArray));	//li�� ������ array�� ��ȯ�� ���� Ȯ��

	let eArray = listArray.filter(function(v) {
		return v.innerText.includes("e");
	});
	console.log(eArray.length);
}
print();