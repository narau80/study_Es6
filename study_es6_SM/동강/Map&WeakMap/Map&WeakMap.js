//map & weakMap

//array -> set , weakSet
//Object - > map, weakMap

//map 은 key / value 구조 -> 특이하게 key값에 객체를 저장한다고 보면 됨.

let wm = new WeakMap();

let myfun = function(){};
//이 함수가 얼마나 실행됐지? 를 알려고 할때.

wm.set(myfun,0);

console.log(wm);

let count = 0;
for(let i = 0; i < 10; i++){
  count = wm.get(myfun); //get value
  count++;
  wm.set(myfun, count);
}
  console.log(wm.get(myfun));

  myfun = null; //초기화 했을 시 
  console.log(wm.has(myfun));



  //weakMap 활용

const wm = new WeakMap();

 function Area(height, width){
 	//this.height = height;
 	//this.width = width;
 	wm.set(this, {height, width});
 }
 Area.prototype.getArea = function() {
 	const {height, width} = wm.get(this);
 	//return this.height * this.width;
 }
let myarea = new Area(10,20);
console.log(myarea.getArea());


myarea = nll;
