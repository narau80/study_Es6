let news=[
	{
		'title':'sbs',
		'imgurl':'http://static.naver.net/newsstand/2017/8313/articl_img/9054.jpg',
		'newslist':[
			'a',
			'b',
			'c',
			'd'
		]
	},
		{
		'title':'mbc',
		'imgurl':'http://static.naver.net/newsstand/2017/8313/articl_img/1052.jpg',
		'newslist':[
			'1',
			'2',
			'3',
			'4'
		]
	}
];

// let [,mbcNews] = news;
// console.log(mbcNews);
// let {title, imgurl} = mbcNews;
// console.log(title,imgurl);

let [,{title,imgurl}] = news;
console.log(imgurl);