const menus = [
    {
       dia: "Lunes",
       primerPlato: ["Sopa de lentejas","Ensalada César","Risotto de champiñones"],
       segundoPlato: ["Lomo de cerdo a la parrilla con salsa de mostaza","Salmón a la plancha con puré de patatas","Espaguetis a la bolognesa"],
       postre: ["Tarta de chocolate con helado de vainilla","Fruta fresca de temporada","Tiramisú"],
    },
    {
        dia: "Martes",
        primerPlato: ["Sopa de tomate","Ensalada griega","Paella de mariscos"],
        segundoPlato: ["Pollo al curry con arroz basmati","Bacalao a la vizcaína","Ratatouille"],
        postre: ["Flan de caramelo","Manzana asada","Helado de fresa"],
    },
    {
        dia: "Miercoles",
        primerPlato: ["Gazpacho","Tabulé","Crema de espárragos"],
        segundoPlato: ["Entrecot a la pimienta con patatas gratinadas","Merluza en salsa verde","Pasta primavera"],
        postre: ["Pastel de queso con frutos rojos","Pera en almíbar","Mousse de limón"],
    },
    {
        dia: "Jueves",
        primerPlato: ["Sopa de calabaza","Ensalada de aguacate","Arroz con setas"],
        segundoPlato: ["Costillas de cerdo a la barbacoa con maíz asado","Trucha a la plancha con puré de calabacín","Canelones de espinacas y ricotta"],
        postre: ["Tarta de manzana","Kiwi fresco","Helado de vainilla"],
    },
    {
        dia: "Viernes",
        primerPlato: ["Sopa de cebolla","Ensalada de quinoa","Tortilla española"],
        segundoPlato: ["Pechuga de pollo a la naranja con arroz salvaje","Bacalao al pil-pil","Lasaña de carne"],
        postre: ["Tiramisú","Mango maduro","Flan de vainilla"]
    }
  ];
  
 
  // Evento insertado en el documento inicializado en el momento en el que carga
  document.addEventListener("DOMContentLoaded", function () {
    const selectorDia = document.getElementById("selectorDia");
    const menuContainer = document.getElementById("menu");

    
  
    // MOSTRAR MENU DEL DIA
    function MostrarMenu(hoy) {
        const menuDia = menus[hoy];
        if (menuDia) {
            const menuHTML = `
            <div class="menu-lista">
                <h2>Primer Plato:</h2>
                <p>${menuDia.primerPlato[0]}</p>
                <p>${menuDia.primerPlato[1]}</p>
                <p>${menuDia.primerPlato[2]}</p>
                <h2>Segundo Plato:</h2>
                <p>${menuDia.segundoPlato[0]}</p>
                <p>${menuDia.segundoPlato[1]}</p>
                <p>${menuDia.segundoPlato[2]}</p>
                <h2>Postre:</h2>
                <p>${menuDia.postre[0]}</p>
                <p>${menuDia.postre[1]}</p>
                <p>${menuDia.postre[2]}</p>
            </div>
            `;
            menuContainer.innerHTML = menuHTML;
        } else {
            menuContainer.innerHTML = "No se ha encontrado el menú para este día.";
        }
    }

    // ACTUALIZAR EL MENU EN CASO DE CAMBIAR EL OPTION
    selectorDia.addEventListener("change", () => {
        const nuevoDia = parseInt(selectorDia.value);
        MostrarMenu(nuevoDia);
    });

    /*PARA MOSTRAR EL DIA DE HOY*/
    const miFecha = new Date()
    const hoy = miFecha.getDay()-1
    selectorDia.value = hoy;
    MostrarMenu(hoy);

    const diasSemana = ['lunes', 'martes','miercoles','jueves','viernes','sabado','domingo']
    console.log(hoy)
    document.getElementById("diaHoy").innerHTML= `Hoy es: ${diasSemana[hoy]}`

    /*BUSCAR Y MARCAR PALABRAS*/
    botonBuscar.addEventListener("click", function() {
        const palabra = document.getElementById("buscador").value;
        const menuItems = document.querySelectorAll("#menu p");
        let palabraAnterior = palabra
      
        // ELIMINAR LAS MARCAS ANTERIORES
        menuItems.forEach(element => {
          const texto = element.innerText;
          element.innerHTML = texto.replaceAll(`<span class="bg-success fs-1">${palabraAnterior}</span>`, palabraAnterior);
        });
        
        /*
        menuItems.forEach(function(menuItem) {
          const texto = menuItem.innerText;
          menuItem.innerHTML = texto.replace(`<span class="bg-success fs-1">${palabra}</span>`, palabra);
        });
        */

        // BUSCA Y RESALTA LAS PALABRAS
        menuItems.forEach(element => {
          const texto = element.innerHTML;
          if (texto.includes(palabra)) {
            element.innerHTML = texto.replaceAll(palabra, `<span class="bg-success fs-1">${palabra}</span>`);
          }
        });
        /*
        menuItems.forEach(function(menuItem) {
          const texto = menuItem.innerText;
          if (texto.includes(palabra)) {
            menuItem.innerHTML = texto.replace(palabra, `<span class="bg-success fs-1">${palabra}</span>`);
          }
        });
        */
    });

    /*Calcular hora apertura*/
    botonCalcular.addEventListener("click",calcularHoraApertura)


    function calcularHoraApertura() {
      const horaAbrir = document.getElementById("horaApertura").value;
      // const horaCerrar = document.getElementById("horaCerrada").value;
      const horaFinal = document.getElementById("horaFinal");
    
      const arrayHoraAbrir = horaAbrir.split(":");
    
      const horaAperturaInt = parseInt(arrayHoraAbrir[0]);
      const minutosAperturaInt = parseInt(arrayHoraAbrir[1]);

      const horaAhora = miFecha.getHours()
      const minutosAhora = miFecha.getMinutes()
      console.log(horaAhora)
      console.log(minutosAhora)

      let horasTrabajo = (24 + horaAperturaInt - horaAhora) % 24;
      let minutosTrabajo = (60 + minutosAperturaInt - minutosAhora) % 60;

      if(horasTrabajo==0){
        if(minutosTrabajo==0){
          horasTrabajo=24
        }
      }
        
      horaFinal.innerHTML = `Faltan: ${horasTrabajo} horas y ${minutosTrabajo} minutos para abrir.`;
      
    }


    // Pensaba que era calcular cuantas horas eran desde que cerraba, por eso esta versión
    function calcularHoraApertura2() {
      const horaAbrir = document.getElementById("horaApertura").value;
      const horaCerrar = document.getElementById("horaCerrada").value;
      const horaFinal = document.getElementById("horaFinal");
    
      const arrayHoraAbrir = horaAbrir.split(":");
      const arrayHoraCerrar = horaCerrar.split(":");
    
      const horaAperturaInt = parseInt(arrayHoraAbrir[0]);
      const minutosAperturaInt = parseInt(arrayHoraAbrir[1]);

      const horaCerrarInt = parseInt(arrayHoraCerrar[0]);
      const minutosCerrarInt = parseInt(arrayHoraCerrar[1]);
      /*
      VERSION SOLO HORAS
      if (horaAperturaInt>horaCerrarInt){
        const horasTrabajo = horaAperturaInt - horaCerrarInt; 
        const horasFaltantes = 24 - horasTrabajo
        horaFinal.innerHTML= `Faltan: ${horasFaltantes} horaspara abrir desde la hora de cerrada.`
      }else{
        const horasTrabajo = horaCerrarInt - horaAperturaInt; 
        const horasFaltantes = 24 - horasTrabajo
        horaFinal.innerHTML= `Faltan: ${horasFaltantes} horas para abrir desde la hora de cerrada.`
      }
      */    
      if (horaAperturaInt > horaCerrarInt) {
        let horasTrabajo = (24 + horaAperturaInt - horaCerrarInt) % 24;
        let minutosTrabajo = (60 + minutosAperturaInt - minutosCerrarInt) % 60;

        if(minutosTrabajo>1){
          horasTrabajo=horasTrabajo-1
          console.log(horasTrabajo)
        }

        horaFinal.innerHTML = `Faltan: ${horasTrabajo} horas y ${minutosTrabajo} minutos para abrir desde la hora del cierre`;
      } else {
        let horasTrabajo = (24 + horaCerrarInt - horaAperturaInt) % 24;
        let minutosTrabajo = (60 + minutosCerrarInt - minutosAperturaInt) % 60;
        if(minutosTrabajo>1){
          horasTrabajo=horasTrabajo-1
          console.log(horasTrabajo)
        }

        horaFinal.innerHTML = `Faltan: ${horasTrabajo} horas y ${minutosTrabajo} minutos para abrir desde la hora del cierre.`;
      }
    }

    
  
});