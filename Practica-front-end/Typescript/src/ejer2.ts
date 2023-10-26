class Figura{

   public perimetro(){};
   public area(){} ;
}

class Circulo extends Figura {
    private radio :number;

    public area(){
        return  "El area del circulo es "+ ( Math.PI * this.radio ** 2);
    }

    public perimetro(){
        return "El perimetro del circulo es "+ (2 * Math.PI * this.radio);

    } 
    constructor (n : number ){
        super();
        this.radio = n;
    }

}

class Cuadrado extends Figura {
    private lado :number;
    
    public area(){
        return "El area del cuadrado es "+ (this.lado ** 2);
    }

    public perimetro() {
        return "El perimetro del cuadrado es " + (this.lado * 4);
    }

constructor(n:number){
    super();
    this.lado = n;
}
}
var cu = new Cuadrado(4);
var ci = new Circulo(5);

console.log(cu.perimetro());
console.log(ci.perimetro());

console.log(cu.area());
console.log(ci.area());