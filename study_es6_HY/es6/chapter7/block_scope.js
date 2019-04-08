{
	let x ={color:'blue'};
	let y = x;
	let z =3;
	console.log(`1. ${y.color}`);//blue
	{
		let x= 5;
		console.log(`2. ${x}`);//5
		console.log(`2. ${y.color}`);//blue
		y.color = 'red';
		console.log(`2. ${z}`);//3
	}
	console.log(`3. ${x.color}`);//red
	console.log(`3. ${y.color}`);//red
	console.log(`3. ${z}`);//3

} 