"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var arrays_1 = require("./arrays");
var contador = 3;
var isUserAuthorizate = false;
var closeExecution = '------------\n CERRANDO EJECUCIÓN DEL SISTEMA.\n------------';
var backToMenu = '------------\n Volviendo al menú principal.\n------------';
var errorOption = "------------\n La opci\u00F3n seleccionada no es correcta.\n------------";
function selectCategory() {
    console.log('BIENVENIDO AL SISTEMA!');
    while (true) {
        console.log('**************\n Las CATEGORIAS son: \n OPCION A) - Artes\n OPCION B) - Ciencia\n OPCION C) - Computación\n\n Elija una opción (A, B o C)\n Para salir del sistema presione X \n Para volver al menú principal presione M \n**************');
        var option = readlineSync.question(' Ingresar Opción: ').toUpperCase();
        switch (option) {
            case 'A':
                console.log("La lista de libros de Artes es: ".concat(arrays_1.categoryArt));
                askForContinue();
                break;
            case 'B':
                console.log("La lista de libros de Ciencias es: ".concat(arrays_1.categoryScience));
                askForContinue();
                break;
            case 'C':
                console.log("La lista de libros de Computaci\u00F3n es: ".concat(arrays_1.categoryComputing));
                askForContinue();
                break;
            case 'X':
                console.log(closeExecution);
                process.exit();
            case 'M':
                console.log(backToMenu);
                break;
            default:
                console.log(errorOption);
                break;
        }
    }
}
function askForContinue() {
    var option = readlineSync.question('¿Desea volver al menú principal (M) o salir del sistema (X)? ').toUpperCase();
    if (option === 'X') {
        console.log(closeExecution);
        process.exit();
    }
    else if (option === 'M') {
        console.log(backToMenu);
        return;
    }
    else {
        console.log(errorOption);
        askForContinue();
    }
}
function menu() {
    console.log('BIENVENIDO');
    while ((contador <= 3 && contador > 0) && isUserAuthorizate == false) {
        console.log('\nIngresar User & Password por favor. ');
        var userLogin = readlineSync.question(' Ingresar User: ');
        var passLogin = readlineSync.question(' Ingresar Password: ');
        console.log("Ingresaste: \n User: '".concat(userLogin, "' & Password: '").concat(passLogin, "'."));
        if (arrays_1.userAuthorizate.user == userLogin || arrays_1.userAuthorizate.password == passLogin) {
            isUserAuthorizate = true;
            console.log('**************\nCredenciales ingresadas correctamente.\n**************');
            selectCategory();
        }
        else {
            contador -= 1;
            console.log("**************\nCredenciales incorrectas! Quedan ".concat(contador, " posibilidades de ingresar.\n**************"));
            if (contador == 0) {
                console.log(closeExecution);
            }
        }
    }
}
menu();
