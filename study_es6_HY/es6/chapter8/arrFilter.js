const cards=[];
for(let suit of['H','C','D','S']) //하트, 클로버, 다이아몬드, 스페이드
 for(let value=1;value<=13;value++){
 	cards.push({suit, value});
 	//console.log(cards);
 }
 let result = cards.filter(c=> c.value === 2);
 //console.log(result);
 /*
[ { suit: 'H', value: 2 },
  { suit: 'C', value: 2 },
  { suit: 'D', value: 2 },
  { suit: 'S', value: 2 } ]
 */

//다이아몬드
result = cards.filter(c=>c.suit === 'D');
//console.log(result);
/*
[ { suit: 'D', value: 1 },
  { suit: 'D', value: 2 },
  { suit: 'D', value: 3 },
  { suit: 'D', value: 4 },
  { suit: 'D', value: 5 },
  { suit: 'D', value: 6 },
  { suit: 'D', value: 7 },
  { suit: 'D', value: 8 },
  { suit: 'D', value: 9 },
  { suit: 'D', value: 10 },
  { suit: 'D', value: 11 },
  { suit: 'D', value: 12 },
  { suit: 'D', value: 13 } ]

*/
//킹, 퀸, 주니어
result = cards.filter(c=>c.value > 10);
//console.log(result.length);

//하트의 킹, 퀸, 주니어
result = cards.filter(c=>c.suit ==='H' && c.value >10)
//console.log(result);

function cardToString(c){
	const suits = {'H':'\u2665','C':'\u2663','D':'\u2666','S':'\u2660'};;
	const values={1:'A',11:'J',12:'Q',13:'K'};
	for(let i=2;i<=10;i++) values[i] =i;
	return values[c.value] + suits[c.suit];
}

result = cards.filter(c=>c.value === 2)
	.map(cardToString);
console.log(result); // [ '2♥', '2♣', '2?', '2♠' ]


result =cards.filter(c=>c.suit ==='H' && c.value >10).map(cardToString);
console.log(result); //[ 'J♥', 'Q♥', 'K♥' ]
