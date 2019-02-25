const o = {
	name : 'julie', 
	greetBackwards: function(){
		const getReversName = () => {
			let nameBackwards = '';
			for(let i = this.name.length-1; i >= 0; i--){
				nameBackwards += this.name[i];
			}
			return nameBackwards;
		};
		return `${getReversName()} si eman ym , olleH`;
	},
};
o.greetBackwards();
console.log(o.greetBackwards());	//eiluj si eman ym , olleH