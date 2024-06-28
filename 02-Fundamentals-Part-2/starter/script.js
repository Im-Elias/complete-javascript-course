"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has a population of ${population} million and the capital city is ${capitalCity}.`;
}

console.log(describeCountry("Germany", 82, "Berlin"));
console.log(describeCountry("France", 65, "Paris"));
console.log(describeCountry("Italy", 60, "Rome"));

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const population1 = percentageOfWorld1(82);
const population2 = percentageOfWorld1(65);
const population3 = percentageOfWorld1(60);

console.log(population1, population2, population3);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const population4 = percentageOfWorld2(82);
const population5 = percentageOfWorld2(65);
const population6 = percentageOfWorld2(60);

console.log(population4, population5, population6);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const population7 = percentageOfWorld3(82);
const population8 = percentageOfWorld3(65);
const population9 = percentageOfWorld3(60);

console.log(population7, population8, population9);

const describePopulation = (
  country,
  population
) => `${country} has ${population} million people. which is
${percentageOfWorld3(population)}% of the world population.`;

console.log(describePopulation("Germany", 82));
console.log(describePopulation("France", 65));
console.log(describePopulation("Italy", 60));

const populations = [82, 65, 60, 72];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

const neighbours = ["Germany", "France", "Italy", "Spain"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("probably a central european country");
}

neighbours[neighbours.indexOf("Italy")] = "UK";
console.log(neighbours);

const myCountry = {
  country: "Chile",
  capitalCity: "Santiago",
  language: "Spanish",
  population: 20,
  neighbours: ["Argentina", "Bolivia", "Peru", "Uruguay"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language} speakers, ${this.neighbours.length} neighbours and a capital named ${this.capitalCity}.`;
  },

  isIsland: function () {
    return this.neighbours.length === 0 ? true : false;
  },
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speakers, ${myCountry.neighbours.length} neighbours and a capital named ${myCountry.capitalCity}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

console.log(myCountry.describe());
console.log(myCountry.isIsland());
