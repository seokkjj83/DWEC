const rand=(Math.round(Math.random()*12));
const num1=prompt("Dame un numero");
do{
    console.log(rand);
    if(num1<1 || num1>12){
        const num1=prompt("Dame un numero entre el 1 y el 12");  

    }
}while(rand!=num1);

alert("Los numeros "+num1+" han coincidido");