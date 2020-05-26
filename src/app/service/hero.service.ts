import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    //private hero:any[]=
    private hero:Hero[]=
        [
            {
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/aquaman.png",
              aparicion: "1941-11-01",
              casa:"DC"
            },
            {
              nombre: "Batman",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/batman.png",
              aparicion: "1939-05-01",
              casa:"DC"
            },
            {
              nombre: "Daredevil",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/daredevil.png",
              aparicion: "1964-01-01",
              casa: "Marvel"
            },
            {
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/hulk.png",
              aparicion: "1962-05-01",
              casa:"Marvel"
            },
            {
              nombre: "Linterna Verde",
              bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
              img: "assets/img/linterna-verde.png",
              aparicion: "1940-06-01",
              casa: "DC"
            },
            {
              nombre: "Spider-Man",
              bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
              img: "assets/img/spiderman.png",
              aparicion: "1962-08-01",
              casa: "Marvel"
            },
            {
              nombre: "Wolverine",
              bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
              img: "assets/img/wolverine.png",
              aparicion: "1974-11-01",
              casa: "Marvel"
            }
    ];

    private villain:Hero[]=
    [
        {
          nombre: "Magneto",
          bio: "Poderoso mutante con la habilidad de generar y controlar campos magnéticos mentales, Magneto ha sido el más eminente enemigo que hayan tenido los X-Men desde su creación. En sus primeras apariciones su motivación se debía a la megalomanía, pero posteriormente los guionistas han dado cuerpo al personaje y su origen, revelando que es un superviviente del holocausto judío (Shoah), cuyas acciones se encaminan a la protección de la raza mutante y evitar que sufra un destino similar.",
          img: "assets/img/magneto.png",
          aparicion: "1963-9-01",
          casa:"Marvel"
        },
        {
          nombre: "Joker",
          bio: "Si bien sus orígenes y rasgos han variado con el transcurso del tiempo, por lo general se le asocia con una personalidad psicópata con un humor sádico y retorcido, lo que le ha llevado a ser catalogado como la antítesis de Batman. Con la excepción de una etapa en la que mantuvo un rol de bromista simple.",
          img: "assets/img/joker.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Lex Luthor",
          bio: "Luthor es un rico hombre de negocios, uno de los hombres más inteligentes del Universo DC, considerado por muchos el humano mas inteligente en DC y cuenta con las tecnologías más avanzadas en su empresa, superando a las de Bruce Wayne. Los objetivos de Lex Luthor normalmente se centran en matar a Superman, el principal obstáculo para el logro de sus propósitos megalómanos.",
          img: "assets/img/lex.png",
          aparicion: "1940-04-01",
          casa: "DC"
        },
        {
          nombre: "Galactus",
          bio: "En el universo Marvel, Galactus es un ser cósmico que necesita consumir planetas para calmar su hambre, por lo que recurre a la ayuda de heraldos que él mismo nombra. Asimismo, ha sido descrito como una fuerza que el universo necesita para su propio equilibrio.",
          img: "assets/img/galactus.png",
          aparicion: "1966-03-01",
          casa:"Marvel"
        },
        {
          nombre: "Darkseid",
          bio: "Él es el padre de Orión, Kalibak, Grayven y Grial. Como el gobernante tiránico del planeta Apokolips, el objetivo final de Darkseid es conquistar el universo y eliminar todo el libre albedrío y los seres sensibles. Uno de los seres más poderosos en el Universo DC, el personaje se convirtió en un villano de Superman y es considerado el archienemigo de la Liga de la Justicia.",
          img: "assets/img/darkseid.png",
          aparicion: "1971-02-01",
          casa: "DC"
        },
        {
          nombre: "Loki",
          bio: "El dios de las mentiras (o el dios del mal, como elijáis vosotros), es el hermanastro de Thor, con el cual mantiene una enemistad que durará toda la eternidad. Egocéntrico y egoísta, solo lucha por lo que quiere: la dominación de Asgard. ",
          img: "assets/img/loki.png",
          aparicion: "1949-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Fenix Oscura",
          bio: "La Fuerza Fénix es una entidad ficticia que aparece en los cómics estadounidenses publicados por Marvel Comics. La entidad se ha vinculado con otros personajes y, a menudo, ha utilizado el alias Fénix mientras está vinculada.",
          img: "assets/img/phoenix.png",
          aparicion: "1976-10-01",
          casa: "Marvel"
        }
];

    constructor(){
        console.log("Servicio listo para usar!!");
    }

    //getHeros(){
    getHeros():Hero[]{
        return this.hero;
    }

    getVillains():Hero[]{
      return this.villain;
    }

    getHero(id:number){
        return this.hero[id];     
    }

    getVillain(id:number){
      return this.villain[id];     
  }

    buscarHeroe(palabra:string):Hero[]{
    //  event.preventDefault()
      let heroArr:Hero[] = [];
      palabra = palabra.toLowerCase();
      for( let hero of this.hero){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           heroArr.push(hero);
        }
      }
      for( let hero of this.villain){
        let nombre = hero.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           heroArr.push(hero);
        }
      }
      return heroArr;
    }

}

export interface Hero{
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string
}