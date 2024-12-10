import utilities from "./utilities";

const query = document.getElementById("current-query") as HTMLElement;


let currentQuery = utilities.getRandomQuery(1, 12);
let adjacentSolutions = utilities.getAdjacentSolutions(currentQuery);

query.innerHTML = `${currentQuery.a} x ${currentQuery.b} = ${currentQuery.solution}<br/>`;

adjacentSolutions.forEach(element => {
	query.innerHTML += `${element}<br/>`;
});