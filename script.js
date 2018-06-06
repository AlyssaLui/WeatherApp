
var hotClothes = ["shorts", "t-shirt"];
var warmClothes = ["long pants", "light jacket"];
var coldClothes = ["warm jacket", "scarf"];

function displayHot(){
	document.getElementById('results').innerHTML = "";
	for(var i =0; i<hotClothes.length; i++){
		document.getElementById('results').innerHTML += " " + hotClothes[i];
	}
}
function displayWarm(){
	document.getElementById('results').innerHTML = "";
	for(var i =0; i<warmClothes.length; i++){
		document.getElementById('results').innerHTML += " " + warmClothes[i];
	}
}
function displayCold(){
	document.getElementById('results').innerHTML = "";
	for(var i =0; i<coldClothes.length; i++){
		document.getElementById('results').innerHTML += " " + coldClothes[i];
	}
}
