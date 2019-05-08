const words=['Beachball','Rodeo','Angel','Aardvark','Xylophone','November','Chocolate','Papaya','Uniform','Jpker','Clover','Bali'];
//const longWords = words.reduce((a,w)=> w.length > 6 ? a+" "+w : a ,"");//초기값 ""
const longWords = words.reduce((a,w)=>{
	console.log(`a:${a}\nw:${w}, ${w.length}\nreturn : ${w.length > 6 ? a+" "+w : a}`);
	console.log('-------------------------------------------------------');
	return w.length > 6 ? a+" "+w : a;
}, "").trim();
console.log(longWords);

const longWords2 = words.filter(x=>x.length >6).join(" "); //filter,join 이용
console.log(longWords2);

/*
Beachball Aardvark Xylophone November Chocolate Uniform
*/