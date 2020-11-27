(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//const lodash = require('lodash.merge');

document.addEventListener(('DOMContentLoaded'), () => {
    /* const paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    const person1 = {
        name : 'Esteban',
        surname : 'Herrera'
    }
    const age1 = {
        age : 28
    };

    const merged = lodash.merge(person1, age1);
    paragraph.textContent = JSON.stringify(merged); */
    const miLienzo = document.getElementById('miGrafica');  
    const contexto = miLienzo.getContext('2d');
    const configuracion = {
        type: 'line',
        data: {
            label: ['Enero','Febrero','Marzo'],
            datasets: [{
                label: 'Ventas',
                data:[43600,23400,56780],
            }
            ]
        }
    };
    const grafica = new Chart(contexto, configuracion);   
}); 
},{}]},{},[1]);
