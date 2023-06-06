window.addEventListener('load', function () {
  let carrito = []  
  loadLocalStorage ()
  


  //////////////////////////////////////////////
//FOR EACH PARA RENDERIZAR TODO EL ARRAY HAMBURGUESAS
//////////////////////////////////////////////

  const contenedorProductos = document.querySelector (".contenedorProductos")


  const pedirHamburguesas  = async () => {
    const resp = await fetch(`data.json`)
    const hamburguesas = await resp.json() 
 
  hamburguesas.forEach((hamburguesa =>  { 
    const contenedor = document.createElement(`article`);
    contenedor.classList.add(`hamburguesa`);
    contenedor.innerHTML= 
    `
    <div class=" rounded-5  ">
    <img src="${hamburguesa.img}" class="card-img-top rounded-1" alt="viñedo">
  <div class="my-2 text-center card border-0"  >
    <div class="card-body fondo_terraza "  style="height: 13rem;" >
      <h2 class="text-center texto-web my-0">${hamburguesa.titulo}</h2>
      <p class="text-center texto-carrito my-0 interlineado-menu"  style="height: 3rem;">${hamburguesa.ingredientes}</p>
      <p class="text-center texto-carrito  ">$${hamburguesa.precio}</p>
      <button  class="pusheoAlcarrito btn btn-dark btn-outline-light px-1 py-0">Sumar al pedido</a> 
    </div>
  </div>
  </div>

    `
    contenedorProductos.appendChild (contenedor)
    
  }))
}

pedirHamburguesas()
  //////////////////////////////////
  //FUNCIÓN PARA GUARDAR  Y CARGAR EN EL STORAGE//
  ///////////////////////////////
  function saveLocalStorage () {
const carritoStr = JSON.stringify(carrito)
  localStorage.setItem( "carrito", `${carritoStr}`)
}

function loadLocalStorage () {
    if (localStorage.getItem("carrito")) {
      carrito  = JSON.parse(localStorage.getItem("carrito"))
    }

  
}



    //////////////////////////////////////////////
// CONDICIONAL PARA MOSTRAR CARRITO Y BTN CARRITO //
//////////////////////////////////////////////

const mostrarCarrito = document.getElementById ("carritoOn")
const mostrarCierre = document.getElementById("finishOn")
const backHomeBtn = document.getElementById ("backHomeBtn")
const btnCarrito = document.getElementById ("btnCarrito")

function ocultarCarritovacio  () {
if (carrito.length >= 1) {
mostrarCierre.style.display = "block";
mostrarCarrito.style.display = "block";
backHomeBtn.style.display = "none";
btnCarrito.style.display = "block";


} else {
backHomeBtn.style.display = "block";
 mostrarCarrito.style.display = "none";
 mostrarCierre.style.display = "none";
 btnCarrito.style.display = "none";


}
}
ocultarCarritovacio  ()
  /* PUSH X INDICE  
  carrito.push(hamburguesas[5]);  
  */


 //////////////////////////////////////////
 // FUNCION TOASTY TOQUETEADA //
 ///////////////////////////////////////////////

 function toastifyNotification ()  {
 Toastify({
  text: "AGREGADO",
  duration: 4000,
  destination: "#carritoOn",
  newWindow: false,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "#5d5a5a",
    borderRadius: "8px",
    boxShadow: "none",
    fontFamily: "'oswald', 'Times New Roman', Times, serif  Arial, sans-serif"
    
  },
  onClick: function(){} // Callback after click
}).showToast();
}
//////////////////////////////////////////////
//FUNCION DE ACTUALIZACIÓN QUE ELIMINA LO RENDERIZADO SI TIENE UN HIJO 
  //Y RENDERIZA DE NUEVO CON UN FOREACH
//////////////////////////////////////////////



function actualizarCarrito2() {
  const contenedorCarrito = document.querySelector("#contenedorCarrito");
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }

  carrito.forEach((productoElegido) => {
    const contenedor2 = document.createElement("article");
    contenedor2.classList.add("productoElegido");
    contenedor2.innerHTML = `
      <div class="row row-cols-md-3 g-3 border-dark card-sm bg-transparent d-flex justify-content-start align-items-center">
        <div class="d-flex justify-content-start align-items-center">
          <h2 class="texto-carrito">${productoElegido.icono} ${productoElegido.titulo}</h2>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="restaCantidad btn btn-outline-light border border-0">-</button>
            <button type="button" class="btn btn-outline-light border border-0">${productoElegido.cantidad}</button>
            <button type="button" class="sumaCantidad btn btn-outline-light border border-0">+</button>
          </div>
          <div class="dcontainer-fluid" id="${productoElegido.tipo}">
          <div class="btn-group" role="group" >
          <div class="btn-group">
          <a class="simple btn btn-dark" id="simple">simple</a>
          <a class="doble btn btn-dark" id="doble">doble</a>
          <a class="triple btn btn-dark" id="triple">triple</a>
        </div>
        </div>
        </div>
        </div>

        <div class="d-flex justify-content-end align-items-center">
          <h3 class="texto-carrito">$${productoElegido.precio}</h3>
        </div>
      </div>
    `;

// DETECTAR SI ES BURGER O NO PARA MOSTRAR "SIMPLE,DOBLE,TRIPLE"//
    const btnOculto = contenedor2.querySelectorAll("#noBurger");

    function ocultarbtnDoble() {
      btnOculto.forEach((botones) => {
        botones.style.display = "none";
      });
    }

    ocultarbtnDoble();
    contenedorCarrito.appendChild(contenedor2);


    actualizarPreciofinal();
    saveLocalStorage();
  });
}


    



actualizarCarrito2 () //PARA QUE MUESTRE EL CARRITO GUARDADO EN EL LOCAL STORAGE //

//////////////////////////////////////////////
//  SUMA DEL CARRITO //
//////////////////////////////////////////////

function actualizarPreciofinal () {
  
  let precioFinal = carrito.reduce((acumulado, burger, )=>{
    const subtotal = burger.precio * burger.cantidad;
    return acumulado + subtotal
  }, 0)
  
    const precioCarrito = document.getElementById("precioCarrito")
    precioCarrito.innerHTML= `
    <h2 class="texto-carrito  d-flex justify-content-end"> TOTAL $ ${precioFinal}  </h2>
   
    ` 
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //FUNCION DE FIND PARA VERIFICAR SI EL PRODUCTO ESTÁ REPETIDO EN EL ARRAY CARRITO Y PUSHEAR O MODIFICAR CANTIDAD.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
fetch(`data.json`)
.then ((res) => res.json())
.then((hamburguesas) =>  
document.querySelectorAll('.pusheoAlcarrito').forEach((boton, index) => {
  boton.addEventListener('click', () => {
    const productoSeleccionado = hamburguesas[index];
    const productoRepetido = carrito.find((p) => p.id === productoSeleccionado.id);


    
    if (productoRepetido) {
      productoRepetido.cantidad++; 
      actualizarCarrito2();
      toastifyNotification () 
    
    } else {
      carrito.push({...productoSeleccionado}); 
      toastifyNotification () 
   
    actualizarCarrito2();
    ocultarCarritovacio();
     }
  });
}));


//////////////////////////////////



 /////////////////////////////////////////////
 // VACIAR EL CARRITO Guardar los datos en una variable (para algo servirá)  //
  //////////////////////////////////////////////
 
  
  const vaciarCarrito = document.getElementById('btnVaciado');
  
  vaciarCarrito.onclick = function () {
  const carritoVaciado = carrito.splice(0)
  actualizarCarrito2 ();
  ocultarCarritovacio  ();
  saveLocalStorage (); 

  
  const textoCarrito = document.querySelector("#precioCarrito").textContent = `El plato está vacío`;
  }
    //////////////////////////////////////////////
// MODIFICAR CANTIDAD A PARTIR DE UN EVENTO EN EL PADRE DEL HTML
//( NO FUNCIONABA DIRECTAMENTE SOBRE EL BOTON YA QUE NO ESTABA CARGADO)//
    //////////////////////////////////////////////



     const contenedorCarrito = document.querySelector("#contenedorCarrito");
    contenedorCarrito.addEventListener("click", (event) => {
      if (event.target.classList.contains("sumaCantidad")) {
        const boton = event.target;
        const producto = boton.closest(".productoElegido");

        const index = Array.from(contenedorCarrito.children).indexOf(producto);

        carrito[index].cantidad++;
        actualizarCarrito2();
        ocultarCarritovacio();
        saveLocalStorage ();



      }

      if (event.target.classList.contains("restaCantidad")) {
        const boton = event.target;
        const producto = boton.closest(".productoElegido");

        const index = Array.from(contenedorCarrito.children).indexOf(producto);

        carrito[index].cantidad--;
        
        if (carrito[index].cantidad <= 0) {
          carrito.splice(index, 1);
        
        }
        actualizarCarrito2();
        ocultarCarritovacio();
        saveLocalStorage ();

      }
/////////////////////////////////////////////////////////////////////////////////////////////
// MODIFICADOR PARA DOBLE | TRIPLE | SIMPLE (SIGUE MIRANDO EVENTOS EN EL CONTENEDOR)//
// CARNES 1 = SIMPLE CARNES 2 = DOBLES CARNES 3 = TRIPLES//
/////////////////////////////////////////////////////////////////////////////////////////////


if (event.target.classList.contains("doble")) {
  const boton = event.target;
  const producto = boton.closest(".productoElegido");
  const index = Array.from(contenedorCarrito.children).indexOf(producto);
  carrito[index].precio = carrito[index].precioDoble;
  carrito[index].carnes = 3;
  event.currentTarget.classList.add("btncheck1");

  actualizarCarrito2();
  ocultarCarritovacio();
}
    if (event.target.classList.contains("triple")) {
      const boton = event.target;
      const producto = boton.closest(".productoElegido");

      const index = Array.from(contenedorCarrito.children).indexOf(producto);

      carrito[index].precio = (carrito[index].precioTriple);
      carrito[index].carnes = 3
      actualizarCarrito2();
      ocultarCarritovacio();
    }

    if (event.target.classList.contains("simple")) {
      const boton = event.target;
      const producto = boton.closest(".productoElegido");

      const index = Array.from(contenedorCarrito.children).indexOf(producto);

      carrito[index].precio = (carrito[index].precioSimple);
      carrito[index].carnes = 1
      actualizarCarrito2();
      ocultarCarritovacio();
    }


      
      
     
    }); 

    console.log(carrito)
///////////////////////

///////////////////////////////////
//FINALIZACION //
//////////////////////////////////////

let inputName = document.querySelector("#inputName");
let inputAdress = document.querySelector("#inputAdress");
let inputPhone = document.querySelector("#inputPhone");
let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", finishing);
function finishing(e) {
  if (
    inputName.value === "" ||
    inputAdress.value === "" ||
    inputPhone.value === ""
  ) {
    e.preventDefault(), alertFailure();
    function alertFailure() {
      Swal.fire({
        position: "center-center",
        icon: "warning",
        title: `Recordá completar todos los datos`,
        color: `rgb(51,51,51)`,
        showConfirmButton: false,
        timer: 2800,
      });
    }
  } else {
    e.preventDefault(), alertSucces(), saveClientStorage();

    function alertSucces() {
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: ` ¡Gracias ${inputName.value}!<h4> te daremos aviso apenas esté en camino</h4>`,
        color: `rgb(51,51,51)`,
        showConfirmButton: false,
        timer: 3200,
      });

      enviarPorWhatsApp();
    }
  }
}
   /////////////CARGAR DATOS CLIENTE EN EL LOCAL ///////
  loadCliente ()
  function loadCliente () {
    if (localStorage.getItem("direccion")) {
      inputAdress.value = JSON.parse(localStorage.getItem("direccion"))
    }
    if (localStorage.getItem("telefono")) {
      inputPhone.value = JSON.parse(localStorage.getItem("telefono"))
    }
    if (localStorage.getItem("nombre")) {
      inputName.value = JSON.parse(localStorage.getItem("nombre"))
    }}
 /////////////GUARDAR DATOS CLIENTE EN EL LOCAL ///////
  function saveClientStorage ()  {
    const telefonoStr = JSON.stringify(inputPhone.value)
    localStorage.setItem( "telefono", `${telefonoStr}`)
    const direccionStr = JSON.stringify(inputAdress.value)
    localStorage.setItem( "direccion", `${direccionStr}`)
    const nombreStr = JSON.stringify(inputName.value)
    localStorage.setItem( "nombre", `${nombreStr}`)
  }

    //////////////////////////////////////////////
//ENVIAR PEDIDO X WSP (EXPORTADOR DE ÓRDENES) //
    //////////////////////////////////////////////

   function enviarPorWhatsApp() {
    setTimeout(function() {

      const numeroTelefono = '+542214944050';
      const fechaActual = new Date();
      const datosActuales = {
        hora: fechaActual.getHours(),
        minutos: fechaActual.getMinutes()
      };
      
      let mensaje = `*CLIENTE*\n\nNombre: ${inputName.value}\n direccion: ${inputAdress.value}\n telefono: ${inputPhone.value}\n horario: \n${datosActuales.hora} horas\n${datosActuales.minutos} minutos\n\n*PEDIDO*\n  `;
      carrito.forEach((producto) => {
        
        
        const { carnes, titulo, cantidad, precio } = producto; // DESESTRUCTURACIÓN//
        mensaje += `\n Producto: ${titulo}\nCantidad: ${cantidad}\ncarnes: ${carnes}\nPrecio: ${precio} \n ` ;
      });
      
      let precioTotal = carrito.reduce((acumulado, burger, )=>{
        const subtotal = burger.precio * burger.cantidad;
        return acumulado + subtotal
      }, 0)
      mensaje += `\nPrecio final: ${precioTotal}`;
    
      const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(numeroTelefono)}&text=${encodeURIComponent(mensaje)}`;
      window.open(url, );
    }, 4700);    };
     
  
  })

 
