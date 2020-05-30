/*
Queremos programar un juego de dados en una página web.
El usuario empieza con 5 soles , para poder apostar.
El usuario decide a que número apuesta del 1 al 6, y 
también que cantidad de soles quiere apostar.
Se "lanza" un dado (asignación al azar de un número del a 1 a 6)
 
Si el usuario acierta el número, gana el doble de lo que ha postado. 
Si no acierta, pierde todo lo apostado.
 
El juego acaba cuando el usuario llega a 0 soles o a llegar a 200 soles.
*/

function dadito() {
  const resultado = document.querySelector(".container");
  //Saldo inicial del usuario
  let saldoInicialUsuario = 5;
  resultado.innerHTML += `
      <p>
        Saldo inicial: ${saldoInicialUsuario} soles
      </p>
  `;
  //Pedir cuanto va a apostar
  let saldoA_apostar = Number(
    prompt(
      `¿Que canitdad desea apostar?
    SALDO ACTUAL: ${saldoInicialUsuario} soles`
    )
  );
  console.log(`El usuario aposto: ${saldoA_apostar} soles`);

  resultado.innerHTML += `
      <p>
        El usuario aposto: ${saldoA_apostar} soles
      </p>
  `;

  //Pedir al usuario que numero del dado saldra
  let numeroDadoUser = Number(
    prompt("¿Que cara del dado saldra? Escriba su respuesta del 1 al 6")
  );
  let x = 0;
  while (x <= 6) {
    x++;
    if (numeroDadoUser >= 1 && numeroDadoUser <= 6) {
      //Le decimos al usuario su saldo despues de apostar
      let saldoFinal = saldoInicialUsuario - saldoA_apostar;

      //Def. esta variable para el nuevo saldo que tendra cuano se le de el resultado
      let nuevoSaldo = 0;

      //Uso una de los prototios de javascript para tener numeros ramdoms del 1 al 6
      let numRamdom = Math.round(Math.random() * (1 - 6) + parseInt(6));

      if (numeroDadoUser === numRamdom) {
        console.log("Acerto");
        nuevoSaldo = saldoA_apostar * 2;
        console.log("El nuevo saldo es:", nuevoSaldo, "soles");
        resultado.innerHTML += `
          <p class="resultado good"><b>GANO!</b></p> 
          <p>
            El saldo actual del usuario  despues de apostar es: ${nuevoSaldo}
          </p>
        `;
      } else {
        console.log("Lamentablemenre, perdiste");
        nuevoSaldo = saldoA_apostar * 0;
        console.log(
          "Aun tienes:",
          saldoInicialUsuario - saldoA_apostar,
          "soles"
        );
        resultado.innerHTML += `
          <p class="resultado bad"><b>Lamentablemenre, perdiste :(</b></p> 
          <p>
            Aun tienes: ${saldoInicialUsuario - saldoA_apostar} soles
          </p>
        `;
      }

      if (saldoFinal === 0) {
        console.log("El juego ha terminado");
        resultado.innerHTML += `
          <h4>
            El juego ha terminado
          </h4>
        `;
        return false;
      } else if (saldoFinal <= 200) {
        console.log("El juego ha terminado");
        resultado.innerHTML += `
          <h4>
            El juego ha terminado
          </h4>
        `;
        return false;
      }
    } else {
      alert("Solo numeros del 1 al 6");
      numeroDadoUser = Number(
        prompt("¿Que cara del dado saldra? Escriba su respuesta del 1 al 6")
      );
    }
  }

  return saldoFinal;
}

let respuesta = "SI";

do {
  dadito();
  respuesta = prompt("¿Desea jugar nuevamente? SI o NO?");
} while (respuesta === "SI");
