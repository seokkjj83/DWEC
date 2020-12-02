document.addEventListener(('DOMContentLoaded'), () => {


    const miLienzo = document.getElementById('miGrafica').getContext('2d');
    const configuracion = new Chart(miLienzo, {
        type: 'bar',
        data: {
            datasets: [{

                    label: 'Temperaturas',
                    borderColor: 'rgb(153, 102, 255)',
                    data: [],
                    type: 'line',
                    order: 2
                }, {
                    label: 'Lluvias',
                    backgroundColor: 'rgb(180, 122, 132)',
                    data: [],
                    order: 1
                },

            ],
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    const boton = document.getElementById('boton');
    boton.addEventListener('click', () => {
        let value = document.getElementById('month').value.split(',');
        let value1 = document.getElementById('temp').value.split(',');
        let value2 = document.getElementById('rain').value.split(',');
        for (let i = 0; i < value.length; i++) {
            configuracion.data.datasets[0].data[value[i] - 1] = value1[i];
            configuracion.data.datasets[1].data[value[i] - 1] = value2[i];
        }
        if (value.length == value1.length && value1.length == value2.length) {
            configuracion.update();
        } else {

            alert('Introduce los meses para continuar');

        }
    })
});