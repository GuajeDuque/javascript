let sumaTotal;
let resultadoHTML;
let pedidoTotal;
let pedidos = [];
// Función para obtener la fecha actual
function fecha() {
  const fechaActual = new Date();
  const diaActual = fechaActual.getDate();
  const mesActual = fechaActual.getMonth() + 1; 
  const anoActual = fechaActual.getFullYear();
  return `Para la fecha ${diaActual} / ${mesActual} / ${anoActual}`;
}
// Función para obtener el valor de un elemento de entrada (input)
function obtenerInput(nombres) {
  return document.getElementById(nombres).value.trim();
}
// Función para obtener un número entero
function obtenerNumero(numero) {
  return parseInt(document.getElementById(numero).value, 10);
}
// Función para agregar un pedido al arreglo de pedidos
function agregarPedido(skus) {
  pedidos.push(skus);
}
// Función para guardar los pedidos en el almacenamiento local (localStorage)
function guardarEnLocalStorage() {
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}
// Función para cargar los pedidos desde el almacenamiento local (localStorage)
function cargarDesdeLocalStorage() {
  const pedidosGuardados = localStorage.getItem('pedidos');
  if (pedidosGuardados) {
    pedidos = JSON.parse(pedidosGuardados);
  }
}
// Función para mostrar los resultados en la pantalla
function mostrarResultado() {
  sumaTotal = 0;
  resultadoHTML = "<p>Resultado obtenidos del dia:</p>";
  pedidos.forEach((skus, pedidoIndex) => {
    pedidoTotal = 0;
    skus.forEach((sku, index) => {
      const resultadoSKU = sku * 75;
      pedidoTotal += resultadoSKU;
      resultadoHTML += `<p>Pedido ${pedidoIndex + 1}, fueron ${sku} SKU dando como resultado = $${resultadoSKU}</p>`;
    });
    sumaTotal += pedidoTotal;
  });
  // Calcular el total por cantidad de pedidos y agregarlo al resultado
  const totalPorPedidos = pedidos.length * 1200;
  resultadoHTML += `<p>Monto total por cantidad de pedidos: $${totalPorPedidos}</p>`;
  // Calcular el resultado final sumando el total de SKU y el total por cantidad de pedidos
  const resultadoFinal = sumaTotal + totalPorPedidos;
  resultadoHTML += `<p>La suma de todos los SKU fue: $${sumaTotal}</p>`;
  resultadoHTML += `<p>${fecha()}</p>`;
  resultadoHTML += `<p>${obtenerInput('nombrePicker')} el resultado final de tu dia de trabajo es: $${resultadoFinal}</p>`;
  if (resultadoFinal < 20000) {
    resultadoHTML += "<p>Por lo que fue un mal dia. =(</p>";
  } else if (resultadoFinal >= 20000 && resultadoFinal <= 40000) {
    resultadoHTML += "<p>Por lo que fue un buen dia. =)</p>";
  } else {
    resultadoHTML += "<p>Por lo que fue un dia excelente. =D</p>";
  }
  document.getElementById("resultado").innerHTML = resultadoHTML;
}
// Cargar pedidos almacenados en el LocalStorage al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  cargarDesdeLocalStorage();
});
// Botón "Agregar SKU"
document.getElementById("agregarSku").addEventListener("click", function() {
  const cantidadPedidos = obtenerNumero("cantidadPedidos");
  const skusContainer = document.getElementById("skusContainer");
  skusContainer.innerHTML = "";
  for (let i = 0; i < cantidadPedidos; i++) {
    const pedidoDiv = document.createElement("div");
    pedidoDiv.id = `pedido_${i + 1}`;
    skusContainer.appendChild(pedidoDiv);
    const skuLabel = document.createElement("label");
    skuLabel.for = `sku_${i + 1}`;
    skuLabel.textContent = `Pedido ${i + 1}, Cantidad de SKU:`;
    pedidoDiv.appendChild(skuLabel);
    const skuInput = document.createElement("input");
    skuInput.type = "number";
    skuInput.id = `sku_${i + 1}`;
    skuInput.min = "1";
    pedidoDiv.appendChild(skuInput);
  }
  document.getElementById("mostrarResultados").style.display = "block";
  document.getElementById("reset").style.display = "block";
});
// Botón "Mostrar Resultados"
document.getElementById("mostrarResultados").addEventListener("click", function() {
  const cantidadPedidos = obtenerNumero("cantidadPedidos");
  pedidos = [];
  for (let i = 0; i < cantidadPedidos; i++) {
    const pedidoSkus = [];
    const pedidoDiv = document.getElementById(`pedido_${i + 1}`);
    const skuInputs = pedidoDiv.querySelectorAll("input[type='number']");
    skuInputs.forEach(input => {
      pedidoSkus.push(parseInt(input.value, 10));
    });
    agregarPedido(pedidoSkus);
  }
  mostrarResultado();
  guardarEnLocalStorage();
});
// Botón "Limpiar Pantalla"
document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("nombrePicker").value = "";
  document.getElementById("cantidadPedidos").value = "";
  document.getElementById("skusContainer").innerHTML = "";
  document.getElementById("mostrarResultados").style.display = "none";
  document.getElementById("reset").style.display = "none";
  document.getElementById("resultado").innerHTML = "";
});
