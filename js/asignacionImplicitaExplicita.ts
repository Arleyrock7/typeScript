/*SEGUIR LA PISTA A UN TIPO DE DATO
* un String debe ser String y noi otro tipo de dato
* implicitamente el entorno reconoce e intuye dependiendo
* la declaración o tipo de dato establecido inicialmente
* o dependiendo del uso de letras o números
* */

/*Se recomienda siempre dar tipo a las variables para evitar
* seguir toda esta pista compleja.
* Es mucho mas sencillo si a todas las variables le ponemos
* tipos de datos, ver a primera vista que una cosa este mal o
* porque no*/



function dameUnDato(){
    return 'Hola';
}

function test(letra){
    return dameUnDato();

}

var letra:string = 'a';
var prueba_1 = test(letra);

prueba_1 = ' Mundo!';

console.log('Pista compleja de seguimiento de tipo de datos'
    + dameUnDato + prueba_1);