(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();const t=[{nombre:"Palo",color:"bg-primary bg-gradient",matriz:[[[2],[2],[2],[2]],[[2,2,2,2]],[[2],[2],[2],[2]],[[2,2,2,2]]]},{nombre:"L",color:"bg-secondary bg-gradient",matriz:[[[3,0],[3,0],[3,0],[3,3]],[[3,3,3,3],[3,0,0,0]],[[3,3],[0,3],[0,3],[0,3]],[[0,0,0,3],[3,3,3,3]]]},{nombre:"L-invertida",color:"bg-success bg-gradient",matriz:[[[0,4],[0,4],[0,4],[4,4]],[[4,0,0,0],[4,4,4,4]],[[4,4],[4,0],[4,0],[4,0]],[[4,4,4,4],[0,0,0,4]]]},{nombre:"Z",color:"bg-danger bg-gradient",matriz:[[[5,5,0],[0,5,5]],[[0,5],[5,5],[5,0]],[[5,5,0],[0,5,5]],[[0,5],[5,5],[5,0]]]},{nombre:"Z-invertida",color:"bg-warning bg-gradient",matriz:[[[0,6,6],[6,6,0]],[[6,0],[6,6],[0,6]],[[0,6,6],[6,6,0]],[[6,0],[6,6],[0,6]]]},{nombre:"Cuadrado",color:"bg-light",matriz:[[[7,7],[7,7]],[[7,7],[7,7]],[[7,7],[7,7]],[[7,7],[7,7]]]},{nombre:"T",color:"bg-info bg-gradient",matriz:[[[8,8,8],[0,8,0]],[[0,8],[8,8],[0,8]],[[0,8,0],[8,8,8]],[[8,0],[8,8],[8,0]]]}];class m{constructor(e,r,s=0,i=0,l){console.log("Has creado una instancia de la clase ModeloPieza"),this.modelo=e,this.angulo=r,this.x=s,this.y=i,this.color=l,this.matriz=t[this.modelo].matriz[this.angulo],this.longitud=t[this.modelo].matriz[this.angulo][0].length,this.altura=t[this.modelo].matriz[this.angulo].length}girar(e){return this.angulo=this.angulo+1,this.angulo>3&&(this.angulo=0),this.matriz=t[this.modelo].matriz[this.angulo],this.longitud=t[this.modelo].matriz[this.angulo][0].length,this.altura=t[this.modelo].matriz[this.angulo].length,d.sumarPuntos(20),e}}const g={template:`
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
          
    `,script:()=>{boton.addEventListener("click",e);const a=[{avatar:'<img width=50 src="img/avatar1.svg">',nick:"PACO",puntos:150,fecha:"2023-09-27"},{avatar:'<img width=50 src="img/avatar2.svg">',nick:"JUAN",puntos:220,fecha:"2023-09-28"},{avatar:'<img width=50 src="img/avatar3.svg">',nick:"LOLITO",puntos:2200,fecha:"2023-09-28"}];r(a),i(d.partidaGuardada);function e(c){c.preventDefault()}function r(c){console.log("pintapartidas");let v="";c.forEach(b=>{v+=`
        <tr>
            <td>${b.avatar}</td>
            <td>${b.nick}</td>
            <td>${b.puntos}</td>
            <td>${b.fecha}</td>
        </tr>`}),v+=`</tbody>
    <tfoot></tfoot>
    </table>
    </div>`,document.querySelector("#tabla").innerHTML=v}function s(c){a.push(c)}function i(c){const v=`Quieres guardar la partida?
	Nick: ${c.nick}
	Puntuacion: ${c.puntos}
	Fecha: ${c.fecha}`;confirm(v)?(s(c),r(a),console.log("Partida guardada")):console.log("No se ha guardado la partida")}let l=[...a];console.log("CLONADO DE PARTIDAS",l);const o=c=>(c=c.toLowerCase(),a.filter(v=>v.nick.toLowerCase().includes(c)));document.querySelector("#botonBuscar").addEventListener("click",()=>{const v=document.querySelector("#palabraBuscador").value,b=o(v);console.log(b),r(b)}),document.querySelector("#button-addon2").addEventListener("click",()=>{console.log("entra en cancelar"),r(a)});function n(c,v){const b=document.querySelector(`#${c}Icono`);b.className=`bi bi-arrow-${v==="up"?"down":"up"}-square-fill`,a.sort((y,x)=>v==="up"?y[c]>x[c]?1:-1:y[c]<x[c]?1:-1),r(a)}document.getElementById("nickIcono").addEventListener("click",function(){n("nick","up")}),document.getElementById("puntosIcono").addEventListener("click",function(){n("puntos","up")}),document.getElementById("fechaIcono").addEventListener("click",function(){n("fecha","up")})}};function p(a){const e=a[0]+a[1],r=a[3]+a[4],s=parseInt(a[6]+a[7],10),i=a.substring(9,17),o=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"][parseInt(r,10)-1];return`${s} ${o} 20${e} - ${i}`}function z(a){const e=new Date(a),r=e.getFullYear().toString().slice(-2),s=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getDate().toString().padStart(2,"0"),l=e.getHours().toString().padStart(2,"0"),o=e.getMinutes().toString().padStart(2,"0"),n=e.getSeconds().toString().padStart(2,"0");return r+"/"+s+"/"+i+"T"+l+":"+o+":"+n}const d={matriz:[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],matrizLimpia:null,pintaPanel(){let a='<div id="juegoPrincipal">';for(let e=0;e<d.matriz.length;e++){a+='<div class="fila bg-dark d-flex">';for(let r=0;r<d.matriz[e].length;r++){switch(d.matriz[e][r]){case 0:d.color="bg-dark";break;case 2:d.color="bg-primary bg-gradient";break;case 3:d.color="bg-secondary bg-gradient";break;case 4:d.color="bg-success bg-gradient";break;case 5:d.color="bg-danger bg-gradient";break;case 6:d.color="bg-warning bg-gradient";break;case 7:d.color="bg-light";break;case 8:d.color="bg-info bg-gradient";break;default:d.color="espana";break}d.matriz[e][r]>0?a+=`<div class="columna ${d.color} "></div>`:d.matriz[e][r]==0&&(a+=`<div class="columna ${d.color}"></div>`)}a+="</div>"}return a+="</div>",a},crearNuevaPieza(){let a=Math.floor(Math.random()*t.length),e=Math.floor(Math.random()*(9-t[a].matriz[0].length)+1);d.color=t[a].color,d.clase=t[a].nombre;const r=new m(a,0,e,0,d.color);return console.log(d.clase),r},nuevaPieza:null,clase:null,insertarPieza(){for(let e=0;e<d.nuevaPieza.altura;e++)for(let r=0;r<d.nuevaPieza.longitud;r++){const s=d.nuevaPieza.matriz[e][r];s&&(d.matriz[e+d.nuevaPieza.y][r+d.nuevaPieza.x]=s)}const a=document.querySelector("#panel");a.innerHTML=d.pintaPanel()},controlTecla(){document.addEventListener("keydown",a=>{switch(a.key){case"ArrowUp":d.borrarPieza(),d.nuevaPieza.girar(d.nuevaPieza.angulo),d.insertarPieza(d.nuevaPieza);break;case"ArrowDown":d.bajar();break;case"ArrowLeft":d.moverIzq();break;case"ArrowRight":d.moverDra();break;case"c":d.cambiarPieza();break}})},borrarPieza(){for(let e=0;e<d.nuevaPieza.altura;e++)for(let r=0;r<d.nuevaPieza.longitud;r++)d.nuevaPieza.matriz[e][r]&&(d.matriz[e+d.nuevaPieza.y][r+d.nuevaPieza.x]=0);const a=document.querySelector("#panel");a.innerHTML=d.pintaPanel()},moverDra(){d.borrarPieza();let a=d.nuevaPieza.x+1;for(let r=0;r<d.nuevaPieza.altura;r++)for(let s=0;s<d.nuevaPieza.longitud;s++){const i=d.nuevaPieza.matriz[r][s];if(d.matriz[r+d.nuevaPieza.y][s+a]>0)return;i&&(d.matriz[r+d.nuevaPieza.y][s+a]=i)}d.nuevaPieza.x=a,d.sumarPuntos(10);const e=document.querySelector("#panel");e.innerHTML=d.pintaPanel()},moverIzq(){d.borrarPieza();let a=d.nuevaPieza.x-1;for(let r=0;r<d.nuevaPieza.altura;r++)for(let s=0;s<d.nuevaPieza.longitud;s++){const i=d.nuevaPieza.matriz[r][s];if(d.matriz[r+d.nuevaPieza.y][s+a]>0)return;i&&(d.matriz[r+d.nuevaPieza.y][s+a]=i)}d.nuevaPieza.x=a,d.sumarPuntos(10);const e=document.querySelector("#panel");e.innerHTML=d.pintaPanel()},bajar(){d.borrarPieza();let a=d.nuevaPieza.y+1;for(let r=0;r<d.nuevaPieza.altura;r++)for(let s=0;s<d.nuevaPieza.longitud;s++){const i=d.nuevaPieza.matriz[r][s],l=r+a;if(d.nuevaPieza.y==0&&d.matriz[l][s+d.nuevaPieza.x]>0&&d.acabarPartida(),i>0&&d.matriz[l][s+d.nuevaPieza.x]>0){d.insertarPieza(),d.nuevaPieza=d.crearNuevaPieza(),d.sumarPuntos(50),d.limpiarLineas();return}}for(let r=0;r<d.nuevaPieza.altura;r++)for(let s=0;s<d.nuevaPieza.longitud;s++){const i=d.nuevaPieza.matriz[r][s];i&&(d.matriz[r+a][s+d.nuevaPieza.x]=i)}d.nuevaPieza.y=a,d.sumarPuntos(10);const e=document.querySelector("#panel");e.innerHTML=d.pintaPanel()},intervalo:null,iniciarMovimiento(){d.intervalo=setInterval(function(){d.bajar()},1e3)},contadorLineas:0,limpiarLineas(){for(let a=0;a<d.matriz.length-1;a++){let e=0;for(let r=0;r<d.matriz[a].length;r++)d.matriz[a][r]>0&&e++,d.matriz[a]==0&&e>2&&d.acabarPartida();e===12&&(d.matriz.splice(a,1),d.matriz.unshift([1,0,0,0,0,0,0,0,0,0,0,1]),d.contadorLineas++)}d.sumarPuntos(100),document.querySelector("#lineas").innerHTML=d.contadorLineas},puntos:0,sumarPuntos(a){d.puntos=d.puntos+a,d.comprobarNivel(),document.querySelector("#puntos").innerHTML=d.puntos},piezaGuardada:void 0,cambiarPieza(){if(d.borrarPieza(),d.piezaGuardada==null)d.piezaGuardada=d.nuevaPieza,d.nuevaPieza=d.crearNuevaPieza();else{let a;a=d.nuevaPieza,d.nuevaPieza=d.piezaGuardada,d.piezaGuardada=a}},partidaGuardada:null,acabarPartida(){clearInterval(d.intervalo),confirm("TERMINO, QUIERES GUARDAR LA PARTIDA?")&&(document.querySelector("#panel").innerHTML=`
          <div class="bg-dark p-5 m-5">
          <label for="nick">Nick:</label>
          <input type="text" id="nick" name="nick">
          <button class="bg-success text-light mt-3 botonGuardar" id="botonGuardar">GUARDAR</button>
          </div>
          `,document.querySelector("main").addEventListener("click",e=>{if(e.target.classList.contains("botonGuardar")){const r=z(new Date().toISOString()),s=p(r),i={avatar:'<img width=50 src="img/avatar4.svg">',nick:document.querySelector("#nick").value,puntos:d.puntos,fecha:s};d.partidaGuardada=i,document.querySelector("main").innerHTML=g.template,g.script()}}))},nivel:0,comprobarNivel(){const a=(d.nivel+1)*5e3;if(d.puntos>=a){d.nivel++,clearInterval(d.intervalo);let e='<div id="juegoPrincipal">';for(let r=0;r<d.matriz.length;r++){e+='<div class="fila bg-dark d-flex">';for(let s=0;s<d.matriz[r].length;s++){switch(d.matriz[r][s]){case 0:d.color="bg-dark";default:d.color="espana";break}d.matriz[r][s]>1?(d.matriz[r][s]=0,e+=`<div class="columna ${d.color} "></div>`):d.matriz[r][s]==0&&(e+=`<div class="columna ${d.color}"></div>`)}e+="</div>"}e+="</div>",document.querySelector("#panel").innerHTML=e,d.iniciarMovimiento()}document.querySelector("#nivel").innerHTML=d.nivel},color:null,temporizador(){let a=0;function e(){a++;let r=Math.floor(a/60),s=a%60,i=`${r.toString().padStart(1,"0")}:${s.toString().padStart(2,"0")}`;document.querySelector("#tiempo").innerHTML=i}setInterval(e,1e3)}},k={template:`
    <div id="juego" class="">
				<div class="row">
					<!-- Panel izquierda -->
					
					<div
						class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
					>
					<div class="m-4 p-4 d-grid">
						<h4>CONTROLES:</h4>
						<span>C:cambiar pieza</span>
						<span>⬆️:girar pieza</span>
						<span>➡️:mover pieza a la derecha</span>
						<span>⬇️:mover pieza a la izquierda</span>
						<span>⬅️:bajar pieza</span>
					</div>
						<h4>Nivel: <span id="nivel">0</span></h4>
						<h4>Tiempo: <span id="tiempo">0:00</span></h4>
						<h4>Lineas: <span id="lineas">0</span></h4>
						<h4>Puntos: <span id="puntos">211122</span></h4>
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
				<div class="d-flex align-items-center justify-content-center"><button id="finalizar" class="finalizar p-2 m-2 bg-danger text-light">Finalizar</button></div>
			</div>
    `,script:()=>{const a=document.querySelector("#panel");a.innerHTML=d.pintaPanel();const e=JSON.parse(JSON.stringify(d.matriz));d.matrizLimpia=e,d.crearNuevaPieza(),d.nuevaPieza=d.crearNuevaPieza(),d.insertarPieza(),d.controlTecla(),d.iniciarMovimiento(),document.querySelector("#puntos").innerHTML=d.puntos,document.querySelector("#finalizar").addEventListener("click",d.acabarPartida),d.temporizador()}},u={template:`
    <!-- Pantalla de introducción -->
    <div id="intro" class="text-center p-5">
      <p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre treballava a l'Acadèmia de Ciències de Moscou.</p>
      <h2>Instruccions:</h2>
      <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
      <p>Amb la fletxa avall pots girar la peça</p>
      <p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
      <p>Al final de la partida podràs desar la teva puntuació, i verue el ranking de jugadors</p>
      <button id="boton" class="btn btn-success fs-1 mt-5">JUGAR</button>
      <!-- <button id="guardar" class="btn btn-success fs-1 mt-5">GUARDAR</button> -->
              <hr>
    `,script:()=>{boton.addEventListener("click",r);const a=[{avatar:'<img width=50 src="img/avatar1.svg">',nick:"PACO",puntos:150,fecha:"2023-09-27"},{avatar:'<img width=50 src="img/avatar2.svg">',nick:"JUAN",puntos:220,fecha:"2023-09-28"},{avatar:'<img width=50 src="img/avatar3.svg">',nick:"LOLITO",puntos:2200,fecha:"2023-09-28"}],e={avatar:'<img width=50 src="img/avatar4.svg">',nick:"DIGREFG",puntos:100,fecha:"21 MAYO 2023"};s(a),l(e);function r(o){o.preventDefault(),console.log(`
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
						<tbody>
							<tr>
								<td class="fs-2">1</td>
								<td><img src="" alt="avatar" /></td>
								<td>ANDER</td>
								<td>1255</td>
							</tr>
							<tr>
								<td class="fs-2">2</td>
								<td><img src="" alt="avatar" /></td>
								<td>ANDER</td>
								<td>1255</td>
							</tr>
							<tr>
								<td class="fs-2">3</td>
								<td><img src="" alt="avatar" /></td>
								<td>ANDER</td>
								<td>1255</td>
							</tr>
						</tbody>
						<tfoot></tfoot>
					</table>
    `)}function s(o){let n=`
    <h2 class="text-center text-light">Partidas</h2>
				<div class="input-group mb-3">
					<input
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
							<td>Nick <i class="bi bi-arrow-up-square"></i></td>
							<td>Puntuación <i class="bi bi-arrow-up-square"></i></td>								<td>Fecha <i class="bi bi-arrow-up-square"></i></td>
						</tr>
                    </theader>
					<tbody>`;o.forEach(c=>{n+=`
        <tr>
            <td>${c.avatar}</td>
            <td>${c.nick}</td>
            <td>${c.puntos}</td>
            <td>${c.fecha}</td>
        </tr>`}),n+=`</tbody>
    <tfoot></tfoot>
    </table>`,document.querySelector("#partidas").innerHTML=n,console.log(n)}function i(o){console.log("Guardar partida?"),console.log(o),a.push(o)}function l(o){const n=`Quieres guardar la partida?
	Nick: ${o.nick}
	Puntuacion: ${o.puntos}
	Fecha: ${o.fecha}`;confirm(n)?(i(o),s(a),console.log("Partida guardada")):console.log("No se ha guardado la partida")}}},f={template:`
    <button id="botonHome">HOME</button>
    <button id="botonRanking">RANKING</button>
    <button id="botonJuego">JUEGO</button>
    `,script:()=>{botonHome.addEventListener("click",()=>{document.querySelector("main").innerHTML=u.template,u.script()}),botonRanking.addEventListener("click",()=>{document.querySelector("main").innerHTML=g.template,g.script()}),botonJuego.addEventListener("click",()=>{document.querySelector("main").innerHTML=k.template,k.script()})}};document.querySelector("header").innerHTML=f.template;f.script();
