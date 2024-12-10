import utilities from "./utilities";

const query = document.getElementById("current-query") as HTMLElement;
const answers = document.getElementById("answers") as HTMLElement;

let currentQuery = utilities.getRandomQuery(1, 12);
let solutionList = utilities.getAdjacentSolutions(currentQuery);
solutionList.push(currentQuery.solution);

query.innerHTML = `${currentQuery.a} x ${currentQuery.b}`;

solutionList.forEach(element => {
	let b = answers.appendChild(document.createElement("button") as HTMLButtonElement);
	b.innerHTML = element.toString();
});