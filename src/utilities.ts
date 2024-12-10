const utilities = Object.freeze({
	getRandomQuery: (min:number, max:number) => {

		let a = Math.floor(Math.random() * (max - min) + min);
		let b = Math.floor(Math.random() * (max - min) + min);

		return {a: a, b: b, solution: a*b};
	},
});

export default utilities;