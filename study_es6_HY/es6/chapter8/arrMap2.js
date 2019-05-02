const items =['Widget','Gadget'];
const prices =[9.95,22.65];
const cart = items.map((x,i)=>({name:x,price:prices[i]}));
const cart2 = prices.map((x,i)=>({name:items[i],price:x}));
console.log(cart); //[{name:Wiget,price:9.95},{name:Gadget,price:22.65}]
console.log(cart2);//[{name:Wiget,price:9.95},{name:Gadget,price:22.65}]