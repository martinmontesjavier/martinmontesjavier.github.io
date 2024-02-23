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
          let valorPieza = panel.matriz[fila][columna]
          switch (valorPieza) {
            case 0:
              panel.color = 'bg-dark'
              break;
            case 2:
              panel.color = 'bg-primary bg-gradient'
              break;
            case 3:
              panel.color = 'bg-secondary bg-gradient'
              break;
            case 4:
              panel.color = 'bg-success bg-gradient'
              break;
            case 5:
              panel.color = 'bg-danger bg-gradient'
              break;
            case 6:
              panel.color = 'bg-warning bg-gradient'
              break;
            case 7:
              panel.color = 'bg-light'
              break;
            case 8:
              panel.color = 'bg-info bg-gradient'
              break;
            default:
              panel.color = 'espana'
              break;
          }
          
          if (panel.matriz[fila][columna] > 0) {
            html += `<div class="columna ${panel.color} "></div>`;
          } else if (panel.matriz[fila][columna] == 0) {
            html += `<div class="columna ${panel.color}"></div>`;
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
      panel.clase = models[m].nombre

      const pieza = new ModeloPieza(m,0,posicion,0,panel.color)

      // console.log(pieza)
      console.log(panel.clase)
      return pieza
    },

    nuevaPieza: null,

    clase:null,

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

    eventoMover:(e)=>{
      switch (e.key) {
        case 'ArrowUp':
          panel.borrarPieza()
          panel.nuevaPieza.girar()
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
    },


    controlTecla(){
      document.addEventListener('keydown',panel.eventoMover)
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

    moverDra() {
      panel.borrarPieza();
      let nuevaX = panel.nuevaPieza.x + 1;
      let colisionDetectada = false;
  
      for (let y = 0; y < panel.nuevaPieza.altura; y++) {
          for (let x = panel.nuevaPieza.longitud - 1; x >= 0; x--) {
              const elemento = panel.nuevaPieza.matriz[y][x];
              const nextX = x + nuevaX;
  
              // Si hay un hueco vacío en la derecha, no se detecta colisión
              if (elemento && (nextX >= panel.ancho || panel.matriz[y + panel.nuevaPieza.y][nextX])) {
                  colisionDetectada = true;
                  break;
              }
          }
  
          if (colisionDetectada) {
              break;
          }
      }
  
      // Si no hay colisión o si la pieza está dentro del panel, mover la pieza hacia la derecha
      if (!colisionDetectada || panel.nuevaPieza.x + panel.nuevaPieza.longitud < panel.ancho) {
          for (let y = 0; y < panel.nuevaPieza.altura; y++) {
              for (let x = panel.nuevaPieza.longitud - 1; x >= 0; x--) {
                  const elemento = panel.nuevaPieza.matriz[y][x];
  
                  if (elemento) {
                      panel.matriz[y + panel.nuevaPieza.y][x + nuevaX] = elemento;
                  }
              }
          }
  
          // Actualizar la posición de la pieza
          panel.nuevaPieza.x = nuevaX;
  
          // Actualizar puntos y redibujar el panel
          panel.sumarPuntos(10);
          const divJuegoPrincipal = document.querySelector("#panel");
          divJuegoPrincipal.innerHTML = panel.pintaPanel();
      }
  },

  moverIzq() {
    panel.borrarPieza();
    let nuevaX = panel.nuevaPieza.x - 1;
    let colisionDetectada = false;

    for (let y = 0; y < panel.nuevaPieza.altura; y++) {
        for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
            const elemento = panel.nuevaPieza.matriz[y][x];
            const nextX = x + nuevaX;
            const nextY = y + panel.nuevaPieza.y;

            // Si hay un hueco vacío en la izquierda, no se detecta colisión
            if (elemento && (nextX < 0 || panel.matriz[nextY][nextX])) {
                colisionDetectada = true;
                break;
            }
        }

        if (colisionDetectada) {
            break;
        }
    }

    // Si no hay colisión o si la pieza está dentro del panel, mover la pieza hacia la izquierda
    if (!colisionDetectada && nuevaX >= 0) {
        for (let y = 0; y < panel.nuevaPieza.altura; y++) {
            for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
                const elemento = panel.nuevaPieza.matriz[y][x];

                if (elemento) {
                    panel.matriz[y + panel.nuevaPieza.y][x + nuevaX] = elemento;
                }
            }
        }

        // Actualizar la posición de la pieza
        panel.nuevaPieza.x = nuevaX;

        // Actualizar puntos y redibujar el panel
        panel.sumarPuntos(10);
        const divJuegoPrincipal = document.querySelector("#panel");
        divJuegoPrincipal.innerHTML = panel.pintaPanel();
    }
},
     
    bajar() {
      panel.borrarPieza();
      let nuevaY = panel.nuevaPieza.y + 1;
  
      // Verificar si la pieza puede descender sin colisionar con el fondo o con otras partes de la pieza
      let colisionDetectada = false; // Variable para detectar colisiones
  
      for (let y = 0; y < panel.nuevaPieza.altura; y++) {
          for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
              const elemento = panel.nuevaPieza.matriz[y][x];
              const nextY = y + nuevaY;
  
              if (panel.nuevaPieza.y == 0 && panel.matriz[nextY][x + panel.nuevaPieza.x] > 0) {
                  panel.acabarPartida();
                  colisionDetectada = true; // Se ha detectado una colisión
                  break; // Salir del bucle interno
              }
  
              if (elemento > 0 && panel.matriz[nextY][x + panel.nuevaPieza.x] > 0) {
                  panel.insertarPieza();
                  panel.nuevaPieza = panel.crearNuevaPieza();
                  panel.sumarPuntos(50);
                  panel.limpiarLineas();
                  colisionDetectada = true; // Se ha detectado una colisión
                  break; // Salir del bucle interno
              }
          }
  
          if (colisionDetectada) {
              break; // Salir del bucle externo si se ha detectado una colisión
          }
      }
  
      // Si no hay colisión, mover la pieza hacia abajo
      if (!colisionDetectada) {
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
      }
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
              if (panel.matriz[fila][columna] > 0) {
                  cont++;
              } 
              if(panel.matriz[fila] == 0 && cont>2){
                panel.acabarPartida()
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

      let html = '<div id="piezaGuardada" class="piezaGuardada">';
      const piezaGuardada = panel.piezaGuardada.matriz;
      for (let fila = 0; fila < piezaGuardada.length; fila++) {
          html += '<div class="d-flex">';
          for (let columna = 0; columna < piezaGuardada[fila].length; columna++) {
              const valorPieza = piezaGuardada[fila][columna];
              let color;
              switch (valorPieza) {
              case 0:
                panel.color = ''
                break;
              case 2:
                panel.color = 'bg-primary bg-gradient'
                break;
              case 3:
                panel.color = 'bg-secondary bg-gradient'
                break;
              case 4:
                panel.color = 'bg-success bg-gradient'
                break;
              case 5:
                panel.color = 'bg-danger bg-gradient'
                break;
              case 6:
                panel.color = 'bg-warning bg-gradient'
                break;
              case 7:
                panel.color = 'bg-light'
                break;
              case 8:
                panel.color = 'bg-info bg-gradient'
                break;
              default:
                panel.color = 'espana'
                break;
            }
              html += `<div class="columna ${panel.color}"></div>`;
          }
          html += '</div>'; // Cierre de la fila
      }
      html += '</div>'; // Cierre del contenedor de la pieza guardada
  
      // Pintar la pieza guardada en el elemento correspondiente
      let pintaPiezaGuardada = document.querySelector('.piezaGuardada');
      pintaPiezaGuardada.innerHTML = html;
     
      


    },

    partidaGuardada: null,

    acabarPartida(){
        clearInterval(panel.intervalo)
        const mensaje = 'TERMINO, QUIERES GUARDAR LA PARTIDA?'
        if(confirm(mensaje)){
          console.log('AQUI LLEGA ACABAR PARTIDA',document.querySelector('#panel') )
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
              let puntosRepuesto = panel.puntos
              const datosEjemploPartida = {
                avatar: '<img width=50 src="img/avatar4.svg">',
                nick: document.querySelector('#nick').value ,
                puntos: puntosRepuesto ,
                fecha: fechaFormateada
              }
              panel.partidaGuardada=datosEjemploPartida;
              document.querySelector('main').innerHTML = ranking.template
              ranking.script()
              clearInterval(panel.intervaloTemporizador)
              panel.partidaGuardada = null
            }
            
          })
          panel.reset()
      
        }else{
            document.querySelector('#panel').innerHTML = `<img src="https://www.creativefabrica.com/wp-content/uploads/2022/05/06/Game-Over-Graphics-30114494-1-1-580x386.jpg" alt="GAME OVER">`
            
          panel.reset()
            
        }
    },

    nivel:0,

    comprobarNivel(){
      const puntosParaSiguienteNivel = (panel.nivel + 1) * 5000;
      let nivelAnterior = panel.nivel
      
      let html = `<div id="juegoPrincipal">`;
      if (panel.puntos >= puntosParaSiguienteNivel) {
        panel.nivel++
        clearInterval(panel.intervalo)
        let html = `<div id="juegoPrincipal">`;
    
        for (let fila = 0; fila < panel.matriz.length; fila++) {
          html += `<div class="fila bg-dark d-flex">`;
      
          for (let columna = 0; columna < panel.matriz[fila].length; columna++) {
            let valorPieza = panel.matriz[fila][columna]
            switch (valorPieza) {
              case 0:
                panel.color = 'bg-dark'
              default:
                panel.color = 'espana'
                break;
            }
            
            if (panel.matriz[fila][columna] > 1) {
              panel.matriz[fila][columna] = 0
              html += `<div class="columna ${panel.color} "></div>`;
            } else if (panel.matriz[fila][columna] == 0) {
              html += `<div class="columna ${panel.color}"></div>`;
            }
          }
      
          html += `</div>`;
        }
      
        html += `</div>`;

        document.querySelector('#panel').innerHTML = html
        panel.iniciarMovimiento()
      }
      document.querySelector('#nivel').innerHTML = panel.nivel
      
    },

    color: null,

    intervaloTemporizador: null,

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
      panel.intervaloTemporizador = setInterval(actualizarTiempo, 1000);
    },

    reset(){
      panel.matriz =  [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
                          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
      
      panel.piezaGuardada = undefined
      clearInterval(panel.intervaloTemporizador)
      clearInterval(panel.intervalo)
      panel.partidaGuardada = null
      panel.nivel = 0
      panel.nuevaPieza = null
      panel.contadorLineas = 0

      document.removeEventListener('keydown', panel.controlTecla)
      // document.removeEventListener(panel.bajar())
      // document.removeEventListener(panel.moverDra())
      // document.removeEventListener(panel.moverIzq())
      
      // document.removeEventListener('keydown', panel.controlTecla())
      
    }
  
}
  