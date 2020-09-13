//Parametro tipados y funciones que retornan valor
function sumar(valor1:number,valor2:number):number{
    return valor1+valor2;
}
console.log(sumar(10,5));

//Funciones Anonimas
const funcSumar = function(valor1:number,valor2:number):number{
    return valor1+valor2;
}
console.log(funcSumar(3,6));
//Parametros Opcionales
function sumar1(valor1:number, valor2:number, valor3?:number):number{
    if (valor3)
    return valor1+valor2+valor3;
    else
    return valor1+valor2;
}
console.log(sumar1(5,4));
console.log(sumar1(5,4,3));
//Parametros por defecto
function sumar2(valor1:number, valor2:number, valor3:number=0):number {
    return valor1+valor2+valor3;
    }
    
    console.log(sumar2(5,4));
    console.log(sumar2(5,4,3));

//Parametros Rest
function sumar4(...valores:number[]) {
    let suma=0;
    for(let x=0;x<valores.length;x++)
    suma+=valores[x];
    return suma;
    }
    
    console.log(sumar4(10, 2, 44, 3));
    console.log(sumar4(1, 2));
    console.log(sumar4());

//Funciones callBacks
function operar(valor1: number, valor2: number, func: (x: number, y:number)=>number): number {
    return func(valor1, valor2);
    }
    
    console.log(operar(3, 7, (x: number,y: number): number => {
    return x+y;
    }))
    
    console.log(operar(3, 7, (x: number,y: number): number => {
    return x-y;
    }))
    
    console.log(operar(3, 7, (x: number,y: number): number => {
    return x*y;
    }))
    
    //Parametros Tipo Union 
    function sumar6(valor1: number | string, valor2: number | string ): number | string {
        if (typeof valor1 ==='number' && typeof valor2 ==='number')
        return valor1+valor2;
        else
        return valor1.toString() + valor2.toString();
        }
        
        console.log(sumar6(4, 5));
        console.log(sumar6('Hola ', 2));
        console.log(sumar6('Hola ', 'Mundo'));

        //Acotaciones 
        class Operacion{
            sumar(...valores:number[]){
                let suma_=0;
                for (let x = 0; x < valores.length; x++) 
                   suma_+=valores[x];
                   return suma_;
                    
                
            }
        }

        let op:Operacion;
        op=new Operacion();
        console.log(op.sumar(1,2,3));
