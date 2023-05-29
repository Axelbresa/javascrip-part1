let precios = [];
let precio;
let total = 0;
while (true) {
  precio = prompt("Ingresa el precio del producto (o escribe 'total' para finalizar):");
  if (precio.toLowerCase() === "total") {
  break;
}
let precioNumero = parseFloat(precio);
precios.push(precioNumero);
}
for (let i = 0; i < precios.length; i++) {
total += precios[i];
}
console.log("El total de la compra es: $" + total.toFixed(2));