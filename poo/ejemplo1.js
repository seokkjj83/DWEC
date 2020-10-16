/* const coche1 = {
    marca: 'Seat',
    modelo: 'Ibiza'
};

const coche2 = {
    marca: 'Ford',
    modelo: 'Fiesta'
};

const coche3 = {
    marca: 'XC60',
    modelo: 'Volvo'
}; */

class Coche {
    constructor(marca, modelo, fabricacion){
        this.marca = marca;
        this.modelo = modelo;
        this.fabricacion = fabricacion;
    }

    getEdad(){
        return 2020 - this.fabricacion;
    }
}

const coche4 = new Coche('Volvo','XC60',2016);
console.log(coche4.fabricacion);



console.log(coche4.getEdad());