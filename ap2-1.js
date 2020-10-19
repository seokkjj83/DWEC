// 1)

// a
/* function esString(item) {
    if(typeof item === "string"){
        return item;
    }
} */
let array = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
let newArray = array.filter(esString);
/* const result = array.filter(array.typeof == "string"); */
console.log(newArray);

//b
function esParYnumero(item) {
    if ((item % 2) == 0 && !isNaN(item)){
        return item;
    }
}
let array2 = ["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];
let result2 = array2.filter(esParYnumero);
console.log(result2);

//2
let dataArray = [4,5,7,2,10];
let average = dataArray.reduce((a,b) => b += a);
let avg = average/dataArray.length;
console.log(avg)

//3
let values=[23,18,19,64,32,14];
let findMinimum = values.reduce((a,b) => Math.min(a,b));
console.log(findMinimum);


//4
let values = [25,14,10,29,34];
let findGreaterThan = (a) => a > 20;
console.log(values.every(findGreaterThan));

//5
function multipleFactorial(a) {
    let resultado = 1;
    for (var i = a; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}
let values = [7, 4, 5, 2];
let newValues = values.map(multipleFactorial);
console.log(newValues);


//6
let users = ["jose","javi","carlos","laura","pepe","marcos"];
let blackListed = ["javi","carlos","laura"];
function checkingList(name){
    if (!blackListed.includes (name)){
        return name;
    }
}
let usersNotInBlackList = users.filter(checkingList);
console.log (usersNotInBlackList);