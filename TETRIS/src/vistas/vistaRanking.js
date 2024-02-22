import { panel } from "./panel";

export const ranking = {
    template: `
    <button id="boton" class="btn btn-success fs-1 mt-5">JUGAR</button>
          <!-- Pantalla tablas y ranking -->
          <div id="info" class="">
              <div id="ranking" class="m-5 p-5 bg-dark">
                  
              </div>

            <!-- <div id="partidas" class="m-5 p-5 bg-dark">
                  
            </div> -->
          </div>
          <!-- Pantalla del juego -->
          <div id="juego" class="d-none">
              <div class="row">
                  <!-- Panel izquierda -->
                  <div
                      class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
                  >
                      <h4>Nivel: <span>2</span></h4>
                      <h4>Tiempo: <span>5:22</span></h4>
                      <h4>Lineas: <span>2</span></h4>
                      <h4>Puntos: <span>211122</span></h4>
                  </div>
                  <!-- Panel central -->
                  <div class="col-4 d-flex justify-content-center">
                      <div id="panel" class="p-5">
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                          <div class="fila d-flex justify-content-center">
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                              <div class="celda bg-dark border-secondary">x</div>
                          </div>
                      </div>
                  </div>
                  <!-- Panel derecha -->
                  <div
                      class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
                  >
                      <div id="piezaSiguiente">
                          <h4>Pieza siguiente:</h4>
                          <div class="piezaSiguiente m-2">
                              <div class="fila d-flex justify-content-center">
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                                  <div class="celda bg-dark border-secondary">x</div>
                              </div>
                              <div class="fila d-flex justify-content-center">
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                                  <div class="celda bg-dark border-secondary">x</div>
                              </div>
                              <div class="fila d-flex justify-content-center">
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                              </div>
                          </div>
                          <div class="piezaSiguiente m-2">
                              <div class="fila d-flex justify-content-center">
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                                  <div class="celda bg-dark border-secondary">x</div>
                              </div>
                              <div class="fila d-flex justify-content-center">
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                                  <div class="celda bg-dark border-secondary">x</div>
                              </div>
                              <div class="fila d-flex justify-content-center">
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                              </div>
                          </div>
                          <div class="piezaSiguiente m-2">
                              <div class="fila d-flex justify-content-center">
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                                  <div class="celda bg-dark border-secondary">x</div>
                              </div>
                              <div class="fila d-flex justify-content-center">
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                                  <div class="celda bg-dark border-secondary">x</div>
                              </div>
                              <div class="fila d-flex justify-content-center">
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                                  <div class="celda bg-primary bg-gradient border-dark">x</div>
                              </div>
                          </div>
                      </div>
                      <hr />
                      <div id="piezaGuardada">
                          <h4>Pieza guardada:</h4>
                          <div class="piezaGuardada">
                              <div class="piezaSiguiente m-2">
                                  <div class="fila d-flex justify-content-center">
                                      <div class="celda bg-warning bg-gradient border-dark">x</div>
                                      <div class="celda bg-warning border-secondary">x</div>
                                  </div>
                                  <div class="fila d-flex justify-content-center">
                                      <div class="celda bg-warning bg-gradient border-dark">x</div>
                                      <div class="celda bg-warning border-secondary">x</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="ContenidoRanking" class="m-5 p-5 bg-dark">
          <h2 class="text-center text-light">Partidas</h2>
				<div class="input-group mb-3">
                    <button id="botonBuscar">BUSCAR</button>
					<input
                        id="palabraBuscador"
						type="text"
						class="form-control"
						placeholder="Buscador"
						aria-label="Buscador"
						aria-describedby="button-addon2"
					/>
					<button
						class="btn btn-outline-secondary"
						type="button"
						id="button-addon2"
					>
						<i class="bi bi-x-lg"></i>
					</button>
				</div>
				<table class="table table-dark">
					<theader>
						<tr>
							<td></td>
							<td>Nick <i id="nickIcono" class="bi bi-arrow-up-square"></i></td>
							<td>Puntuación <i id="puntosIcono" class="bi bi-arrow-up-square"></i></td>								<td>Fecha <i id="fechaIcono" class="bi bi-arrow-up-square"></i></td>
						</tr>
                    </theader>
                    <tbody class="w-50 bg-dark" id="tabla">
          
    `,

    partides : [
        {
          avatar: '<img width=50 src="img/avatar1.svg">',
          nick: 'PACO',
          puntos: 150,
          fecha: '2023-09-27'
        },
        {
          avatar: '<img width=50 src="img/avatar2.svg">',
          nick: 'JUAN',
          puntos: 220,
          fecha: '2023-09-28'
        },
        {
            avatar: '<img width=50 src="img/avatar3.svg">',
            nick: 'LOLITO',
            puntos: 2200,
            fecha: '2023-09-28'
          }
    ],

    script: () =>{
        boton.addEventListener('click', pintaRanking);

        
// guardar.addEventListener('click', pintaDatosPartida);




const datosEjemploPartida = {
    avatar: '<img width=50 src="img/avatar4.svg">',
    nick: 'DIGREF' ,
    puntos: 100 ,
    fecha:'21 MAYO 2023' 
}
    


    
pintaTabla(ranking.partides)
// insertaNuevaPartida(datosEjemploPartida)
let cont = 0
if(panel.partidaGuardada !=null){
    pintaDatosPartida(panel.partidaGuardada)
    
}

pintaRanking()

         function pintaRanking(){
            let tabla=` 
            <h2 class="text-center text-light">Ranking</h2>
            <table class="table table-dark align-middle">
              <theader>
                <tr class="bg-dark">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </theader>
              <tbody id="tablaRanking">
                `
                ranking.partides.sort((a, b) => b.puntos - a.puntos)
                ranking.partides.forEach(element => {
                  tabla += 
                  ` <tr>
                      <td>${element.avatar}</td>
                      <td>${element.nick}</td>
                      <td>${element.puntos}</td>
                      <td>${element.fecha}</td>
                    </tr>
                  `
                })
          
              tabla+=

              `
                  </tbody>
                  <tfoot></tfoot>
                </table>
              `
              document.querySelector("#ranking").innerHTML=tabla;
          }


function pintaTabla(partides){
    console.log('pintapartidas')
    // event.preventDefault()
    let tabla = ``

    partides.forEach(element => {
        tabla+= `
        <tr>
            <td>${element.avatar}</td>
            <td>${element.nick}</td>
            <td>${element.puntos}</td>
            <td>${element.fecha}</td>
        </tr>`
    });
	tabla+=`</tbody>
    <tfoot></tfoot>
    </table>
    </div>`

    document.querySelector("#tabla").innerHTML=tabla    
    // console.log(tabla)
    
    
}



function insertaNuevaPartida(datosEjemploPartida) {
    // console.log("Guardar partida?")
    // console.log(datosEjemploPartida)
	ranking.partides.push(datosEjemploPartida)
	
	
}



function pintaDatosPartida(partida){
	const mensaje=`Quieres guardar la partida?
	Nick: ${partida.nick}
	Puntuacion: ${partida.puntos}
	Fecha: ${partida.fecha}`

	// confirm (mensaje)
	if (confirm(mensaje)){
		insertaNuevaPartida(partida)
		pintaTabla(ranking.partides)
        panel.puntos = 0
		console.log("Partida guardada")
        panel.puntos = 0
	}else{
		console.log("No se ha guardado la partida")
	}
	
}

let clonadoPartidas = [...ranking.partides]
console.log('CLONADO DE PARTIDAS', clonadoPartidas)

/*HISTORIA 4*/

const buscador = texto => {
    texto = texto.toLowerCase(); 
    return ranking.partides.filter(partida => partida.nick.toLowerCase().includes(texto));
};


document.querySelector('#botonBuscar').addEventListener('click', () => {
    const searchInput = document.querySelector('#palabraBuscador');
    const searchText = searchInput.value;
    const resultados = buscador(searchText);
    console.log(resultados);
    pintaTabla(resultados)
});

document.querySelector('#button-addon2').addEventListener('click', () => {
    console.log('entra en cancelar')
    pintaTabla(ranking.partides) 
});



function orden(campo, tipo) {
    // Actualiza el icono para reflejar el orden actual
    const icono = document.querySelector(`#${campo}Icono`);
    icono.className = `bi bi-arrow-${tipo === 'up' ? 'down' : 'up'}-square-fill`;

    // Aplica el orden al array partides
    ranking.partides.sort((a, b) => {
        // Orden alfabético ascendente o descendente
        if (tipo === 'up') {
            return a[campo] > b[campo] ? 1 : -1;
        } else {
            return a[campo] < b[campo] ? 1 : -1;
        }
    });

    // Vuelve a pintar la tabla con el array ordenado
    pintaTabla(ranking.partides);
}

let metodoNick = 'up';
let metodoPuntos = 'up';
let metodoFecha = 'up';

document.getElementById('nickIcono').addEventListener('click', function () {
    orden('nick', metodoNick);
    if (metodoNick == 'up') {
        metodoNick = 'down';
    } else {
        metodoNick = 'up';
    }
});

document.getElementById('puntosIcono').addEventListener('click', function () {
    orden('puntos', metodoPuntos);
    if (metodoPuntos == 'up') {
        metodoPuntos = 'down';
    } else {
        metodoPuntos = 'up';
    }
});

document.getElementById('fechaIcono').addEventListener('click', function () {
    orden('fecha', metodoFecha);
    if (metodoFecha == 'up') {
        metodoFecha = 'down';
    } else {
        metodoFecha = 'up';
    }
});




    }

}
