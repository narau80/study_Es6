$(document).ready(function(){
	'user strict';
	//console.log('main.js loaded');

	paper.install(window);//전역 스코프에 설치
	paper.setup(document.getElementById('mainCanvas')); //paper.js를 캔버스에 연결하고 paper.js가 그림 그릴 수 있도록 준비

	//To do
	/*
		원그리기
	*/
	c = Shape.Circle(100, 100, 50);//x,y,radius
	c.fillColor = 'skyblue';

	/*
		반복적으로 원그리기
	*/
	var c;
	for(var x=25;x<400;x+=50){
		for(var y=25;y<400;y+=50){
			c = Shape.Circle(x, y, 20);//x,y,radius
			c.fillColor = 'pink';
		}
	}

	/*
		텍스트 도형 배경색
	*/
	var c =Shape.Circle(200,200,80);
	c.fillColor ='black';

	var text = new PointText(200,200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content ='hello world';

	/*
	사용자 입력 처리 : 비동기적 이벤트
	비동기적 이벤트:  이벤트가 언제 일어날지 프로그래머가 알수 없는 이벤트
	*/

	var tool= new Tool();
	tool.onMouseDown = function(e){//onMouseDown 이벤트 핸들러 연결
		//var c = Shape.Circle(e.point.x, e.point.y, 10);
		var c = Shape.Circle(e.point, 10);//객체,반지름
		c.fillColor ='white';
		console.log(e.point.x +' , '+e.point.y);
	};//이벤트 핸들러 역할: 클릭했을 때 코드 실행, 어디를 클릭했는지 보고

	paper.view.draw(); //화면에 그려라!

});