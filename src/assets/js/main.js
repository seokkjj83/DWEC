const lodash = require('lodash.merge');

document.addEventListener(('DOMContentLoaded'), () => {
    /* const paragraph = document.createElement('p');
    document.body.appendChild(paragraph);

    const merged = lodash.merge(person1, age1);
    paragraph.textContent = JSON.stringify(merged); */
    const miLienzo = document.getElementById('miGrafica');  
    const contexto = miLienzo.getContext('2d');
    const configuracion = {
        type: 'line',
        //         type: 'bar',(barras)
        data: {
            label: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
            datasets: [{
                label: 'LLuvias',
                data:[43600,23400,56780],
            }
            ]
        }
    };
    const configuracion2 = {
        type: 'bar',
        data: {
            label: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
            datasets: [{
                label: 'Ventas',
                data:[43600,23400,56780],
            }
            ]
        }
    };
    const grafica = new Chart(contexto, configuracion);   
}); 