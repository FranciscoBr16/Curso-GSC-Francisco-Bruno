"use strict";
class PiladeNumeros {
    agregar(n) {
        this.objetos.push(n);
    }
    sacar() {
        return this.objetos.pop();
    }
    cantidad() {
        return this.objetos.length;
    }
    constructor(ar) {
        this.objetos = [];
        this.objetos = ar;
    }
}
class PiladeNumerosDistintos {
    constructor() {
        this.objetos = [];
    }
    agregar(n) {
        if (this.objetos.indexOf(n) === -1) {
            this.objetos.push(n);
        }
    }
    sacar() {
        return this.objetos.pop();
    }
    cantidad() {
        return this.objetos.length;
    }
}
var n1 = new PiladeNumeros([1, 2, 3, 4]);
var n2 = new PiladeNumerosDistintos();
n2.agregar(1);
n2.agregar(5);
n2.agregar(16);
n2.agregar(2);
n2.agregar(5);
console.log(n1);
console.log(n2);
