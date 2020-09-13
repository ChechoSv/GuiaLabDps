var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre:" + this.nombre + " y edad:" + this.edad);
    };
    return Persona;
}());
var persona1;
persona1 = new Persona('Juan', 45);
persona1.imprimir();
//MODIFICADORES DE ACCESO Y METODOS
var Dado = /** @class */ (function () {
    function Dado() {
    }
    Dado.prototype.tirar = function () {
        this.generar();
    };
    Dado.prototype.generar = function () {
        this.valor = Math.floor(Math.random() * 6) + 1;
    };
    Dado.prototype.imprimir = function () {
        console.log("Salio el valor " + this.valor);
    };
    return Dado;
}());
var dado1 = new Dado();
dado1.tirar();
dado1.imprimir();
//Modificador ReadOnly
var Articulo = /** @class */ (function () {
    function Articulo(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    Articulo.prototype.imprimir = function () {
        console.log("Codigo:" + this.codigo + " Descripcion:" + this.descripcion + " Precio:" + this.precio);
    };
    return Articulo;
}());
var articulo1;
articulo1 = new Articulo(1, 'Papas', 12.5);
articulo1.imprimir();
//Propiedades Estaticas
var Dado_ = /** @class */ (function () {
    function Dado_() {
    }
    Dado_.prototype.tirar = function () {
        this.generar();
    };
    Dado_.prototype.generar = function () {
        this.valor1 = Math.floor(Math.random() * 6) + 1;
        Dado_.tiradas++;
    };
    Dado_.prototype.imprimir = function () {
        console.log("Salio el valor " + this.valor1);
    };
    Dado_.tiradas = 0;
    return Dado_;
}());
var dado1_ = new Dado_();
dado1_.tirar();
dado1_.imprimir();
var dado2_ = new Dado_();
dado2_.tirar();
dado2_.imprimir();
console.log("Cantidad de tirasas de dados:" + Dado_.tiradas); //2
//Metodos Estaticas
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.mayor = function (v1, v2) {
        if (v1 > v2)
            return v1;
        else
            return v2;
    };
    Matematica.menor = function (v1, v2) {
        if (v1 < v2)
            return v1;
        else
            return v2;
    };
    Matematica.aleatorio = function (inicio, fin) {
        return Math.floor((Math.random() * (fin + 1 - inicio)) + inicio);
    };
    return Matematica;
}());
var x1 = Matematica.aleatorio(1, 10);
var x2 = Matematica.aleatorio(1, 10);
console.log("El mayor entre " + x1 + " y " + x2 + " es " + Matematica.mayor(x1, x2));
console.log("El menor entre " + x1 + " y " + x2 + " es " + Matematica.menor(x1, x2));
