Destructuring : 할당
1. Destructuring Array
let data = ["crong", "honux", "jk", "jinny"];
/*let jisu = data[0];
let jung = data[2];*/
//위와 같이 필요한 배열의 원소가 n개 있을 때 특정 인덱스에 있는 값에 의미가 있을때 그것을 뽑아 쓸 수 있다.

let [jisu,,jung] = data;
console.log(jisu, jung);	//crong jk
//0번째, 2번째 값을 가지고 jisu, jung 이란 이름으로 사용하겠다.
//변수에 배열이나 오브젝트에 필요한 값을 할당하는데 유용하게 사용.


2. Destructuring Object
let obj = {
	name : "crong",
	address : "Korea",
	age : 10
}

let {name, age} = obj;
console.log(name, age);	//crong 10

//다른 이름으로 바꿀 수도 있음
let {name:myName, age:myAge} = obj;	//<- = obj; 로 써서 할당.
console.log(myName);	//crong

3. Destructuring JSON 활용
var news = [
{
	"title" : "sbs",
	"imgurl" : "http://www",
	"newslist" : [
			"[가보니]",
			"갤럭시s8 출시",
			"블록체인"
	]
},
{	
	"title" : "mbc",
	"imgurl" : "http://mbc",
	"newslist" : [
			"Lorem",
			"adipisicin",
			"test"
	]
}
];

// json으로 받았을때 파싱. mbc항목만 따로 뽑으려면
let [,mbc] = news;	//mbc가 두번째니까 [, mbc]로 작성. mbc값을 변수로 뽑을 수 있다.
console.log(mbc);
/*
결과
{ title: 'mbc',
  imgurl: 'http://mbc',
  newslist: [ 'Lorem', 'adipisicin', 'test' ] }
*/

let {title, imgurl} = mbc;
console.log(title, imgurl);	//title, imgurl의 값만 출력
/*
mbc http://mbc
*/

// => 간단하게 파싱 할때는 news의 몇번째 인덱스에서 가져온다 하고 지정할 수 있지만 Destructuring을 이용해 값을 불러 올 수도 있다

//위의 값(mbc)을 한번에 뽑으려면
let [, {title, imgurl}] = news;		//첫번째 배열값으로 ,를 쓰고 Destructuring을 이용해 두번째 값을 뽑았다. 
console.log(imgurl);	// 결과 : http://mbc   / object Destructuring 을 통해 필요한 값만 뽑아낼 수 있다


4. Destructuring Function 활용
var news = [
{
	"title" : "sbs",
	"imgurl" : "http://www",
	"newslist" : [
			"[가보니]",
			"갤럭시s8 출시",
			"블록체인"
	]
},
{	
	"title" : "mbc",
	"imgurl" : "http://mbc",
	"newslist" : [
			"Lorem",
			"adipisicin",
			"test"
	]
}
];

function getNewsList([, {newslist}]) {
	//console.log(newslist);	//[ 'Lorem', 'adipisicin', 'test' ]	두번째 중에서 이름이 newslist인 것을 뽑아 온다.
}
getNewsList(news);


function getNewsList([{newslist}]) {
	console.log(newslist);	//[ '[가보니]', '갤럭시s8 출시', '블록체인' ] 첫번째의 newslist 값을 불러옴
}
getNewsList(news);

//event callback 함수에서도 활용 할 수 있다...