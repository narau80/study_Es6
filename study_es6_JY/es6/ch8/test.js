 function cardToString(c) {
	 const suits = {'H' : '\u2665', 'C' : '\u2663', 'D' : '\u2666', 'S' : '\u2660'};
	 const values = {1 :'A', 11 : 'J', 12: 'Q', 13 : 'K'};
	 for (let i=2; i<=10 ;i++) values[i] = i;
	 return values[c.value] + suits[c.suit];
 }

cards.filter(c=>c.value === 2)
	.map(cardToString);
	console.log(.map(cardToString));

card.filter(c=>c.value > 10 && c.suit === 'H');
	.map(cardToString);