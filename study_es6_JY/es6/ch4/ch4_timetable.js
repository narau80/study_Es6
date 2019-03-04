for (let i = 2; i <= 9; i++) {
	console.log(`*** ${i} TimeTable Start ***`);
	
	for (let j = 1; j  <= 9; j++) {
		let value = 0;
		value = i * j;
		console.log(`${i} * ${j} = ${value}`);
	}

	console.log(`*** ${i} TimeTable End ***\n`);
}
