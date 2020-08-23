var rombo = /** @class */ (function () {
    //Constructor
    function rombo(_DiagonalVertical, _DiagonalHorizontal) {
        this.DiagonalVertical = _DiagonalVertical;
        this.DiagonalHorizontal = _DiagonalHorizontal;
    }
    rombo.prototype.area = function () {
        return this.DiagonalHorizontal * this.DiagonalVertical;
    };
    return rombo;
}());
var rombo1 = new rombo(5, 3);
console.log(rombo1.area());
