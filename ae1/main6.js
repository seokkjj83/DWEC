do{
    var num=prompt('Dame un numero');
 
    if(isNaN(num)){
        alert('Introduce un numero');
    }else{
    if(num%1==0){
        if(num%2==0){
            alert('El numero introducido es par');
        }else{
            alert('El numero introducido es impar');
        }

    }else{
        alert('Introduce un numero entero');
    }
        }
}while(num.isNaN && num%1!=0);