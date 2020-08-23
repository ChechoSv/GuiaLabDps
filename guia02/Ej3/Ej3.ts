class Empleado {
    nomnbre:string;
    salario:number;

    constructor(nombre:string,salario:number){
        this.nomnbre = nombre;
        this.salario = salario;
    }

    salarioFinal() : number {
        let afp = this.salario * 0.0625;
        let isss = this.salario * 0.075;
        let renta = this.salario * 0.03;
        return this.salario - afp - isss - renta;
    
     }
    

}

 let calculo = new Empleado('Sergio Andres',600);
 console.log("Empleado " + calculo.nomnbre,"Salario "+ calculo.salario, "Salario con Descuentos " +calculo.salarioFinal());
