let producto = {
    nombre: "auto",
    precio: 1500000,
    cantidad: 2
  };
  
  function calcularTotal(producto) {
    let total = producto.precio * producto.cantidad;
    return total;
  }
  let totalPagar = calcularTotal(producto);
  console.log(totalPagar);
  