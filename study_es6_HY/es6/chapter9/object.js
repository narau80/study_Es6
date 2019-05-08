const SYM = Symbol();
const o={a:1,b:2,c:3,[SYM]:4};
Object.keys(o).forEach(prop=>console.log(`${prop}:${o[prop]}`));

/*
a: 1
b: 2
c: 3
*/

const oj = {apple:1,xochitl:2,balloon:3,guiter:4,xylophone:5,};
Object.keys(oj)
	.filter(prop=>prop.match(/^x/))
	.forEach(prop=>console.log(`${prop}:${oj[prop]}`));

/*
xochitl:2
xylophone:5
*/