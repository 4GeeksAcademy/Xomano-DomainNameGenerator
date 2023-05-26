window.onload = function() {
	createDomain();	
};

let pronoun = ['the','our','findthe'];
let adj = ['great', 'big','briliant','inteligent','smart' ];
let noun = ['jogger','racoon','dog','cat','elefant'];

function getRandom(range) {
	return Math.floor(Math.random() * range);
};

function createDomain(){
	let domain =
	pronoun[getRandom(pronoun.length)] + 
	adj[getRandom(adj.length)] + 
	noun[getRandom(noun.length)] +
	".com";

	document.getElementById("domain").innerHTML = domain;
};