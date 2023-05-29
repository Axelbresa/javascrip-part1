function obtenerPares(arreglo) {
    let pares = [];
  
    for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        pares.push(arreglo[i]);
      }
    }
  
    return pares;
  }
  console.log(obtenerPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  