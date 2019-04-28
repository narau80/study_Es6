const items =['Widget','Gadget'];
const prices =[9.95,22.65];
const cart = items.map((x,i)=>({name:x,price:prices[i]}));
const cart2 = prices.map((x,i)=>({name:items[i],price:x}));
console.log(cart);
console.log(cart2);