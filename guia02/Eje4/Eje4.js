var calculadora = /** @class */ (function () {
    function calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    calculadora.prototype.suma = function () {
        var r = this.numero1 + this.numero2;
        return r;
    };
    calculadora.prototype.resta = function () {
        var r = this.numero1 - this.numero2;
        return r;
    };
    calculadora.prototype.multi = function () {
        var r = this.numero1 * this.numero2;
        return r;
    };
    calculadora.prototype.div = function () {
        var r = this.numero1 / this.numero2;
        return r;
    };
    return calculadora;
}());
var resultado = new calculadora(6, 7);
console.log("Suma: " + resultado.suma(), "Resta: " + resultado.resta(), "X: " + resultado.multi(), "/: " + resultado.div());
