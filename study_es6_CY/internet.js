function Area(height,width){
	this.height = height;
	this.width	= width;

}

Area.prototype.getArea = function(){

	return this.height * this.width;
}

let myarea = new Area(10.20);
console.log(myarea.getArea());
console.log(myarea,height);