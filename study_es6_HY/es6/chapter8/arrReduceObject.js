const words=['Beachball','Rodeo','Angel','Aardvark','Xylophone','November','Chocolate','Papaya','Uniform','Jpker','Clover','Bali'];
const alphabetical =words.reduce((a,x)=>{
	console.log(a[x[0]]);
	if(!a[x[0]]) a[x[0]]=[];
	a[x[0]].push(x);
	return a;
	}, {});

console.log(alphabetical);

/*
{ B: [ 'Beachball', 'Bali' ],
  R: [ 'Rodeo' ],
  A: [ 'Angel', 'Aardvark' ],
  X: [ 'Xylophone' ],
  N: [ 'November' ],
  C: [ 'Chocolate', 'Clover' ],
  P: [ 'Papaya' ],
  U: [ 'Uniform' ],
  J: [ 'Jpker' ] }


*/