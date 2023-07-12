const nombreProgramador = "Daniel Llobet";
const nombreTutor = "Andres Pata"
console.log(nombreProgramador);
let usuario = prompt("¿Cual es tu nombre?");
let edad;
console.log(usuario);
if(usuario == nombreProgramador || usuario == nombreTutor)
    alert ("Bienvenido Programador Master");
else{
    edad = parseInt(prompt("¿Cual es tu edad?"));
    console.log(edad);
    let nacimiento = ( 2023 - edad);
    console.log(nacimiento);
    if(edad >= 18){
        alert("Naciste en " + nacimiento + ", eres mayor de edad" + ". PUEDES INGRESAR =)")
    }       
    else{
        alert("Naciste en " + nacimiento + ", eres menor de edad" + ". NO PUEDES INGRESAR >=(")
    }
}
let edad2 = edad;
for(edad; edad >= 1; edad--){
    console.log("Te saludo " + edad2 + " veces, por tus " + edad2 + " años");
}
if(usuario == nombreProgramador || usuario == nombreTutor)
    alert("Que Todo Te Salga......");
    else{
        alert("BIENVENIDO A FLETES Y MUDANZAS")
        let ciudad = prompt("Trabajamos desde SANTIAGO CENTRO hasta las siguientes ciudades: TALCA (1), CONCEPCION (2) Y MENDOZA (3). ¿Por favor digite el numero de su opcion?")
        while(ciudad != "0" ){
            switch(ciudad){
                case "1":
                    alert("El precio de la mudanza hasta Talca seria: 1000$ USD");
                    alert("Gracias por cortizar");
                    break;
                case "2":
                    alert("El precio de la mudanza hasta Concepcion seria: 1500$ USD");
                    alert("Gracias por cortizar");
                    break;
                case "MENDOZA":
                    alert("El precio de la mudanza hasta Mendoza seria: 2500$ USD");
                    alert("Gracias por cortizar");
                    break;
                default:
                    alert("¡Opcion Mal Ingresada (Opciones 1, 2 o 3)!");
            }
            ciudad = prompt("Ingrese la Opcion (1, 2 o 3) para cotizar o  escriba 0 para salir");
        }
}
if(usuario == nombreProgramador || usuario == nombreTutor)
    alert("Muy Bien......");
    else{
        experiencia()
        function experiencia(){
        let exp = prompt("califica del 1 al 10 tu experiencia, donde 10 es la mayor calificacion");
        console.log("La calificacion del usuario fue:", exp);
        
    }
}


