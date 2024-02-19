import { juego } from "../vistas/vistaJuego"
import { principal } from "../vistas/vistaPrincipal"
import { ranking } from "../vistas/vistaRanking"

export const header = {
    template: //html
    `
    <button id="botonHome">HOME</button>
    <button id="botonRanking">RANKING</button>
    <button id="botonJuego">JUEGO</button>
    `,

    script: () =>{
        botonHome.addEventListener('click', () =>{
            document.querySelector('main').innerHTML = principal.template
            principal.script()
        })
        botonRanking.addEventListener('click', () =>{
            document.querySelector('main').innerHTML = ranking.template
            ranking.script()
        })
        botonJuego.addEventListener('click', () =>{
            document.querySelector('main').innerHTML = juego.template
            juego.script()
        })
    }

}
