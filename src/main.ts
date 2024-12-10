import utilities from "./utilities";

const query = document.getElementById("current-query") as HTMLElement;
const answers = document.getElementById("answers") as HTMLElement;

// TODO: Add localizer for SE / EN
// Idea: Make something like "localizedString" that requires an ID
// When using said string it will automatically query the localizer the string related to its ID
// The localizer will return an apropriate string depending on the currently selected language.

// TODO: Tidy this up big time. This does not adhere to separation of concerns.
// It only serves as a test / proof of concept
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