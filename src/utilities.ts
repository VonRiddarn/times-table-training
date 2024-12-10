import MathQuery from "./math-query";

const utilities = Object.freeze({
	
	getRandomNumber: (min: number, max: number):  number => Math.floor(Math.random() * (max - min) + min),

	getRandomQuery: (min:number, max:number): MathQuery => {

		let a = utilities.getRandomNumber(min, max);
		let b = utilities.getRandomNumber(min, max);

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
		if(query.a + query.b !== query.solution)
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
		/*else
			console.log(`Succeeded in ${currentTick} ticks!`);*/

		return [...uniqueSolutions];
	},

	fisherYatesShuffle: <T>(array: T[]) => {
	let m: number = array.length
	let t: T;
	let i: number;

	// While there remain elements to shuffle…
	while (m) {

		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
	},
});

const getAdjacentSolution = (solution: number): number => solution + utilities.getRandomNumber(-3, 7);

export default utilities;