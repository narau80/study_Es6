//m이상  n이하의 무작위 정수를 반환 
function rand(m,n){
	return m + Math.floor((n-m+1) *Math.random());
}

//크라운 앤 앵커 게임의 여섯가지 도형 중 하나를 무작위 반환
function randFace(){
	return ["crown","anchor","heart","spade","club","diamond"]
	 	[rand(0,5)];
}

let funds = 50;//시작조건
let round =0;
while(funds > 1 && funds <100){
	round++;
	console.log('round ${round}:');
	console.log('\tstarting funds: ${funds}p');
	//funds = funds + 2;
	//funds = funds - 1;
	//돈 걸기
	let bets = {crown:0, anchor:0, heart:0, spade:0, diamond:0};
	let totalBet = rand(1, funds);
	if(totalBet ===7){
		totalBet = funds;
		bets.heart = totalBet;
	}else{
		//판돈 나누기
		let remaining = totalBet;
		do{
			let bet = rand(1, remaining);
			let face = randFace();
			bets[face] = bets[face] + bet;
			remaing = remaining - bet;
		}while(remaining > 0);

	}
	/*
	switch(totalBet){
		case 7:
			totalBet = funds;
			break;// return funds;처럼 return으로 즉시 함수를 빠져나갈 수 있음.
		case 13: //funds, totalBet 값 모두 변동
			funds =  funds - 1;
		case 11:
			totalBet=0;
			break;
		case 21:
		 	totalBet=21;
		 	break;
		default:
			console.log("No superstition here!");
			break;
	}
	*/
	funds = funds + totalBet;
	console.log('\tbets:' + Object.keys(bets).map(face => `${face}:${bets[face]} pence`).join(', ') + `(total: ${totalBet} pence`);


	//주사위 굴리기
	const hand=[];
	for(let roll=0;roll<3;roll++){
		hand.push(randFace());
	}
	console.log(`\thand:${hand.join(', ')}`);

	//그림 맞추면 돈가져오기
	let winnings =0;
	for(let die=0;die<hand.length;die++){
		let face = hand[die];
		if(bets[face] >0) winnings = winnings + bets[face];
	}
	funds = funds + winnings;
	console.log(`\tending funds:${funds}`);
}
console.log(`\tending funds:${funds}`);
