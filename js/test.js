var testPrueba = (function () {
    function testPrueba() {
    }
    testPrueba.prototype.testingPrueba = function () {
        return 'PRUEBA Hola mundo TypeScript';
    };
    return testPrueba;
})();
var t = new testPrueba();
console.log(t.testingPrueba());
//# sourceMappingURL=test.js.map