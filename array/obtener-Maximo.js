function obtenerMaximo(arreglo) {
    let maximo = arreglo[0];
  
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
      }
    }
    return maximo;
  }
  let numeros = [90, 18, 24, 10, 3];
  console.log(obtenerMaximo(numeros));