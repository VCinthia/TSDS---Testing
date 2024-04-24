import * as readlineSync from 'readline-sync';
import { categoryArt, categoryComputing, categoryScience, userAuthorizate } from './arrays';

let contador: number = 3
let isUserAuthorizate: boolean = false

let closeExecution : string = '------------\n CERRANDO EJECUCIÓN DEL SISTEMA.\n------------';
let backToMenu : string = '------------\n Volviendo al menú principal.\n------------';
let errorOption : string = `------------\n La opción seleccionada no es correcta.\n------------`;


function selectCategory() {
   console.log('BIENVENIDO AL SISTEMA!' );
   
   while (true) {
      console.log(' **************\n Las CATEGORIAS son: \n OPCION A) - Artes\n OPCION B) - Ciencia\n OPCION C) - Computación\n\n Elija una opción (A, B o C)\n Para salir del sistema presione X \n Para volver al menú principal presione M \n**************');

      let option: string = readlineSync.question(' Ingresar Opción: ').toUpperCase();

      switch (option) {
         case 'A':
            console.log(`La lista de libros de Artes es: ${categoryArt}`);
            askForContinue();
            break;
         case 'B':
            console.log(`La lista de libros de Ciencias es: ${categoryScience}`);
            askForContinue();
            break;
         case 'C':
            console.log(`La lista de libros de Computación es: ${categoryComputing}`);
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
   let option: string = readlineSync.question('¿Desea volver al menú principal (M) o salir del sistema (X)? ').toUpperCase();
   if (option === 'X') {
      console.log(closeExecution);
      process.exit();
   } else if (option === 'M') {
      console.log(backToMenu);
      return;
   } else {
      console.log(errorOption);
      askForContinue();
   }
}

function menu() {
   console.log('BIENVENIDO');
   while ((contador <= 3 && contador > 0) && isUserAuthorizate == false) {
      console.log('\nIngresar User & Password por favor. ');
      let userLogin: string = readlineSync.question(' Ingresar User: ');
      let passLogin: string = readlineSync.question(' Ingresar Password: ');
      console.log(`\nIngresaste: \n User: '${userLogin}' & Password: '${passLogin}'.`);
      if (userAuthorizate.user == userLogin || userAuthorizate.password == passLogin) {
         isUserAuthorizate = true;
         console.log(' **************\nCredenciales ingresadas correctamente.\n**************');
         selectCategory();
      } else {
         contador -= 1;
         console.log(` **************\nCredenciales incorrectas! Quedan ${contador} posibilidades de ingresar.\n**************`);
         if (contador == 0) {
            console.log(closeExecution);
         }
      }
   }
}

menu();




