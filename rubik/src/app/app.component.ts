import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log("Ejercicio Rubik, ¿El cubo esta armado correctamente?", this.rubik());
    console.log("Ejercicio Ajedrez", this.ajedrez());
    
  }
  
  rubik():boolean {
    const largoCubo:number = 9
    //variable hardcode con los 6 colores del cubo rubik con 9 posiciones para indicar el color que tiene cada casilla de su cara
    const rubik:string[][] = [
      ['r','r','r','r','r','r','r','r','r'], //rojo
      ['az','az','az','az','az','az','az','az','az'], //azul
      ['b','b','b','b','b','b','b','b','b'], //blanco
      ['v','v','v','v','v','v','v','v','v'], //verde
      ['n','n','n','n','n','n','n','n','n'], //naranja
      ['am','am','am','am','am','am','am','am','am']  //amarillo
    ]
    for (let i = 0; i < rubik.length; i++) {
      let colorActual=rubik[i][0]; // identificador del color actual a analizar
      for (let j = 0; j < largoCubo; j++) {
        let casillaActual = rubik[i][j];
        if(casillaActual !== colorActual){
          return false
        } 
      }
    }
    return true
  }

  ajedrez():string {
    //Variable simuladora del tablero, las x representan la reina
    const tablero:string[][] = [
      ['x','','','','','','',''],
      ['','','','','x','','',''],
      ['','','','','','','','x'],
      ['','','','','','x','',''],
      ['','','x','','','','',''],
      ['','','','','','','x',''],
      ['','x','','','','','',''],
      ['','','','x','','','',''],
    ]
    //Ciclos para recorrer el arreglo
    for (let i = 0; i < tablero.length; i++) {
      for (let j = 0; j < tablero[0].length; j++) {
        //Variable que obtiene el valor de la casilla actual
        let casillaActual = tablero[i][j];
        //Condición que verifica si la casilla actual tiene una reina en su posición
        if(casillaActual==='x'){
          //Multiples contadores para recorrer el tablero en busca de equis hacia la derecha, digonal superior derecha y en diagonal inferior derecha
            let contador = j
            let contadorArriba = i
            let contadorDiagonalInferior = i
            let contadorDiagonalSuperior = i
            //Variables que almacenaran la casilla a comparar con la casilla actual en busca de otra reina para atacar
            let casillaCompararLado
            let casillaCompararArriba
            let casillaDiagonalInferior 
            let casillaDiagonalSuperior
            while(contador < tablero[i].length-1){
              //Contador recorre hacía la derecha en busca de otra reina
              contador++       
              contadorArriba++       
              //Contador que recorre hacía la diagonal inferior derecha 
              contadorDiagonalInferior < 7 ? contadorDiagonalInferior++ : contadorDiagonalInferior--
              //Contador que recorre hacía la diagonal superior derecha             
              contadorDiagonalSuperior === 0 ? contadorDiagonalSuperior : contadorDiagonalSuperior--
              casillaCompararLado = tablero[i][contador]
              casillaCompararArriba = tablero[contadorArriba][contador]
              casillaDiagonalInferior = tablero[contadorDiagonalInferior][contador]
              if (casillaCompararLado === 'x' || casillaDiagonalInferior === 'x' || casillaDiagonalSuperior === 'x' || casillaCompararArriba === 'x'){
                return "La reina en la posicion " + i + j + "esta siendo atacada";
              }
            }
        }
      }
    }
        return "Ninguna reina esta atacando" 
  }
}
