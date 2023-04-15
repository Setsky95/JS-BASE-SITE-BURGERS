window.addEventListener('load', function () {

alert ("BIENVENIDO A LA TRIVIA DEFINITIVA DE FRIENDS")
let score = 0;
let respuesta1 = prompt("¿Cómo se llama el personaje que siempre dice '¡Lo sé!' en Friends?");
switch (respuesta1.toLowerCase()) {
  case "monica":
  case "mónica":
    case "1":
    alert("¡Correcto!");
    score++;
    break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Monica'");
    break;
}


let respuesta2 = prompt("¿Qué personaje principal trabaja como chef en Friends?");
switch (respuesta2.toLowerCase()) {
  case "monica":
  case "mónica":
    case "1":
    alert("¡Correcto!");
    score++;
    break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Monica'");
    break;
}

let respuesta3 = prompt("¿Cuál es el nombre del personaje interpretado por Jennifer Aniston en Friends?");
switch (respuesta3.toLowerCase()) {
  case "rachel":
    case "1":
    alert("¡Correcto!");
    score++;
    break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Rachel'");
    break;
}

let respuesta4 = prompt("¿Cómo se llama la hermana gemela de Phoebe?");
switch (respuesta4.toLowerCase()) {
  case "úrsula":
  case "ursula":
    case "1":

    alert("¡Correcto!");
    score++;
    break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Úrsula'");
    break;
}

let respuesta5 = prompt("¿En qué ciudad se desarrolla la serie Friends?");
switch (respuesta5.toLowerCase()) {
  case "nueva york":
  case "new york":
  case "ny":
    case "1":

    alert("¡Correcto!");
    score++;
    break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Nueva York'");
    break;
}

let respuesta6 = prompt("¿Qué es lo que Rachel encuentra en su tarta de Acción de Gracias en el episodio 'The One With All The Trifle'?");
switch (respuesta6.toLowerCase()) {
  case "carne":
  case "ternera":
  case "vaca":
    case "1":

    alert("¡Correcto!");
    score++;
    break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Carne'");
    break;
}

let respuesta7 = prompt("¿Cuál es la famosa cafetería donde se reúnen los amigos en Friends?");
switch (respuesta7.toLowerCase()) {
  case "central perk":
    case "1":

    alert("¡Correcto!");
    score++;
    break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Central Perk'");
    break;
}

let respuesta8 = prompt("¿Cómo se llama el actor que interpreta a Chandler Bing en Friends?");
switch (respuesta8.toLowerCase()) {
  case "matthew perry":
    case "matew perry":
      case "mathew perry":
        case "1":

        alert("¡Correcto!");
        score++;
        break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Matthew Perry'");
    break;
}

let respuesta9 = prompt("¿Qué personaje de Friends tiene un mono como mascota?");
switch (respuesta9.toLowerCase()) {
  case "ross":
    case "1":

    alert("¡Correcto!");
    score++;
    break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Ross'");
    break;
}

let respuesta10 = prompt("¿Cuál era la profesión de Ross en la serie?");
switch (respuesta10.toLowerCase()) {
  case "Paleontólogo":
  case "Paleontologo":
  case "Paleontología":
  case "Paleontologia":
  case "1":

    alert("¡Correcto!");
    score++;
    break;
  default:
    alert("Incorrecto, la respuesta correcta es 'Paleontólogo'");
    break;
}


alert (`tu puntaje final es ${score}`)

if (score >= 6) {
  document.getElementById("resultado").style.display = "block";
  document.getElementById("botonReboot").style.display = "block";


  } else if (score>3 & score<6) {
    document.getElementById("resultadomedio").style.display = "block";
    document.getElementById("botonReboot").style.display = "block";

    
  }
  else {
  document.getElementById("resultadomalo").style.display = "block";
  document.getElementById("botonReboot").style.display = "block";


  }  

  const botonReebot = document.getElementById("botonReboot");
  botonReebot.addEventListener("click", function() {
    location.reload();
  });

  console.log(score)

});