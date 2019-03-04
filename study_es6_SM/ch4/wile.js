//m 이상 n 이하의 무작위 정수를 반환 합니다.
function rand(m, n) {
	return m + Math.floor((n - m + 1)*Math.random());

}

//크라운 앤 앵커 게임의 여섯 가지 도형 중 하나를 무작위로 반환 합니다.
function randFace() {
	return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let funds = 50; //시작 조건
let round = 0;

while(funds > 1 && funds < 100){ 
	round++;										//라운드 카운트
	console.log(`round : ${round}:`);				// rount : 라운드 카운트
	console.log(`\tstarting funds: ${funds}p` );	//가지고 있는 포인트
	// 돈을 겁니다.
	let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};	
	let totalBet = rand(1, funds);					//Math.floor => 소수점 이하는 버린다.  //Math.random => 랜덤 난수를 생성  //m + Math.floor((n - m + 1)*Math.random())   => 1 + (50 - 1 + 1) * 랜덤숫자\
	console.log(`\ttotalBet => ${totalBet}`);
	if(totalBet === 7){								//배팅금액이 7이 나오면 모든걸 다 건다.
	totalBet = funds;
	bets.heart = totalBet;
	}else{
		//판돈을 나눕니다.
		let remaining = totalBet;					//배팅 금액
		console.log(`\tremaining => ${remaining}`);
		do{
			let bet = rand(1, remaining);			//무작위로 배팅금액을 나눔
			let face = randFace();					//도형을 무작위로 가져옴
			bets[face] = bets[face] + bet;			//무작위 도형에 배팅금액 누적
			/*
				{ crown: 0, anchor: 0, heart: 0, spade: 16, club: 0, diamond: 0 }
				{ crown: 0, anchor: 0, heart: 3, spade: 16, club: 0, diamond: 0 }
				{ crown: 0, anchor: 0, heart: 3, spade: 22, club: 0, diamond: 0 }
				{ crown: 4, anchor: 0, heart: 3, spade: 22, club: 0, diamond: 0 }
				{ crown: 4, anchor: 2, heart: 3, spade: 22, club: 0, diamond: 0 }

			*/
			remaining = remaining - bet;
			/*
			 	totalBet => 6
		        remaining => 6
		        remaining => 6  bet => 2
		        remaining => 4  bet => 1
		        remaining => 3  bet => 2
		        remaining => 1  bet => 1

			*/
			
		} while(remaining > 0);
	}
	
	funds = funds - totalBet;						//전체 돈에서 배팅 금액을 뺌.

	console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') + ` (total: ${totalBet}) pence)`);
	//주사위를 굴립니다.
	const hand = [];
	for(let roll = 0; roll < 3; roll++){
		hand.push(randFace());						//hand배열에 randFace()의 요소를 추가
		/*
				hand => spade
		        hand => spade,heart
		        hand => spade,heart,club

		*/
	}
	console.log(`\thand: ${hand.join(', ')}`);

	//딴 돈을 가져옵니다.
	let winnings = 0;
	for(let die = 0; die < hand.length; die++) {

		let face = hand[die];
		if(bets[face] > 0) winnings = winnings + bets[face];	//도형별 배팅된 금액이 0보다 크면, 해당 도형에 배팅된 금액을 
	}
	funds = funds + winnings;									//전체 금액에 합산
	console.log(`\twinnings : ${winnings}`);
}
console.log(`\tending funds: ${funds}`);

