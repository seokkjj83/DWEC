(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const math = require('./math.js');

document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Soy un párrafo';
    document.body.appendChild(paragraph);
    paragraph.textContent = sum(3, 4);
})

//browserify src/main.js -o src/bundle.js
/* const result = math.sum(1,2);
console.log(result); */
//Get-ExecutionPolicy
//Set-ExecutionPolity Unrestricted
},{"./math.js":2}],2:[function(require,module,exports){
const sum = (summand1, summand2) => {
    return summand1 + summand2;
}

const substract = (number1, number2) => {
    return number1 - number2;
}
//npm init
//npm install -g browserify
//npm i -g
module.exports = {sum, substract};
},{}]},{},[1]);
