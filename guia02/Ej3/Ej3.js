var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nomnbre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.salarioFinal = function () {
        var afp = this.salario * 0.0625;
        var isss = this.salario * 0.075;
        var renta = this.salario * 0.03;
        return this.salario - afp - isss - renta;
    };
    return Empleado;
}());
var calculo = new Empleado('Sergio Andres', 600);
console.log("Empleado " + calculo.nomnbre, "Salario " + calculo.salario, "Salario con Descuentos " + calculo.salarioFinal());
