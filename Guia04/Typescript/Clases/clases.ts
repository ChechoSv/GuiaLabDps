class Persona{
    nombre:string;
    edad:number;

    constructor(nombre:string,edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
     console.log(`Nombre:${this.nombre} y edad:${this.edad}`);   
    }
}

    let persona1:Persona;
    persona1 = new Persona('Juan',45);
    persona1.imprimir();

    //MODIFICADORES DE ACCESO Y METODOS

    class Dado{
        private valor:number;

        public tirar(){
            this.generar();
        }

        private generar(){
            this.valor = Math.floor(Math.random()*6)+1;
        }

        public imprimir(){
            console.log(`Salio el valor ${this.valor}`);
        }
    }

        let dado1 = new Dado();
        dado1.tirar();
        dado1.imprimir(); 

    //Modificador ReadOnly

    class Articulo{
        readonly codigo:number;
        descripcion:string;
        precio:number;

        constructor(codigo:number,descripcion:string,precio:number){
            this.codigo=codigo;
            this.descripcion=descripcion;
            this.precio=precio;
        }

        imprimir(){
            console.log(`Codigo:${this.codigo} Descripcion:${this.descripcion} Precio:${this.precio}`);
        }
    }

    let articulo1:Articulo;
    articulo1 = new Articulo(1,'Papas',12.5);
    articulo1.imprimir();

    //Propiedades Estaticas
    class Dado_{
        private valor1:number;
        static tiradas:number=0;
        tirar(){
            this.generar();
        }

        private generar(){
            this.valor1 = Math.floor(Math.random() * 6) + 1 ;
            Dado_.tiradas++;
        }

        imprimir(){
            console.log(`Salio el valor ${this.valor1}`);
        }
    }
        let dado1_ = new Dado_();
        dado1_.tirar();
        dado1_.imprimir();

        let dado2_ = new Dado_();
        dado2_.tirar();
        dado2_.imprimir();
        console.log(`Cantidad de tirasas de dados:${Dado_.tiradas}`);//2

        //Metodos Estaticas
        class Matematica{
            static mayor(v1:number,v2:number):number{
                if(v1>v2)
                return v1;
                else
                return v2;
            }

            static menor(v1:number,v2:number):number{
                if(v1<v2)
                return v1;
                else
                return v2;
            }
            static aleatorio(inicio:number,fin:number):number{
                return Math.floor((Math.random()*(fin+1-inicio))+ inicio);
            }
        }

        let x1=Matematica.aleatorio(1,10);
        let x2=Matematica.aleatorio(1,10);

        console.log(`El mayor entre ${x1} y ${x2} es ${Matematica.mayor(x1,x2)}`);
        console.log(`El menor entre ${x1} y ${x2} es ${Matematica.menor(x1,x2)}`);
