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

function getNewsList([,{newslist}]){
	console.log(newslist);
}
getNewsList(news);
