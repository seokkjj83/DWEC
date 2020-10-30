const math = require('./math.js');
const lodash = require('lodash.merge');

document.addEventListener('DOMContentLoaded', () => {
const paragraph = document.createElement('p');
paragraph.textContent = 'Soy un párrafo';
document.body.appendChild(paragraph);
paragraph.textContent = math.sum(3, 4);
const person1 = {name: 'Fran',surname: 'Serrano'};
const ageData = {age: 44};
const merged = lodash.merge(person1,ageData)
paragraph.textContent = JSON.stringify(merged);
});

//npm search lodash
//npm install lodash.merge

//browserify src/main.js -o src/bundle.js
/* const result = math.sum(1,2);
console.log(result); */
//Get-ExecutionPolicy
//Set-ExecutionPolity Unrestricted