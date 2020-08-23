class calculadora {
    numero1:number;
    numero2:number;

    constructor(numero1:number,numero2:number){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    suma():number{
    let r = this.numero1 + this.numero2;
    return r;
    }

    resta():number{
        let r = this.numero1 - this.numero2;
        return r;
    }
    multi():number{
        let r = this.numero1 * this.numero2;
        return r;
    }
    div():number{
        let r = this.numero1 / this.numero2;
        return r;
    }
}

let resultado = new calculadora(6,7);
console.log("Suma: " + resultado.suma(), "Resta: " + resultado.resta(), "X: " + resultado.multi(),  "/: " +resultado.div());