const cart =[{name:'Widget',price:9.95},{name:'Gadget',price:22.95}];
const names = cart.map(x=>x.name);
const prices = cart.map(x=>x.price);
const discountPrices = prices.map(x=>x*0.8);

console.log(names);
console.log(`name:${names}`);
console.log(prices);
console.log(`prices:${prices}`);
console.log(discountPrices);
console.log(`discountPrices:${discountPrices}`);