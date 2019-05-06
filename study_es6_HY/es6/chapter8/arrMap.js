
/*
map :배열 요소 변형
*/
const cart =[{name:'Widget',price:9.95},{name:'Gadget',price:22.95}];
const names = cart.map(x=>x.name);
const prices = cart.map(x=>x.price);
const discountPrices = prices.map(x=>x*0.8);

console.log(names);//[ 'Widget', 'Gadget' ]
console.log(`name:${names}`);
console.log(prices); //[ 9.95, 22.95 ]
console.log(`prices:${prices}`);
console.log(discountPrices);//[ 7.96, 18.36 ]
console.log(`discountPrices:${discountPrices}`);

/*
[ 'Widget', 'Gadget' ]
name:Widget,Gadget
[ 9.95, 22.95 ]
prices:9.95,22.95
[ 7.96, 18.36 ]
discountPrices:7.96,18.36
*/