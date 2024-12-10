import utilities from "./utilities";

const query = document.getElementById("current-query") as HTMLElement;
const answers = document.getElementById("answers") as HTMLElement;

function refresh()
{
	let currentQuery = utilities.getRandomQuery(1, 12);
	let solutionList = utilities.getAdjacentSolutions(currentQuery);

	solutionList.push(currentQuery.solution);
	solutionList = utilities.fisherYatesShuffle(solutionList);

	query.innerHTML = `${currentQuery.a} x ${currentQuery.b}`;
	answers.innerHTML = "";

	solutionList.forEach(element => {
		let b = answers.appendChild(document.createElement("button") as HTMLButtonElement);
		b.innerHTML = element.toString();
		b.addEventListener('click', (e) => {
			let correct = element === currentQuery.solution;
			console.log(`${correct ? "✔" : "✖"} ${element} ${correct ? "=" : "!="} ${currentQuery.solution}`);
			refresh();
		});
	});
}

refresh();