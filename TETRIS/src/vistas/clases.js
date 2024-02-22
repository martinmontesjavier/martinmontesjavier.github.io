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
   


    girar() {
        this.angulo = this.angulo + 1 // Calcula el nuevo ángulo
        if (this.angulo > 3) {
            this.angulo = 0;
        }
    
        const nuevaMatriz = models[this.modelo].matriz[this.angulo]; // Obtiene la nueva matriz de la pieza girada
        const nuevaLongitud = nuevaMatriz[0].length; // Obtiene la nueva longitud de la pieza girada
        const nuevaAltura = nuevaMatriz.length; // Obtiene la nueva altura de la pieza girada
        let colisionDetectada = false; // Variable para detectar colisiones
    
        // Verifica si la pieza puede girar sin colisionar con otras partes de la pieza o con las paredes del panel
        for (let y = 0; y < nuevaAltura; y++) {
            for (let x = 0; x < nuevaLongitud; x++) {
                if (nuevaMatriz[y][x] && panel.matriz[this.y + y][this.x + x] > 0) { // Comprueba si hay colisión
                    colisionDetectada = true; // Se ha detectado una colisión
                }
            }
        }
    
        if (colisionDetectada == true) { // Si hay colisión, resta 1 al ángulo
            this.angulo = this.angulo - 1 // Resta 1 al ángulo
        } else { // Si no hay colisión, se realiza el giro
            this.matriz = nuevaMatriz; // Actualiza la matriz
            this.longitud = nuevaLongitud; // Actualiza la longitud
            this.altura = nuevaAltura; // Actualiza la altura
        }
    
        panel.sumarPuntos(20); // Suma puntos
        return this.angulo; // Retorna el nuevo ángulo
    }
}
