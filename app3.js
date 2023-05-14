window.addEventListener('load', function () {



  let hamburguesas = [
  
    { id: 1, titulo: "Raices" , icono:"🍔" ,precio:2500, ingredientes:"Pan de papa, queso cheddar, carne 100% vacuna, pepino", disponible: true, img:"./imgs/RaicesChica.webp"} ,
    { id: 2, titulo: "Autorretrato", icono:"🍔"  , precio:1800, ingredientes:"Pan de papa, queso cheddar, carne 100% vacuna, bacon", disponible: true, img:"./imgs/autotriplechica.webp" } ,
    { id: 3, titulo: "Vincent", icono:"🍔"  , precio:2400, ingredientes: "Pan de papa, cuatro quesos, carne 100% vacuna, salsa criolla", disponible: true, img:"./imgs/Vangoghchica.webp" } ,
    { id: 4, titulo: "Girasoles", icono:"🍔"  , precio:2000, ingredientes: "Pan de papa, medallón NotBurger, cebolla grillada, champis", disponible: true , img:"./imgs/girasoleschica.webp"} ,
    { id: 5, titulo: "Noche Estrellada", icono:"🍔"  , precio:1900, ingredientes: "Pan de papa, medallón de carne, cebolla caramelizada, cheddar", disponible: true , img:"./imgs/viñedochica.webp"} ,
    { id: 6, titulo: "Cuervos", icono:"🍔"  , precio:2150, ingredientes: "Pan de papa, medallón de carne, que azul, queso crema, nuez", disponible: true , img:"./imgs/CuervosChica.webp"} ,
    { id: 7, titulo: "Pollo grill", icono:"🥪"  , precio:1400, ingredientes: "Pan de viena, pollo en cubos,cebolla  y cheddar", disponible: true , img:"./imgs/sangu_de_pollo.webp"} ,
    { id: 8, titulo: "Philly steak", icono:"🥪"  , precio:1400, ingredientes: "Pan de viena, carne asada en tiras, cebolla  y cheddar", disponible: true , img:"./imgs/Philly_steak.webp"} ,
    { id: 9, titulo: "Nuggets", icono:"🥨"  , precio:1100, ingredientes: "Nuggets de pollo fritos con diversas salsas", disponible: true , img:"./imgs/Nuggets-pollo.webp"} ,
    { id: 10, titulo: "Aros de cebolla", icono:"🥨"  , precio:1000, ingredientes: "Aros empanados fritos, con barbacoa casera", disponible: true , img:"./imgs/onion.rings.webp"} ,
    { id: 11, titulo: "Vangogh", icono:"🍟"  , precio:1100, ingredientes: "Papas fritas, queso cheddar, panceta, crema y verdeo. Especiales de la casa  ", disponible: true , img:"./imgs/papas_vangogh.webp"} ,
    { id: 12, titulo: "Cheddar", icono:"🍟"  , precio:1100, ingredientes: "Papas fritas, queso cheddar, panceta, crema y verdeo.    ", disponible: true , img:"./imgs/papas_cheddar.webp"} ,

  ]


  //////////////////////////////////////////////
//FOR EACH PARA RENDERIZAR TODO EL ARRAY HAMBURGUESAS
//////////////////////////////////////////////

  const contenedorProductos = document.querySelector (".contenedorProductos")
  

  hamburguesas.forEach(hamburguesa =>  { 
    const contenedor = document.createElement(`article`);
    contenedor.classList.add(`hamburguesa`);
    contenedor.innerHTML= 
    `
    <div class=" rounded-5 ">
    <img src="${hamburguesa.img}" class="card-img-top rounded-1" alt="viñedo">
  <div class="my-2 text-center card"  >
    <div class="card-body fondo_terraza "  style="height: 12rem;" >
      <h2 class="text-center texto-web my-0">${hamburguesa.titulo}</h2>
      <p class="text-center texto-carrito my-0 interlineado-menu"  style="height: 3rem;">${hamburguesa.ingredientes}</p>
      <p class="text-center texto-carrito  ">$${hamburguesa.precio}</p>
      <button  class="pusheoAlcarrito btn btn-dark btn-outline-light px-1 py-0">Sumar al pedido</a> 
    </div>
  </div>
  </div>
    `
    contenedorProductos.appendChild (contenedor)
  });
  
  const carrito = []
  
    //////////////////////////////////////////////
// CONDICIONAL PARA MOSTRAR CARRITO O NO //
//////////////////////////////////////////////

const mostrarCarrito = document.getElementById ("carritoOn")
const mostrarCierre = document.getElementById("finishOn")
const backHomeBtn = document.getElementById ("backHomeBtn")
function ocultarCarritovacio  () {
if (carrito.length >= 1) {
mostrarCierre.style.display = "block";
mostrarCarrito.style.display = "block";
backHomeBtn.style.display = "none";

 actualizarCarrito2 ();
} else {
backHomeBtn.style.display = "block";
 mostrarCarrito.style.display = "none";
 mostrarCierre.style.display = "none";
 actualizarCarrito2 ();

}
}
ocultarCarritovacio  ()
  /* PUSH X INDICE  
  carrito.push(hamburguesas[5]);  
  */

  carrito.push(hamburguesas[5]);  
  carrito.push(hamburguesas[5]);  
  carrito.push(hamburguesas[5]);  

//////////////////////////////////////////////
//FUNCION DE ACTUALIZACIÓN QUE ELIMINA LO RENDERIZADO SI TIENE UN HIJO 
  //Y RENDERIZA DE NUEVO CON UN FOREACH
//////////////////////////////////////////////



  function actualizarCarrito2 (){

    const contenedorCarrito = document.querySelector ("#contenedorCarrito")
    while (contenedorCarrito.firstChild) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

  
  carrito.forEach(productoElegido =>  { 
    const contenedor2 = document.createElement(`article`);
    contenedor2.classList.add(`productoElegido`);
    contenedor2.innerHTML = `
    
    <div class=" row  row-cols-md-3  g-3   border-dark card-sm bg-transparent  d-flex  justify-content-start align-items-center" ">
    <div class=" d-flex justify-content-start align-items-center">
    <h2 class="texto-carrito"> ${productoElegido.icono}  ${productoElegido.titulo}  </h2></div>

    <div class=" d-flex justify-content-between align-items-center">
    
    <button type="button" class="borrarDelcarrito btn btn-dark p-1">Borrar del pedido</a> 
    </div>
    <div class=" d-flex justify-content-end align-items-center">
    <h3 class="texto-carrito "> $${productoElegido.precio}  </h3>
</div>
</div>


    `;

    contenedorCarrito.appendChild (contenedor2)
  });
}



//////////////////////////////////////////////
//  SUMA DEL CARRITO //
//////////////////////////////////////////////
function actualizarPreciofinal () {
  let precioFinal = carrito.reduce((acumulado, burger)=>{
    return acumulado + burger.precio
  }, 0)
  
    const precioCarrito = document.getElementById("precioCarrito")
    precioCarrito.innerHTML= `
    <h2 class="texto-carrito text-center"> TOTAL $ ${precioFinal}  </h2>
   
    ` 
  }


///////////////////////////////////////////////
  //CICLO FOREACH PARA PUSHEAR AL CARRITO// 
//////////////////////////////////////////////
document.querySelectorAll(`.pusheoAlcarrito`).forEach((boton, index) => {
  boton.addEventListener(`click`, () => {
    carrito.push(hamburguesas[index]);
    ocultarCarritovacio  ();
    actualizarCarrito2();
    actualizarPreciofinal ();


  });
});


 /////////////////////////////////////////////
 // VACIAR EL CARRITO Guardar los datos en una variable (para algo servirá)  //
  //////////////////////////////////////////////

  
  const vaciarCarrito = document.getElementById('btnVaciado');
  vaciarCarrito.onclick = function () {
  const carritoVaciado = carrito.splice(0)
  actualizarCarrito2 ();
  actualizarPreciofinal ();
  ocultarCarritovacio  ();

  const textoCarrito = document.querySelector("#precioCarrito").textContent = `El plato está vacío`;
  }
    //////////////////////////////////////////////
// ElIMINAR UN ELEMENTO A PARTIR DE UN EVENTO EN EL PADRE DEL HTML
//( NO FUNCIONABA DIRECTAMENTE SOBRE EL BOTON YA QUE NO ESTABA CARGADO)//
    //////////////////////////////////////////////

    const contenedorCarrito = document.querySelector("#contenedorCarrito");

    contenedorCarrito.addEventListener("click", (event) => {
      if (event.target.classList.contains("borrarDelcarrito")) {
        const boton = event.target;
        const producto = boton.closest(".productoElegido");
    
        const index = Array.from(contenedorCarrito.children).indexOf(producto);
    
    
          carrito.splice(index, 1);
          actualizarCarrito2();
          actualizarPreciofinal();
          ocultarCarritovacio  ();
      }
    });




 // MUESTRA DE PRODUCTOS EN CARRITO  //
  
/*   const textoCarrito = document.querySelector("#carritofinal").textContent=
  `El plato está vacío`
   */
  
  
    //////////////////////////////////////////////



  //CONSOLA //
/*   
  console.log(carrito)
  console.log(`el pedido es ${carritoFinal}`)
   */
  
  
  })