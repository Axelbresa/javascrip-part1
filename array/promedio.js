function obtenerPromedioPonderado(notas, pesos) {
    let sumaPonderada = 0;
    let sumaPesos = 0;
  
    for (let i = 0; i < notas.length; i++) {
      sumaPonderada += notas[i] ;
      sumaPesos += pesos[i];
    }
  
    let promedioPonderado = sumaPonderada / notas.length;
    return promedioPonderado;
  }
  
  let notas = [10, 9, 8, 7];
  let pesos = [54, 80, 70, 65];
  
  console.log(obtenerPromedioPonderado(notas, pesos));