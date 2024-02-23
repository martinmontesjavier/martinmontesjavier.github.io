(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();const g=[{nombre:"Palo",color:"bg-primary bg-gradient",matriz:[[[2],[2],[2],[2]],[[2,2,2,2]],[[2],[2],[2],[2]],[[2,2,2,2]]]},{nombre:"L",color:"bg-secondary bg-gradient",matriz:[[[3,0],[3,0],[3,0],[3,3]],[[3,3,3,3],[3,0,0,0]],[[3,3],[0,3],[0,3],[0,3]],[[0,0,0,3],[3,3,3,3]]]},{nombre:"L-invertida",color:"bg-success bg-gradient",matriz:[[[0,4],[0,4],[0,4],[4,4]],[[4,0,0,0],[4,4,4,4]],[[4,4],[4,0],[4,0],[4,0]],[[4,4,4,4],[0,0,0,4]]]},{nombre:"Z",color:"bg-danger bg-gradient",matriz:[[[5,5,0],[0,5,5]],[[0,5],[5,5],[5,0]],[[5,5,0],[0,5,5]],[[0,5],[5,5],[5,0]]]},{nombre:"Z-invertida",color:"bg-warning bg-gradient",matriz:[[[0,6,6],[6,6,0]],[[6,0],[6,6],[0,6]],[[0,6,6],[6,6,0]],[[6,0],[6,6],[0,6]]]},{nombre:"Cuadrado",color:"bg-light",matriz:[[[7,7],[7,7]],[[7,7],[7,7]],[[7,7],[7,7]],[[7,7],[7,7]]]},{nombre:"T",color:"bg-info bg-gradient",matriz:[[[8,8,8],[0,8,0]],[[0,8],[8,8],[0,8]],[[0,8,0],[8,8,8]],[[8,0],[8,8],[8,0]]]}];class z{constructor(a,r,i=0,s=0,c){console.log("Has creado una instancia de la clase ModeloPieza"),this.modelo=a,this.angulo=r,this.x=i,this.y=s,this.color=c,this.matriz=g[this.modelo].matriz[this.angulo],this.longitud=g[this.modelo].matriz[this.angulo][0].length,this.altura=g[this.modelo].matriz[this.angulo].length}girar(){this.angulo=this.angulo+1,this.angulo>3&&(this.angulo=0);const a=g[this.modelo].matriz[this.angulo],r=a[0].length,i=a.length;let s=!1;for(let c=0;c<i;c++)for(let o=0;o<r;o++)a[c][o]&&d.matriz[this.y+c][this.x+o]>0&&(s=!0);return s==!0?this.angulo=this.angulo-1:(this.matriz=a,this.longitud=r,this.altura=i),d.sumarPuntos(20),this.angulo}}const t={template:`
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
          
    `,partides:[{avatar:'<img width=50 src="img/avatar1.svg">',nick:"PACO",puntos:150,fecha:"2023-09-27"},{avatar:'<img width=50 src="img/avatar2.svg">',nick:"JUAN",puntos:220,fecha:"2023-09-28"},{avatar:'<img width=50 src="img/avatar3.svg">',nick:"LOLITO",puntos:2200,fecha:"2023-09-28"}],script:()=>{boton.addEventListener("click",e),a(t.partides),d.partidaGuardada!=null&&i(d.partidaGuardada),e();function e(){let l=` 
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
                `;t.partides.sort((n,b)=>b.puntos-n.puntos),t.partides.forEach(n=>{l+=` <tr>
                      <td>${n.avatar}</td>
                      <td>${n.nick}</td>
                      <td>${n.puntos}</td>
                      <td>${n.fecha}</td>
                    </tr>
                  `}),l+=`
                  </tbody>
                  <tfoot></tfoot>
                </table>
              `,document.querySelector("#ranking").innerHTML=l}function a(l){console.log("pintapartidas");let n="";l.forEach(b=>{n+=`
        <tr>
            <td>${b.avatar}</td>
            <td>${b.nick}</td>
            <td>${b.puntos}</td>
            <td>${b.fecha}</td>
        </tr>`}),n+=`</tbody>
    <tfoot></tfoot>
    </table>
    </div>`,document.querySelector("#tabla").innerHTML=n}function r(l){t.partides.push(l)}function i(l){const n=`Quieres guardar la partida?
	Nick: ${l.nick}
	Puntuacion: ${l.puntos}
	Fecha: ${l.fecha}`;confirm(n)?(r(l),a(t.partides),d.puntos=0,console.log("Partida guardada"),d.puntos=0):console.log("No se ha guardado la partida")}let s=[...t.partides];console.log("CLONADO DE PARTIDAS",s);const c=l=>(l=l.toLowerCase(),t.partides.filter(n=>n.nick.toLowerCase().includes(l)));document.querySelector("#botonBuscar").addEventListener("click",()=>{const n=document.querySelector("#palabraBuscador").value,b=c(n);console.log(b),a(b)}),document.querySelector("#button-addon2").addEventListener("click",()=>{console.log("entra en cancelar"),a(t.partides)});function o(l,n){const b=document.querySelector(`#${l}Icono`);b.className=`bi bi-arrow-${n==="up"?"down":"up"}-square-fill`,t.partides.sort((k,f)=>n==="up"?k[l]>f[l]?1:-1:k[l]<f[l]?1:-1),a(t.partides)}let v="up",y="up",u="up";document.getElementById("nickIcono").addEventListener("click",function(){o("nick",v),v=="up"?v="down":v="up"}),document.getElementById("puntosIcono").addEventListener("click",function(){o("puntos",y),y=="up"?y="down":y="up"}),document.getElementById("fechaIcono").addEventListener("click",function(){o("fecha",u),u=="up"?u="down":u="up"})}};function h(e){const a=e[0]+e[1],r=e[3]+e[4],i=parseInt(e[6]+e[7],10),s=e.substring(9,17),o=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"][parseInt(r,10)-1];return`${i} ${o} 20${a} - ${s}`}function P(e){const a=new Date(e),r=a.getFullYear().toString().slice(-2),i=(a.getMonth()+1).toString().padStart(2,"0"),s=a.getDate().toString().padStart(2,"0"),c=a.getHours().toString().padStart(2,"0"),o=a.getMinutes().toString().padStart(2,"0"),v=a.getSeconds().toString().padStart(2,"0");return r+"/"+i+"/"+s+"T"+c+":"+o+":"+v}const d={matriz:[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],matrizLimpia:null,pintaPanel(){let e='<div id="juegoPrincipal">';for(let a=0;a<d.matriz.length;a++){e+='<div class="fila bg-dark d-flex">';for(let r=0;r<d.matriz[a].length;r++){switch(d.matriz[a][r]){case 0:d.color="bg-dark";break;case 2:d.color="bg-primary bg-gradient";break;case 3:d.color="bg-secondary bg-gradient";break;case 4:d.color="bg-success bg-gradient";break;case 5:d.color="bg-danger bg-gradient";break;case 6:d.color="bg-warning bg-gradient";break;case 7:d.color="bg-light";break;case 8:d.color="bg-info bg-gradient";break;default:d.color="espana";break}d.matriz[a][r]>0?e+=`<div class="columna ${d.color} "></div>`:d.matriz[a][r]==0&&(e+=`<div class="columna ${d.color}"></div>`)}e+="</div>"}return e+="</div>",e},crearNuevaPieza(){let e=Math.floor(Math.random()*g.length),a=Math.floor(Math.random()*(9-g[e].matriz[0].length)+1);d.color=g[e].color,d.clase=g[e].nombre;const r=new z(e,0,a,0,d.color);return console.log(d.clase),r},nuevaPieza:null,clase:null,insertarPieza(){for(let a=0;a<d.nuevaPieza.altura;a++)for(let r=0;r<d.nuevaPieza.longitud;r++){const i=d.nuevaPieza.matriz[a][r];i&&(d.matriz[a+d.nuevaPieza.y][r+d.nuevaPieza.x]=i)}const e=document.querySelector("#panel");e.innerHTML=d.pintaPanel()},eventoMover:e=>{switch(e.key){case"ArrowUp":d.borrarPieza(),d.nuevaPieza.girar(),d.insertarPieza(d.nuevaPieza);break;case"ArrowDown":d.bajar();break;case"ArrowLeft":d.moverIzq();break;case"ArrowRight":d.moverDra();break;case"c":d.cambiarPieza();break}},controlTecla(){document.addEventListener("keydown",d.eventoMover)},borrarPieza(){for(let a=0;a<d.nuevaPieza.altura;a++)for(let r=0;r<d.nuevaPieza.longitud;r++)d.nuevaPieza.matriz[a][r]&&(d.matriz[a+d.nuevaPieza.y][r+d.nuevaPieza.x]=0);const e=document.querySelector("#panel");e.innerHTML=d.pintaPanel()},moverDra(){d.borrarPieza();let e=d.nuevaPieza.x+1,a=!1;for(let r=0;r<d.nuevaPieza.altura;r++){for(let i=d.nuevaPieza.longitud-1;i>=0;i--){const s=d.nuevaPieza.matriz[r][i],c=i+e;if(s&&(c>=d.ancho||d.matriz[r+d.nuevaPieza.y][c])){a=!0;break}}if(a)break}if(!a||d.nuevaPieza.x+d.nuevaPieza.longitud<d.ancho){for(let i=0;i<d.nuevaPieza.altura;i++)for(let s=d.nuevaPieza.longitud-1;s>=0;s--){const c=d.nuevaPieza.matriz[i][s];c&&(d.matriz[i+d.nuevaPieza.y][s+e]=c)}d.nuevaPieza.x=e,d.sumarPuntos(10);const r=document.querySelector("#panel");r.innerHTML=d.pintaPanel()}},moverIzq(){d.borrarPieza();let e=d.nuevaPieza.x-1,a=!1;for(let r=0;r<d.nuevaPieza.altura;r++){for(let i=0;i<d.nuevaPieza.longitud;i++){const s=d.nuevaPieza.matriz[r][i],c=i+e,o=r+d.nuevaPieza.y;if(s&&(c<0||d.matriz[o][c])){a=!0;break}}if(a)break}if(!a&&e>=0){for(let i=0;i<d.nuevaPieza.altura;i++)for(let s=0;s<d.nuevaPieza.longitud;s++){const c=d.nuevaPieza.matriz[i][s];c&&(d.matriz[i+d.nuevaPieza.y][s+e]=c)}d.nuevaPieza.x=e,d.sumarPuntos(10);const r=document.querySelector("#panel");r.innerHTML=d.pintaPanel()}},bajar(){d.borrarPieza();let e=d.nuevaPieza.y+1,a=!1;for(let r=0;r<d.nuevaPieza.altura;r++){for(let i=0;i<d.nuevaPieza.longitud;i++){const s=d.nuevaPieza.matriz[r][i],c=r+e;if(d.nuevaPieza.y==0&&d.matriz[c][i+d.nuevaPieza.x]>0){d.acabarPartida(),a=!0;break}if(s>0&&d.matriz[c][i+d.nuevaPieza.x]>0){d.insertarPieza(),d.nuevaPieza=d.crearNuevaPieza(),d.sumarPuntos(50),d.limpiarLineas(),a=!0;break}}if(a)break}if(!a){for(let i=0;i<d.nuevaPieza.altura;i++)for(let s=0;s<d.nuevaPieza.longitud;s++){const c=d.nuevaPieza.matriz[i][s];c&&(d.matriz[i+e][s+d.nuevaPieza.x]=c)}d.nuevaPieza.y=e,d.sumarPuntos(10);const r=document.querySelector("#panel");r.innerHTML=d.pintaPanel()}},intervalo:null,iniciarMovimiento(){d.intervalo=setInterval(function(){d.bajar()},1e3)},contadorLineas:0,limpiarLineas(){for(let e=0;e<d.matriz.length-1;e++){let a=0;for(let r=0;r<d.matriz[e].length;r++)d.matriz[e][r]>0&&a++,d.matriz[e]==0&&a>2&&d.acabarPartida();a===12&&(d.matriz.splice(e,1),d.matriz.unshift([1,0,0,0,0,0,0,0,0,0,0,1]),d.contadorLineas++)}d.sumarPuntos(100),document.querySelector("#lineas").innerHTML=d.contadorLineas},puntos:0,sumarPuntos(e){d.puntos=d.puntos+e,d.comprobarNivel(),document.querySelector("#puntos").innerHTML=d.puntos},piezaGuardada:void 0,cambiarPieza(){if(d.borrarPieza(),d.piezaGuardada==null)d.piezaGuardada=d.nuevaPieza,d.nuevaPieza=d.crearNuevaPieza();else{let i;i=d.nuevaPieza,d.nuevaPieza=d.piezaGuardada,d.piezaGuardada=i}let e='<div id="piezaGuardada" class="piezaGuardada">';const a=d.piezaGuardada.matriz;for(let i=0;i<a.length;i++){e+='<div class="d-flex">';for(let s=0;s<a[i].length;s++){switch(a[i][s]){case 0:d.color="";break;case 2:d.color="bg-primary bg-gradient";break;case 3:d.color="bg-secondary bg-gradient";break;case 4:d.color="bg-success bg-gradient";break;case 5:d.color="bg-danger bg-gradient";break;case 6:d.color="bg-warning bg-gradient";break;case 7:d.color="bg-light";break;case 8:d.color="bg-info bg-gradient";break;default:d.color="espana";break}e+=`<div class="columna ${d.color}"></div>`}e+="</div>"}e+="</div>";let r=document.querySelector(".piezaGuardada");r.innerHTML=e},partidaGuardada:null,acabarPartida(){clearInterval(d.intervalo),confirm("TERMINO, QUIERES GUARDAR LA PARTIDA?")?(console.log("AQUI LLEGA ACABAR PARTIDA",document.querySelector("#panel")),document.querySelector("#panel").innerHTML=`
          <div class="bg-dark p-5 m-5">
          <label for="nick">Nick:</label>
          <input type="text" id="nick" name="nick">
          <button class="bg-success text-light mt-3 botonGuardar" id="botonGuardar">GUARDAR</button>
          </div>
          `,document.querySelector("main").addEventListener("click",a=>{if(a.target.classList.contains("botonGuardar")){const r=P(new Date().toISOString()),i=h(r);let s=d.puntos;const c={avatar:'<img width=50 src="img/avatar4.svg">',nick:document.querySelector("#nick").value,puntos:s,fecha:i};d.partidaGuardada=c,document.querySelector("main").innerHTML=t.template,t.script(),clearInterval(d.intervaloTemporizador),d.partidaGuardada=null}}),d.reset()):(document.querySelector("#panel").innerHTML='<img src="https://www.creativefabrica.com/wp-content/uploads/2022/05/06/Game-Over-Graphics-30114494-1-1-580x386.jpg" alt="GAME OVER">',d.reset())},nivel:0,comprobarNivel(){const e=(d.nivel+1)*5e3;if(d.puntos>=e){d.nivel++,clearInterval(d.intervalo);let a='<div id="juegoPrincipal">';for(let r=0;r<d.matriz.length;r++){a+='<div class="fila bg-dark d-flex">';for(let i=0;i<d.matriz[r].length;i++){switch(d.matriz[r][i]){case 0:d.color="bg-dark";default:d.color="espana";break}d.matriz[r][i]>1?(d.matriz[r][i]=0,a+=`<div class="columna ${d.color} "></div>`):d.matriz[r][i]==0&&(a+=`<div class="columna ${d.color}"></div>`)}a+="</div>"}a+="</div>",document.querySelector("#panel").innerHTML=a,d.iniciarMovimiento()}document.querySelector("#nivel").innerHTML=d.nivel},color:null,intervaloTemporizador:null,temporizador(){let e=0;function a(){e++;let r=Math.floor(e/60),i=e%60,s=`${r.toString().padStart(1,"0")}:${i.toString().padStart(2,"0")}`;document.querySelector("#tiempo").innerHTML=s}d.intervaloTemporizador=setInterval(a,1e3)},reset(){d.matriz=[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],d.piezaGuardada=void 0,clearInterval(d.intervaloTemporizador),clearInterval(d.intervalo),d.partidaGuardada=null,d.nivel=0,d.nuevaPieza=null,d.contadorLineas=0,document.removeEventListener("keydown",d.controlTecla)}},x={template:`
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
    `,script:()=>{const e=document.querySelector("#panel");e.innerHTML=d.pintaPanel();const a=JSON.parse(JSON.stringify(d.matriz));d.matrizLimpia=a,d.crearNuevaPieza(),d.nuevaPieza=d.crearNuevaPieza(),d.insertarPieza(),d.controlTecla(),d.iniciarMovimiento(),document.querySelector("#puntos").innerHTML=d.puntos,document.querySelector("#finalizar").addEventListener("click",d.acabarPartida),d.temporizador()}},p={template:`
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
    `,script:()=>{boton.addEventListener("click",()=>{document.querySelector("main").innerHTML=x.template,x.script()});const e=[{avatar:'<img width=50 src="img/avatar1.svg">',nick:"PACO",puntos:150,fecha:"2023-09-27"},{avatar:'<img width=50 src="img/avatar2.svg">',nick:"JUAN",puntos:220,fecha:"2023-09-28"},{avatar:'<img width=50 src="img/avatar3.svg">',nick:"LOLITO",puntos:2200,fecha:"2023-09-28"}],a={avatar:'<img width=50 src="img/avatar4.svg">',nick:"DIGREFG",puntos:100,fecha:"21 MAYO 2023"};r(e),s(a);function r(c){let o=`
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
					<tbody>`;c.forEach(v=>{o+=`
        <tr>
            <td>${v.avatar}</td>
            <td>${v.nick}</td>
            <td>${v.puntos}</td>
            <td>${v.fecha}</td>
        </tr>`}),o+=`</tbody>
    <tfoot></tfoot>
    </table>`,document.querySelector("#partidas").innerHTML=o,console.log(o)}function i(c){console.log("Guardar partida?"),console.log(c),e.push(c)}function s(c){const o=`Quieres guardar la partida?
	Nick: ${c.nick}
	Puntuacion: ${c.puntos}
	Fecha: ${c.fecha}`;confirm(o)?(i(c),r(e),console.log("Partida guardada")):console.log("No se ha guardado la partida")}}},m={template:`
    <button id="botonHome">HOME</button>
    <button id="botonRanking">RANKING</button>
    <button id="botonJuego">JUEGO</button>
    `,script:()=>{botonHome.addEventListener("click",()=>{document.querySelector("main").innerHTML=p.template,p.script()}),botonRanking.addEventListener("click",()=>{document.querySelector("main").innerHTML=t.template,t.script()}),botonJuego.addEventListener("click",()=>{document.querySelector("main").innerHTML=x.template,x.script()})}};document.querySelector("header").innerHTML=m.template;m.script();
