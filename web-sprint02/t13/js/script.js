function Calculator() {
	this.res = 0;
	this.init = (someNum) => {
		this.res = someNum;
		return this;
	}
	this.add = (someNum) => {
		this.res += someNum;
		return this;
	}
	this.sub = (someNum) => {
		this.res -= someNum;
		return this;
	}
	this.mul = (someNum) => {
		this.res *= someNum;
		return this;
	}
	this.div = (someNum) => {
		this.res /= someNum;
		return this;
	}
	this.alert = () => {
		setTimeout(() => alert(this.res), 5000);
		return this;
	}
}
