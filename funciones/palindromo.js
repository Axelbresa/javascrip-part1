function esPalindromo(cadena) {
    cadena = cadena.replace(/\s/g, '').toLowerCase();
    return cadena === cadena.split('').reverse().join('');
  }
  console.log(esPalindromo("ojo"));  
  console.log(esPalindromo("Hola"));  
  