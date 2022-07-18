// Write your helper functions here!
require('isomorphic-fetch');
 
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById('missionTarget').innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
  `
}
 
function validateInput(testInput) {
   if (testInput.value === "") {
    return("Empty");
   }
   if (isNaN(testInput.value) === true) {
    return("Not a Number");
   }
   if (isNaN(testInput.value) === false) {
    return("Is a Number");
   }
}
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//VARIABLES
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    const launchStatus = document.getElementById('launchStatus');
 
 
//Pilot Validate and Update
if (validateInput(pilot) === "Is a Number") {
    alert("Please re-enter the pilot's name. Pilot's name cannot be a number.")
} else {
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
}
 
//Copilot Validate and Update
if (validateInput(copilot) === "Is a Number") {
    alert("Please re-enter the copilot's name. Copilot's name cannot be a number.")
} else {
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
}
 
//Fuel Level and Cargo Mass Validate
if (validateInput(fuelLevel) === "Not a Number") {
    alert("Please re-enter fuel level. Fuel level must be a number.")
} else if (validateInput(cargoLevel) === "Not a Number") {
    alert("Please re-enter cargo mass. Cargo mass must be a number.")
}
 
//Fuel Level and Cargo Mass Update
if (fuelLevel.value < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    launchStatus.style.color = 'red';
} else if (cargoLevel.value > 10000) {
    list.style.visibility = "visible";
    cargoStatus.innerHTML = `Cargo mass is too high for launch`;
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    launchStatus.style.color = 'red';
} else if (fuelLevel.value >= 10000 && cargoLevel.value <= 10000) {
    launchStatus.style.color = 'green';
    launchStatus.innerHTML = `Shuttle is Ready for Launch!`
}
 
}
 
async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
    });
    return planetsReturned;
}
 
function pickPlanet(planets) {
    const planet = planets[Math.floor(Math.random()*planets.length)];
    return planet;
}
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

