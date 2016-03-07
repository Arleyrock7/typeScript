/*Typo de datos y variables*/
/*NUMBER, STRING & BOOLEAN */
var miNumero;
var miCadena;
var miVerdad;
var miVariable = 'Hola Mundo!'; /*Asigna el String por Default*/
/*Tipo especial ANY ---------------*/
var miVarAny;
var miVarAny_2;
/*NUMBER, STRING & BOOLEAN */
miNumero = 12;
miCadena = 'Hola';
miVerdad = true;
miVariable = 'Buenos días a todos!'; /*Asigna el String por Default*/
/*Tipo especial ANY hace que las variables no tengan comprovación de tipo de datos---------------*/
miVarAny = 10;
miVarAny = 'Hola Any!';
miVarAny_2 = false;
miVarAny_2 = 'Historias';
/*Parametros sin tipo de datos FORMA 1:::::::::::::::::::::::::*/
function miFuntion(x) {
    x = 'Hola';
    x = 12;
}
/*Parametros sin tipo de datos FORMA 2:::::::::::::::::::::::::*/
function miFuncion_2(y) {
    y = '';
    y = 12;
}
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*NOTA
* LO RECOMENDABLE ES QUE SE LE ASIGNEN LOS TIPOS DE DATOS
* A CADA VARIABLE, SEA: number, string, boolean o any
* */
//# sourceMappingURL=variables.js.map