import utilities from "./utilities";

const query = document.getElementById("current-query") as HTMLElement;


let currentQuery = utilities.getRandomQuery(1, 12);

query.innerHTML = `${currentQuery.a} x ${currentQuery.b}`;