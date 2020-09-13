class Persona{
    protected nombre:string;
    protected edad:number;

    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    
    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        }
     }

     class Empleado extends Persona {
        private sueldo:number;
        constructor(nombre:string, edad:number, sueldo:number) {
        super(nombre, edad);
        this.sueldo = sueldo;
        }

        imprimir(){
            super.imprimir();
            console.log(`Sueldo:${this.sueldo}`);
        }

        pagaImpuestos(){
            if(this.sueldo>5000)
            console.log(`${this.nombre} debe de pagar impuestos`);
            else
            console.log(`${this.nombre} No debe pagar impuestos`);

        }
    }

    const persona1=new Persona('Juan', 44);
persona1.imprimir();

const empleado1=new Empleado('Ana', 22, 7000);
empleado1.imprimir();
empleado1.pagaImpuestos();

//Clases Abstractas 
abstract class Operacion{
    public valor1:number;
    public valor2:number;
    public resultado:number=0;

    constructor(v1:number,v2:number){
        this.valor1=v1;
        this.valor2=v2;
    }

    abstract operar():void;
    imprimir() {
        console.log(`Resultado: ${this.resultado}`);
        }
}
    class Suma extends Operacion{
        constructor(v1:number,v2:number){
            super(v1,v2)
        }
        operar(){
            this.resultado=this.valor1 + this.valor2
        }
    }

    class Resta extends Operacion {
        constructor(v1:number, v2:number) {
        super(v1,v2);
        }
        
        operar() {
        this.resultado = this.valor1 - this.valor2;
        }
        }

        let suma1:Suma;
        suma1=new Suma(10, 4);
        suma1.operar();
        suma1.imprimir();

        let resta1: Resta;
        resta1=new Resta(10, 4);
        resta1.operar();
        resta1.imprimir();
