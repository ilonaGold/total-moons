const solarSystem = document.getElementById("solarSystem");

const planetsObj = [
    {
    "name": "Mercury",
    "moons": 0
    },
    {
    "name": "Venus",
    "moons": 0
    },
    {
    "name": "Earth",
    "moons": 1
    },
    {
    "name": "Mars",
    "moons": 2
    },
    {
    "name": "Jupiter",
    "moons": 67
    },
    {
    "name": "Saturn",
    "moons": 62
    },
    {
    "name": "Uranus",
    "moons":27
    },    {
    "name": "Neptune",
    "moons": 14
    }
];

let startingNumber = 0;
let count;

const totalMoons = planetsObj.reduce((acc, planet) => {
  return acc + planet.moons;
}, 0);

function displayPlanets(arr){
    let html = '';
    return arr.forEach((item) => {
        html += `
        <li><span class="bold">${item.name}:</span><span>${item.moons} moons</span></li>
        `
       solarSystem.innerHTML = `
       <ul>${html}</ul>
        <p class="bold total-moons-p">total moons in the solar system: <span id="total">${totalMoons}<span><p>
       `
    });
}

displayPlanets(planetsObj);

function countMoons() {
  document.getElementById("total").textContent = startingNumber;
  startingNumber++;
  if (startingNumber === totalMoons + 1) {
    clearInterval(count);
  }
}

count = setInterval(countMoons, 10);



