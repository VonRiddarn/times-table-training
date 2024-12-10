const utilities = Object.freeze({
	
	getRandomQuery: (min:number, max:number) => {

		let a = Math.floor(Math.random() * (max - min) + min);
		let b = Math.floor(Math.random() * (max - min) + min);

		return {a: a, b: b, solution: a*b};
	},
	// This is pretty, but it regularly creates duplicates.
	getAdjacentSolutions: (solution: number, amount: number = 5) => new Array(amount).fill(0).map((e) => getAdjacentSolution(solution)),
});

const getAdjacentSolution = (solution: number): number => {

	solution += Math.floor(Math.random() * (10 - 1) + 1);

	return solution;
};

export default utilities;