import { ModeloPieza } from "./clases";
import { models } from "./models";
import { ranking } from "./vistaRanking";
import { modificaData } from '../funciones.js';
import { modificaData2 } from '../funciones.js';


export const panel = {
    matriz: [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    matrizLimpia: null,

    pintaPanel() {
      let html = `<div id="juegoPrincipal">`;
    
      for (let fila = 0; fila < panel.matriz.length; fila++) {
        html += `<div class="fila bg-dark d-flex">`;
    
        for (let columna = 0; columna < panel.matriz[fila].length; columna++) {
          if (panel.matriz[fila][columna] == 1) {
            html += `<div class="columna ${panel.color} "></div>`;
          } else if (panel.matriz[fila][columna] == 0) {
            html += `<div class="columna bg-dark"></div>`;
          }
        }
    
        html += `</div>`;
      }
    
      html += `</div>`;
      return html;
    },

    crearNuevaPieza(){
      let m = Math.floor(Math.random() * models.length);

      let posicion = Math.floor(Math.random() * (9 - models[m].matriz[0].length)+1);
      
      // console.log('posicion',posicion)
      
      panel.color = models[m].color

      const pieza = new ModeloPieza(m,0,posicion,0,panel.color)

      // console.log(pieza)
      
      return pieza
    },

    nuevaPieza: null,

    insertarPieza() {
      // const filaInicial = 0;
      // const columnaInicial = arrayNuevaPieza.x;
    
      // for (let fila = 0; fila < panel.nuevaPieza.altura; fila++) {
      //   for (let columna = 0; columna < panel.nuevaPieza.longitud; columna++) {
      //     // const filaPanel = filaInicial + fila;
      //     // const columnaPanel = columnaInicial + columna;

      //     // if (arrayNuevaPieza.matriz[fila][columna] == 1) {
      //     //   panel.matriz[filaPanel][columnaPanel] = 1;
      //     // }
      //     const elemento = panel.nuevaPieza.matriz[fila][columna]
      //     if(elemento == 1){
      //       panel.matriz[fila][columna] = elemento
      //     }
           
      //   }
      // }

      for(let y=0;y<panel.nuevaPieza.altura;y++){
        for(let x= 0;x<panel.nuevaPieza.longitud;x++){
            const elemento = panel.nuevaPieza.matriz[y][x]
            if(elemento){
                panel.matriz[y+panel.nuevaPieza.y][x+panel.nuevaPieza.x] = elemento
            }
            
        }
      }
    
      const divJuegoPrincipal = document.querySelector("#panel");
      divJuegoPrincipal.innerHTML = panel.pintaPanel();
    },

    controlTecla(){
      document.addEventListener('keydown', (e)=>{
        let tecla = e
        switch (tecla.key) {
          case 'ArrowUp':
            panel.borrarPieza()
            panel.nuevaPieza.girar(panel.nuevaPieza.angulo)
            panel.insertarPieza(panel.nuevaPieza)
            break;
          case 'ArrowDown':
            panel.bajar();
            break;
          case 'ArrowLeft':
            panel.moverIzq();
            break;
          case 'ArrowRight':
            panel.moverDra();
            break;
          case 'c':
            panel.cambiarPieza();
            break;
          default:
            break;
        }
      })
    },

    borrarPieza(){
      for(let y=0;y<panel.nuevaPieza.altura;y++){
        for(let x= 0;x<panel.nuevaPieza.longitud;x++){
            const elemento = panel.nuevaPieza.matriz[y][x]
            if(elemento){
                panel.matriz[y+panel.nuevaPieza.y][x+panel.nuevaPieza.x] = 0
            } 
        }
      }
    
      const divJuegoPrincipal = document.querySelector("#panel");
      divJuegoPrincipal.innerHTML = panel.pintaPanel();
    },

    moverDra(){
      panel.borrarPieza()
      let nuevaX = panel.nuevaPieza.x+1
      for(let y=0;y<panel.nuevaPieza.altura;y++){
        for(let x= 0;x<panel.nuevaPieza.longitud;x++){
            const elemento = panel.nuevaPieza.matriz[y][x]

            if (panel.matriz[y+panel.nuevaPieza.y][x+nuevaX] == 1) {
              return;
            }
            if(elemento){
                panel.matriz[y+panel.nuevaPieza.y][x+nuevaX] = elemento
            }
        }
      }
      panel.nuevaPieza.x = nuevaX
    
      panel.sumarPuntos(10)

      const divJuegoPrincipal = document.querySelector("#panel");
      divJuegoPrincipal.innerHTML = panel.pintaPanel();
    },

    moverIzq(){
      panel.borrarPieza()
      let nuevaX = panel.nuevaPieza.x-1
      for(let y=0;y<panel.nuevaPieza.altura;y++){
        for(let x= 0;x<panel.nuevaPieza.longitud;x++){
            const elemento = panel.nuevaPieza.matriz[y][x]

            if (panel.matriz[y+panel.nuevaPieza.y][x+nuevaX] == 1) {
              return;
            }
            if(elemento){
              panel.matriz[y+panel.nuevaPieza.y][x+nuevaX] = elemento
            }
        }
      }
      panel.nuevaPieza.x = nuevaX

      panel.sumarPuntos(10)

      const divJuegoPrincipal = document.querySelector("#panel");
      divJuegoPrincipal.innerHTML = panel.pintaPanel();
    },
    // bajar(){
    //   panel.borrarPieza()
    //   let nuevaY = panel.nuevaPieza.y+1
    //   for(let y=0;y<panel.nuevaPieza.altura;y++){
    //     for(let x= 0;x<panel.nuevaPieza.longitud;x++){
    //         const elemento = panel.nuevaPieza.matriz[y][x]

    //         if (panel.matriz[y+nuevaY][x+panel.nuevaPieza.x] == 1) {
    //           panel.insertarPieza(); 
    //           panel.nuevaPieza = panel.crearNuevaPieza();
    //           panel.sumarPuntos(50)
    //           panel.limpiarLineas() 
    //           // panel.acabarPartida()
    //           return;
    //         }
    //         if(elemento){
    //             panel.matriz[y+nuevaY][x+panel.nuevaPieza.x] = elemento
    //         }
            
    //     }
    //   }
    //   panel.nuevaPieza.y = nuevaY

    //   panel.sumarPuntos(10)

    //   const divJuegoPrincipal = document.querySelector("#panel");
    //   divJuegoPrincipal.innerHTML = panel.pintaPanel();

    // } 
    bajar() {
      panel.borrarPieza();
      let nuevaY = panel.nuevaPieza.y + 1;
  
      // Verificar si la pieza puede descender sin colisionar con el fondo o con otras partes de la pieza
      for (let y = 0; y < panel.nuevaPieza.altura; y++) {
          for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
              const elemento = panel.nuevaPieza.matriz[y][x];
              const nextY = y + nuevaY;

              if (elemento == 1 && panel.matriz[nextY][x + panel.nuevaPieza.x] == 1) {
                  panel.insertarPieza(); 
                  panel.nuevaPieza = panel.crearNuevaPieza();
                  panel.sumarPuntos(50)
                  panel.limpiarLineas();
                  return;
              }
          }
      }
  
      // Si no hay colisión, mover la pieza hacia abajo
      for (let y = 0; y < panel.nuevaPieza.altura; y++) {
          for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
              const elemento = panel.nuevaPieza.matriz[y][x];
  
              if (elemento) {
                  panel.matriz[y + nuevaY][x + panel.nuevaPieza.x] = elemento;
              }
          }
      }
  
      // Actualizar la posición de la pieza
      panel.nuevaPieza.y = nuevaY;
  
      // Actualizar puntos y redibujar el panel
      panel.sumarPuntos(10);
      const divJuegoPrincipal = document.querySelector("#panel");
      divJuegoPrincipal.innerHTML = panel.pintaPanel();
    },
    
    intervalo: null,

    iniciarMovimiento(){
      panel.intervalo = setInterval(function() {
        panel.bajar();
      }, 1000);
    },

    contadorLineas: 0,

    limpiarLineas() {
      for (let fila = 0; fila < panel.matriz.length-1; fila++) {
          let cont = 0;
          for (let columna = 0; columna < panel.matriz[fila].length; columna++){
              if (panel.matriz[fila][columna] === 1) {
                  cont++;
              } 
          }
          if (cont === 12) {
              panel.matriz.splice(fila, 1);
              panel.matriz.unshift([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
              panel.contadorLineas ++
          }
      }
      panel.sumarPuntos(100)
      document.querySelector('#lineas').innerHTML = panel.contadorLineas
    },

    puntos:0,

    sumarPuntos(puntos){
      panel.puntos = panel.puntos + puntos;
      panel.comprobarNivel()
      document.querySelector('#puntos').innerHTML = panel.puntos
    },

    piezaGuardada: undefined,

    cambiarPieza(){
      panel.borrarPieza()
      if(panel.piezaGuardada == undefined){
        panel.piezaGuardada = panel.nuevaPieza
        panel.nuevaPieza = panel.crearNuevaPieza(); 
      }else{
        let piezaReserva 
        piezaReserva = panel.nuevaPieza
        panel.nuevaPieza = panel.piezaGuardada
        panel.piezaGuardada = piezaReserva
      }
      

    },

    partidaGuardada: null,

    acabarPartida(){
        clearInterval(panel.intervalo)
        const mensaje = 'TERMINO, QUIERES GUARDAR LA PARTIDA?'
        if(confirm(mensaje)){
          document.querySelector('#panel').innerHTML = `
          <div class="bg-dark p-5 m-5">
          <label for="nick">Nick:</label>
          <input type="text" id="nick" name="nick">
          <button class="bg-success text-light mt-3 botonGuardar" id="botonGuardar">GUARDAR</button>
          </div>
          `
          document.querySelector('main').addEventListener('click',(e)=>{
            if(e.target.classList.contains('botonGuardar')){
              const fechaModifica2 = modificaData2(new Date().toISOString());
              const fechaFormateada = modificaData(fechaModifica2);
              const datosEjemploPartida = {
                avatar: '<img width=50 src="img/avatar4.svg">',
                nick: document.querySelector('#nick').value ,
                puntos: panel.puntos ,
                fecha: fechaFormateada
              }
              panel.partidaGuardada=datosEjemploPartida;
              document.querySelector('main').innerHTML = ranking.template
              ranking.script()
              
            }
            
          })
      
        }else{

        }
    },

    nivel:1,

    comprobarNivel(){
      const puntosParaSiguienteNivel = (panel.nivel + 1) * 5000;
      let nivelAnterior = panel.nivel
      if (panel.puntos >= puntosParaSiguienteNivel) {
        panel.nivel++
        // if(nivelAnterior < panel.nivel){
        //   console.log('Aqui se mete')
        //   document.querySelector('#panel').innerHTML = panel.pintaPanel(panel.matrizLimpia)
        // }
      }
      document.querySelector('#nivel').innerHTML = panel.nivel
    },

    color: null,

    temporizador(){
      let tiempo = 0; 

      function actualizarTiempo() {
          tiempo++; 
          let minutos = Math.floor(tiempo / 60); // Calcula los minutos
          let segundos = tiempo % 60; // Calcula los segundos
  
          // Formatea los minutos con 1 dígito y segundos con 2 dígitos
          let tiempoFormateado = `${minutos.toString().padStart(1, '0')}:${segundos.toString().padStart(2, '0')}`;
  
          // Muestra el tiempo formateado en el elemento con id 'tiempo'
          document.querySelector('#tiempo').innerHTML = tiempoFormateado;
      }
  
      // Llama a la función actualizarTiempo() cada segundo (1000 milisegundos)
      let intervalo = setInterval(actualizarTiempo, 1000);
    }
  
}
  