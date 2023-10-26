/* Ejercicio 1 */

function miMap(unArreglo){
let arr = [];
    for (let elemento of unArreglo){
        if(elemento > 10){
        arr.push(elemento);}
        else {arr.push(elemento *2);}
    }
return arr;
}

var prueba = miMap([10, 12 , 3 , 6 , 8 , 16 ]);
console.log(prueba);

/* Ejercicio 2 */

function miFind(unArreglo){
let encontrado ;
    for (let elemento of unArreglo){
        if (elemento > 10){
            encontrado = elemento;
            break;
        }
    }
    return encontrado;
}

var prueba = miFind([1,2,10,1,8,2]);
var prueba2 = miFind([1,2,10,16,8,28]);
console.log(prueba);
console.log(prueba2);

/* Ejercicio 3 */

function miFilter(unArreglo){
let arr = [];
for(let elemento of unArreglo){
    if (elemento > 10){
        arr.push(elemento)
    }
}
return arr;
}
var prueba = miFilter([1,2,10,1,8,2]);
var prueba2 = miFilter([1,2,10,16,8,28,36,91,3]);
console.log(prueba);
console.log(prueba2);

/* Ejercicio 4 */

function miReduce(unArreglo, acum){
for(let elemento of unArreglo){
    acum = elemento + acum;
}
return acum;
}

var prueba = miReduce([1,2,3,4,5], 0);
var prueba2 = miReduce([1,2],5);
console.log(prueba);
console.log(prueba2);

/* Ejercicio 5 */

function plus (a,b) {return a+ b};
function minus (a,b) {return a - b};
function divideBy (a,b) {return Math.trunc(a / b);}
function times (a,b) {return a * b};
function one (f) {return 1}
function two (f) {return 2}
function three (f) {return 3}
function four (f) {return 4}
function five (f) {return 5}
function six (f) {return 6}
function seven (f) {return 7}
function eight (f) {return 8}
function nine (f) {return 9}

console.log(times(one(),five()));
console.log(plus(four(),nine())); 
console.log(minus(eight(),three())); 
console.log(divideBy(six(),two()));

// No pude hacerlo de la forma que esta definido en el ejercicio

