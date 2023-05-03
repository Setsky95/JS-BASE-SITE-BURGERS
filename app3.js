window.addEventListener('load', function () {



let hamburguesas = [

  { id: 1, titulo: "Raices" , icono:"🍔" ,precio:2500, ingredientes:"Pan de papa, queso cheddar, carne 100% vacuna, pepino", disponible: true, img:"./imgs/RaicesChica.webp"} ,
  { id: 2, titulo: "Autorretrato", icono:"🍔"  , precio:1800, ingredientes:"Pan de papa, queso cheddar, carne 100% vacuna, bacon", disponible: true, img:"./imgs/autotriplechica.webp" } ,
  { id: 3, titulo: "Vincent", icono:"🍔"  , precio:2400, ingredientes: "Pan de papa, cuatro quesos, carne 100% vacuna, salsa criolla", disponible: true, img:"./imgs/Vangoghchica.webp" } ,
  { id: 4, titulo: "Girasoles", icono:"🍔"  , precio:2000, ingredientes: "Pan de papa, medallón NotBurger, cebolla grillada, champis", disponible: true , img:"./imgs/girasoleschica.webp"} ,
  { id: 5, titulo: "Vangogh", icono:"🍟"  , precio:900, ingredientes: "Papas fritas, queso cheddar, panceta, crema y verdeo ", disponible: true , img:"./imgs/papas_vangogh.webp"} ,
  { id: 6, titulo: "Cheddar", icono:"🍟"  , precio:1100, ingredientes: "Papas fritas, queso cheddar, panceta, crema y verdeo.    ", disponible: true , img:"./imgs/papas_cheddar.webp"} ,

]

/* MENÚ DINÁMICO EN */

const contenedorProductos = document.querySelector ("#contenedorProductos")

for (let hamburguesa of hamburguesas) {
  let contenedor = document.createElement(`article`)
  contenedor.innerHTML= 
  `

  <div class="card  border-dark card-sm ">
  <img src="${hamburguesa.img}" class="card-img-top" alt="viñedo">
<div class="my-2 text-center card   ">
  <div class="card-body">
    <h2 class="text-center  ">${hamburguesa.titulo}</h2>
    <p class="text-center  ">${hamburguesa.ingredientes}</p>
    <p class="text-center  ">$${hamburguesa.precio}</p>

    <button  class="btn btn-dark p-1" id="btn${hamburguesa.id}">Sumar al pedido</a> 
  </div>
</div>
</div>

  `
  contenedorProductos.appendChild (contenedor)
}

const carrito = []


/* PUSH X INDICE 
carrito.push(hamburguesas[0]); 
carrito.push(hamburguesas[1]); 
carrito.push(hamburguesas[2]); 
carrito.push(hamburguesas[3]); 
carrito.push(hamburguesas[4]);  
carrito.push(hamburguesas[5]);  

*/

 
/* BOTONES PARA PUSHEAR AL ARRAY CARRITO*/
 
const botonNocheestrellada = document.querySelector("#btn1");
botonNocheestrellada.onclick = function () {
  carrito.push(hamburguesas[0]);
  let carritoFinal =carrito.map(burger =>{
    return `${burger.icono}  ${burger.titulo}`  ;
  });  const precioFinal = carrito.reduce((acumulado, burger) => {
    return acumulado + burger.precio;
  }, 0);
  const precioCarrito = document.querySelector("#precioCarrito").textContent = ` total: ${precioFinal} `;
  const textoCarrito = document.querySelector("#carritofinal").textContent = `Tu pedido es: ${carritoFinal} `;
}

const botonAutorretrato = document.querySelector("#btn2");
botonAutorretrato.onclick = function () {
  carrito.push(hamburguesas[1]); 
  let carritoFinal =carrito.map(burger =>{
    return `${burger.icono}  ${burger.titulo}`  ;
  });  const precioFinal = carrito.reduce((acumulado, burger) => {
    return acumulado + burger.precio;
  }, 0);
  const precioCarrito = document.querySelector("#precioCarrito").textContent = ` total: ${precioFinal} `;
  const textoCarrito = document.querySelector("#carritofinal").textContent = `Tu pedido es: ${carritoFinal} `;
}
const botonVincent = document.querySelector("#btn3");
botonVincent.onclick = function () {
  carrito.push(hamburguesas[2]); 
  let carritoFinal =carrito.map(burger =>{
    return `${burger.icono}  ${burger.titulo}`  ;
  });  const precioFinal = carrito.reduce((acumulado, burger) => {
    return acumulado + burger.precio;
  }, 0);
  const precioCarrito = document.querySelector("#precioCarrito").textContent = ` total: ${precioFinal} `;
  const textoCarrito = document.querySelector("#carritofinal").textContent = `Tu pedido es: ${carritoFinal} `;
}
const botonGirasoles = document.querySelector("#btn4");
botonGirasoles.onclick = function () {
  carrito.push(hamburguesas[3]); 
    let carritoFinal =carrito.map(burger =>{
    return `${burger.icono}  ${burger.titulo}`  ;
  });  const precioFinal = carrito.reduce((acumulado, burger) => {
    return acumulado + burger.precio;
  }, 0);
  const precioCarrito = document.querySelector("#precioCarrito").textContent = ` total: ${precioFinal} `;
  const textoCarrito = document.querySelector("#carritofinal").textContent = `Tu pedido es: ${carritoFinal} `;
}

const botonpapas1= document.querySelector("#btn5");
botonpapas1.onclick = function () {
  carrito.push(hamburguesas[4]); 
  let carritoFinal =carrito.map(burger =>{
    return `${burger.icono}  ${burger.titulo}`  ;
  });  const precioFinal = carrito.reduce((acumulado, burger) => {
    return acumulado + burger.precio;
  }, 0);
  const precioCarrito = document.querySelector("#precioCarrito").textContent = ` total: ${precioFinal} `;
  const textoCarrito = document.querySelector("#carritofinal").textContent = `Tu pedido es: ${carritoFinal} `;
}
const botonPapas2 = document.querySelector("#btn6");
botonPapas2.onclick = function () {
  carrito.push(hamburguesas[5]); 
  let carritoFinal =carrito.map(burger =>{
    return `${burger.icono}  ${burger.titulo}`  ;
  });  const precioFinal = carrito.reduce((acumulado, burger) => {
    return acumulado + burger.precio;
  }, 0);
  const precioCarrito = document.querySelector("#precioCarrito").textContent = ` total: ${precioFinal} `;
  const textoCarrito = document.querySelector("#carritofinal").textContent = `Tu pedido es: ${carritoFinal} `;
}




/* VACIAR EL CARRITO Guardar los datos en una variable (para algo servirá)  */


const vaciarCarrito = document.querySelector("#btnVaciado");
vaciarCarrito.onclick = function () {
const carritoVaciado = carrito.splice(0)
const precioCarrito = document.querySelector("#precioCarrito").textContent = ` total: ${precioFinal} `;
const textoCarrito = document.querySelector("#carritofinal").textContent = `Tu pedido es: ${carritoFinal}. `;
}


/* ElIMINAR UN ELEMENTO A PARTIR DEL INDICE

carrito.splice(0,1);
carrito.splice(1,1);
carrito.splice(2,1);
carrito.splice(3,1);
carrito.splice(4,1);
carrito.splice(5,1);


*/



/* SUMA DEL CARRITO */
let precioFinal = carrito.reduce((acumulado, burger)=>{
    return acumulado + burger.precio
}, 0)


/* COMPOSICIÓN DEL CARRITO */

let carritoFinal =carrito.map(burger =>{
  return `${burger.icono}  ${burger.titulo}`  ;

});


/* MUESTRA DE PRODUCTOS EN CARRITO  */

const textoCarrito = document.querySelector("#carritofinal").textContent=
`Tu pedido es: ${carritoFinal}`

const precioCarrito = document.querySelector("#precioCarrito").textContent=
`total  $${precioFinal}`


console.log(carrito)
console.log(`el total es ${precioFinal}`)
console.log(`el pedido es ${carritoFinal}`)



})