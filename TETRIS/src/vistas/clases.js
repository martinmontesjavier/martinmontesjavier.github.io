import { models } from "./models"
import { panel } from "./panel"

export class ModeloPieza{
    constructor(modelo, angulo, x=0, y=0,color){
        console.log('Has creado una instancia de la clase ModeloPieza')
        this.modelo = modelo
        this.angulo = angulo
        // this.matriz = matriz
        this.x = x
        this.y = y
        this.color = color
        this.matriz = models[this.modelo].matriz[this.angulo]
        this.longitud = models[this.modelo].matriz[this.angulo][0].length
        this.altura = models[this.modelo].matriz[this.angulo].length
       
    }
   


    girar(angulo){
        this.angulo = this.angulo + 1
        if(this.angulo > 3){
            this.angulo = 0
        }
        this.matriz = models[this.modelo].matriz[this.angulo]
        this.longitud = models[this.modelo].matriz[this.angulo][0].length
        this.altura = models[this.modelo].matriz[this.angulo].length
        panel.sumarPuntos(20)
        return angulo
    }
}
