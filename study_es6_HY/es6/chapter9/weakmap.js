const SecretHolde =(function(){
	const secrets  = new WeakMap();
	return class{
		setSecret(secret){
			secrets.set(this, secret);
		}
		getSecret(){
			return secrets.get(this);
		}
	}
})();