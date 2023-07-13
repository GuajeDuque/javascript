let llenarDeNuevo = true;
let cantidadPedidos, cantidadSku, nombrePicker, resultadoPedidos, resultadoSku, resultadoTotal;
function pedirNombre(){
    nombrePicker = prompt('Bienvenido Picker, por favor ingresa tu nombre');
}
function iff(){

if (resultadoTotal < 20000){
    calificacion = "Fue un mal día =(";
    }
else if (resultadoTotal >= 20000 && resultadoTotal <=40000){
    calificacion = "Fue un día aceptable =/ ";
    }
else (calificacion = "¡¡¡Fue un excelente día!!! =D")}
    }
    alert("La monetización fue de " + resultadoTotal +" $. " + calificacion);
}
pedirNombre();
while (llenarDeNuevo) {
cantidadPedidos = parseFloat(prompt( `${nombrePicker}, ¿Cuántos pedidos hiciste en el día?`));
cantidadSku = parseFloat(prompt(`${nombrePicker}, ¿Cuántos SKU hiciste en el día?`));
resultadoPedidos = (cantidadPedidos*100);
resultadoSku = (cantidadSku*75);
resultadoTotal= resultadoPedidos + resultadoSku;
iff();
llenarDeNuevo = confirm('¿Deseas volver a llenar los datos?');
}
alert('¡Gracias por usar esta Script!');
