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