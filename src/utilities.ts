import MathQuery from "./math-query";

const utilities = Object.freeze({
	
	getRandomQuery: (min:number, max:number): MathQuery => {

		let a = Math.floor(Math.random() * (max - min) + min);
		let b = Math.floor(Math.random() * (max - min) + min);

		return {
			a: a, 
			b: b, 
			solution: a*b
		};
	},
	// This is pretty, but it regularly creates duplicates.
	getAdjacentSolutions: (query: MathQuery, amount: number = 5) => {
		const uniqueSolutions = new Set<number>();

		// I feel the "mistake times (x) for add (+)" clause is so common it deserves to always be included.
		uniqueSolutions.add(query.a + query.b);

		// Emergency breakout in case of endless non-random random.
		let currentTick = 0;

		while(uniqueSolutions.size < amount && currentTick < 100)
		{
			const newSolution = getAdjacentSolution(query.solution);
			if(newSolution === query.solution)
				continue; // Wont use a tick

			uniqueSolutions.add(newSolution);
			currentTick++;
		}

		if(currentTick >= 100)
			console.log("ERROR: Too many retries!");
		else
			console.log(`Succeeded in ${currentTick} ticks!`);

		return [...uniqueSolutions];
	},
});

const getAdjacentSolution = (solution: number): number => {
	console.log(solution);
	solution += Math.floor(Math.random() * (7 - -3) + -3);
	console.log(solution);

	return solution;
};

export default utilities;