//Suma de los arreglos
function obtenerSuma(arreglo) {
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}
let numeros = [10, 2, 3, 4, 5];
console.log(obtenerSuma(numeros));
