export function modificaNick(nickInputValue) {
    // Quitar espacios
    let nick = nickInputValue.trim();
  
    // Comprobar si la cadena está vacía
    if (nick === '') {
      return null;
    }
  
    // Eliminar espacios al principio y al final, sustituir los espacios centrals por guiones bajos
    // y convertir todo a mayúsculas
    nick = nick.replace(/\s+/g, '_').toUpperCase();
  
    return nick;
}
  
export function modificaData(inputFecha) {
    
  const anyo = inputFecha[0] + inputFecha[1];
  const numeroMes = inputFecha[3] + inputFecha[4];
  const dia = parseInt(inputFecha[6] + inputFecha[7], 10); // Convertir a número para quitar el cero delante si existe
  const hora = inputFecha.substring(9, 17);

  // Array nombre meses
  const meses = [
      'enero', 'febrero', 'marzo', 'abril',
      'mayo', 'junio', 'julio', 'agosto',
      'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  // Obtener nombre que corresponde al número del mes
  const mesFinal = meses[parseInt(numeroMes, 10) - 1];

  // Formato que pide día, nombre mes, año y hora
  const fechaFinal = `${dia} ${mesFinal} 20${anyo} - ${hora}`;

  return fechaFinal;
}

  export function modificaData2(x) {
    const miFecha = new Date(x);
  
    // Obtén los componentes de la fecha
    const any = miFecha.getFullYear().toString().slice(-2); // Obtenemos los últimos 2 dígitos del año
    const mes = (miFecha.getMonth() + 1).toString().padStart(2, '0'); // El mes comienza desde 0
    const dia = miFecha.getDate().toString().padStart(2, '0');
    const hores = miFecha.getHours().toString().padStart(2, '0');
    const minuts = miFecha.getMinutes().toString().padStart(2, '0');
    const segons = miFecha.getSeconds().toString().padStart(2, '0');
  
    const suma = any + "/" + mes + "/" + dia + "T" + hores + ":" + minuts + ":" + segons;
  
    return suma;
  }

export const dias = (textoFecha) => {
    const formato = /^(\d{2})\/(\d{2})\/(\d{2})T(\d{2}):(\d{2}):(\d{2})$/
    const coincidenciaFecha = textoFecha.match(formato)
    
    if (!coincidenciaFecha) {
      return {
        error: true,
        missatge: 'El format no és correcte'
      }
    }
  
    const [, anyo, mes, dia, hora, minuto, segundo] = coincidenciaFecha
    const fechaEntrada = new Date(`20${anyo}-${mes}-${dia}T${hora}:${minuto}:${segundo}`)
    const fechaActual = new Date()
  
    const diferenciaTiempo = fechaActual - fechaEntrada
    const diferenciaEnDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24))
  
    return diferenciaEnDias
}