//* 실습예제 *

function print() {
	/*
	filter, includes, from 을 사용해서 문자열 'e'가 노드로 구성된 배열 만들어 변환
	*/
	let list = document.querySelectorAll("li");
	let listArray = Array.from(list);	//li 노드로 구성된 배열
	console.log(toString.call(listArray));	//li의 값들이 array로 변환된 것을 확인

	let eArray = listArray.filter(function(v) {
		return v.innerText.includes("e");
	});
	console.log(eArray.length);
}
print();