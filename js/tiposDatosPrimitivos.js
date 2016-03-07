/*var unaVariable: number = null; Error porque
 el tipo de dato NUMBER no puede tener valor string*/
var unaVariable = null;
var otraVariable = undefined;
var otraMas;
var inventada;
/*
 unaVariable = 'Hola';Error porque
 number no puede tener el valor string 'Hola'*/
unaVariable = 'Hola';
unaVariable = 12;
otraVariable = false;
otraVariable = 12;
if (otraMas === undefined) {
    console.log('otraMas es undefined');
}
if (inventada !== null) {
    console.log('Inventada NO es null');
}
/*function miPrueba ():void {

}
VOID : La funcion no devuelve nada por ausencia de
valor de resultado
*/
function miPrueba() {
    return 'Hola Function!';
} /*Para que el tipo de dato String no de error
deberia al menos una sentencia que nos dueleva un tipo de
datos String*/
/*NOTA:
 Analizar el comportamiento de tipos de
 datos primitivos */
/*
 !== Distinto

 NULL : Le damos el valor de
 AUSENCIA DE VALOR a la variable

 UNDEFINED : La variable nunca ha tenido
 algun valor
 */
/*PRUEBA CONDICIONALES FUNCIONAL:::::::::::::::::::::::::::::*/
var nombre;
var a_1 = undefined;
var a_2 = null;
nombre = 'Arley';
a_1 = 'Cuadrado';
a_2 = 'Sierra';
if (a_1 && a_2 !== undefined) {
    console.log(nombre + " " + a_1 + " " + a_2);
}
if (a_1 === undefined) {
    console.log(nombre + " No se han definido los apellidos");
}
/*
 function apellido_1 (a_1):string{
 return 'Cuadrado';
 }*/ 
//# sourceMappingURL=tiposDatosPrimitivos.js.map