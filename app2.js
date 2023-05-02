/* CONSTRUCTOR */

function producto (nombre, fabricación, características, precio, métododepago) {
this.nombre = nombre;
this.fabricación = fabricación;
this.características = características;
this.precio = Number(precio);
this.métododepago = métododepago;

}

const producto1 = new producto("Guitarra rockstar 4000", "China", "Madera de watamboo y clavijero de hierro", 5999, "12 cuotas sin interés");
const producto2 = new producto("Guitarra Peavy 4500", "China", "Madera de maple canadiense y clavijero de hierro", 15999, "12 cuotas sin interés");
const producto3 = new producto("hola","china", "cueerdas de metal", 544, "efectivo" )

console.log (producto1)
console.log (producto2)
console.log (producto3)


let presupuesto = prompt ("Ingrese su presupuesto")

if  (presupuesto <= 15998)  alert ("te recomendamos ir por el modelo Rockstar " +" "+ producto3.métododepago + " " + producto3.fabricación );
    else 
    alert ("te recomendamos ir por el modelo Peavy");
  



