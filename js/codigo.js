let llenarDeNuevo = true;
let valor;
let sumaTotal;
  // Función para obtener el dia 
function fecha(){
  const fechaActual = new Date();
  const diaActual = fechaActual.getDate();
  const mesActual = fechaActual.getMonth() + 1; 
  const añoActual = fechaActual.getFullYear();
  console.log(`Para la fecha ${diaActual} / ${mesActual} / ${añoActual} `);
}
while (llenarDeNuevo) {
  const nombrePicker = prompt('Bienvenido Picker, por favor ingresa tu nombre');
  // Función para obtener el input del usuario valido
  function obtenerInput(nombres) {
    return prompt(nombres).trim();
  }
  // Función para obtener un número válido del usuario
  function obtenerNumero(numero) {
    valor;
    do {
      valor = Number(obtenerInput(numero));
    } while (isNaN(valor) || valor <= 0);
    return valor;
  }
  // Función principal del array
  function pedidosYSKU() {
    const cantidadPedidos = obtenerNumero("Ingrese la cantidad de pedidos:");
    const skus = [];
    for (let i = 0; i < cantidadPedidos; i++) {
      const sku = obtenerInput(`Ingrese el SKU para el pedido ${i + 1}:`);
      skus.push(sku);
    }
    mostrarResultado(skus, cantidadPedidos);
  }
  // Función para mostrar los resultados en la consola
  function mostrarResultado(skus, cantidadPedidos) {
    sumaTotal = 0;
    console.log("Resultado obtenido por SKU");
    skus.forEach((sku, index) => {
      const resultadoSKU = sku * 75;
      sumaTotal += resultadoSKU;
      console.log(`Pedido ${index + 1}: fueron ${sku} SKU dando como resultado = $${resultadoSKU}`);
    });
    const totalPedidos = cantidadPedidos * 1200;
    const resultadoFinal = sumaTotal + totalPedidos;
    console.log(`La suma de todos los SKU fue: $${sumaTotal}`);
    console.log(`El monto total por los ${cantidadPedidos} pedidos es  $${totalPedidos}`);
    fecha();
    console.log(`${nombrePicker} el resultado final de tu dia de trabajo es: $${resultadoFinal}`);
    // Clasificar el día según el resultado final
    if (resultadoFinal < 20000) {
      console.log("Por lo que fue un mal día. =(");
    } else if (resultadoFinal >= 20000 && resultadoFinal <= 40000) {
      console.log("Por lo que fue un buen día. =)");
    } else {
      console.log("Por lo que fue un día excelente. =D");
    }
  }
  // Llamar a la función principal
  pedidosYSKU();
  llenarDeNuevo = confirm('¿Deseas volver a llenar los datos?');
  
}
alert('¡Gracias por usar esta Script!');

