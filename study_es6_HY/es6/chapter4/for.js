const player ={name: 'Thomas',rank:'Midshipman', age:25};
for(let prop in player){
	if(!player.hasownProperty(prop)) continue;
	console.log(prop + ":"+ player[prop]);
}

const hand=[randFace(),randFace(),randFace()];
for(let face of hand)
	console.log(`You rolled...${face}!`);

const hand=[randFace(),randFace(),randFace()];
for(let i=0;i<hand.length;i++)
	console.log(`Roll ${i+1} :  ${hand[i]}`);