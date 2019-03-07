//* �ǽ����� *

function print() {
	/* 
	filter, includes, from �� ����ؼ� ���ڿ� 'e'�� ���� ������ �迭 ����� ��ȯ
	*/
	let list = document.querySelectorAll("li");
	console.log(toString.call(list));	//[object NodeList] - node�� ������ �迭������ ��
	let listArray = Array.from(list);	//li ���� ������ �迭
	console.log(toString.call(list));	//[object Array] - array�� ��ȯ.
	
	let eArray = listArray.filter(function(v) {
		return v.innerText.includes("e");
	});
	console.log(eArray.length);	// 3. v�� ���� �迭�� ���(���)
}
print();

//filter�� ���� ���� from�� �Ἥ ���� ������ �迭�� �ٲ���