let data = ['crong', "honux", "jk", "jinny"]
//let jisu = data[0];
//let jung = data[2];

let [jisu,,jung] = data;
console.log(jisu, jung);
"crong"
"jk"




let obj = {
	name : "crong",
	address : "Korea",
	age : 10
}

//let{name, age} = obj;
//console.log(name, age);

let {name : myName, age:myAge} = obj;
console.log(myName, myAge);


var news = [
	{
		"title" : "sbs",
		"imgurl" : "www.naver.com",
		"newslist" : [
			"안녕",
			"하세요"
		]

	},
	{
		"title" : "mbc",
		"imgurl" : "www.navermbc.com",
		"newslist" : [
			"안녕",
			"하세요",
			"mbc"
		]
	}

];
/*
let [,mbc] = news;
let {title, imgurl} = mbc;
console.log(mbc);
*/
/*
let [, {title, imgurl}] = news;
console.log(imgurl);
*/


function getNewsList([{newslist}]) {
	console.log(newslist);
}
getNewsList(news);


/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <div>abcdefgijk</div>
</body>
</html>



document.querySelector("div").addEventListener("click", function({target}){
  console.log(target.innerText);
});




});
"abcdefgijk"


*/
