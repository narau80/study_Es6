//* 실습예제 *

function print() {
	/* 
	filter, includes, from 을 사용해서 문자열 'e'가 노드로 구성된 배열 만들어 변환
	*/
	let list = document.querySelectorAll("li");
	console.log(toString.call(list));	//[object NodeList] - node로 구성된 배열형태의 값
	let listArray = Array.from(list);	//li 노드로 구성된 배열
	console.log(toString.call(list));	//[object Array] - array로 변환.
	
	let eArray = listArray.filter(function(v) {
		return v.innerText.includes("e");
	});
	console.log(eArray.length);	// 3. v는 실제 배열의 요소(노드)
}
print();

//filter를 쓰기 위해 from을 써서 노드로 구성된 배열로 바꿔줌