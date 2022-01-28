import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

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
    //Variable simuladora del tablero, las x representan la reyna
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
    for (let i = 0; i < tablero.length; i++) {
      for (let j = 0; j < tablero[0].length; j++) {
        let casillaActual = tablero[i][j];
        if(casillaActual==='x'){
            // //primero verificar si no tiene otra reina para su derecha o diagonal inferior derecha
            let contador = j
            let casillaComparar 
            while(contador < tablero[i].length-1){
              contador++
              casillaComparar = tablero[i][contador]
              if (casillaComparar === 'x') {
                return "La reina en la posicion " + i + j + "esta siendo atacada";
              }
            }
        }
      }
    }
        return "Ninguna reina esta atacando" 
  }
    
  
}
