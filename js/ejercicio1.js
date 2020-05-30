let string = prompt("Ingrese el string a transformar");
let desplazamiento = Number(prompt("Ingrese el desplazamiento"));

let newString = "";
const resultado = document.querySelector(".container");

console.log("El string a transformar es:", string);
for (let i = 0; i < string.length; i++) {
  console.log(string.charCodeAt(i), "La Posicion", i);

  let formula = ((string.charCodeAt(i) + desplazamiento - 65) % 27) + 65;

  let transform = String.fromCharCode(formula);

  newString += transform;
}

resultado.innerHTML += ` 
    <p>
      La nueva palabra transformada es:", <b> ${newString} </b>
    </p>
`;

console.log("La nueva palabra es:", newString);
