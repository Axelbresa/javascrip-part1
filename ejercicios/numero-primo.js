let numero = parseInt(prompt("Ingrese un número:"));
let esPrimo = true;
if (numero === 1) {
  esPrimo = false;
} else if (numero > 1) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
} 
if (esPrimo) {
  console.log(numero + " es un número primo.");
} else {
  console.log(numero + " no es un número primo.");
}
