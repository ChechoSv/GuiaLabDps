 class rombo{

    //Atributos
    DiagonalVertical:number;
    DiagonalHorizontal:number;
   //Constructor
    constructor(_DiagonalVertical:number,_DiagonalHorizontal:number){
        this.DiagonalVertical=_DiagonalVertical;
        this.DiagonalHorizontal=_DiagonalHorizontal;
    }

    area() : number{
      return this.DiagonalHorizontal * this.DiagonalVertical;
    }
}

let rombo1 = new rombo(5,3);
console.log(rombo1.area());

