
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let operacion_actual;

let n1, n2;

//funcion suma
function btnSumar() {
    
    msj_correccion.innerHTML = "";
    
    activarBoton("suma");
    operacion_actual = "+";
    
    operacion.innerHTML = " + ";
    
    nuevaSuma();
}

function nuevaSuma() {
   
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    
    respuesta_usuario.focus();
}

//Funcion producto
function btnProducto() {
    
    msj_correccion.innerHTML = "";
    
    activarBoton("producto");
    operacion_actual = "*";
   
    operacion.innerHTML = " x ";
    
    nuevoProducto();
}

function nuevoProducto() {
    
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    
    respuesta_usuario.focus();
}

//funcion resta
function btnResta() {
  
    msj_correccion.innerHTML = "";
   
    activarBoton("resta");
    operacion_actual = "-";
    
    operacion.innerHTML = " - ";
    
    nuevaResta();
}

function nuevaResta() {
   
    n1 = parseInt(Math.random() * 5 + 5);
    
    n2 = parseInt(Math.random() * 5);
    
    num1.innerHTML = n1;
    num2.innerHTML = n2;
   
    respuesta_usuario.focus();
}

//funcion división
function btnDivision() {
   
    msj_correccion.innerHTML = "";
    
    activarBoton("division");
    operacion_actual = "/";
    
    operacion.innerHTML = " / ";
    
    nuevaDivision();
}

function nuevaDivision() {
    
    let divisores = [];

    
    n1 = parseInt(Math.random() * 9 + 1);

    
    for (var i = 1; i <= n1; i++) {
        if (n1 % i === 0) { 
            divisores.push(i);
        }
    }

    
    let pos = parseInt(Math.random() * (divisores.length));

    n2 = divisores[pos];
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}


function corregir() {
    
    if (respuesta_usuario.value == "") {
        return;
    }

    let solucion;
    
    let operacion = n1 + operacion_actual + n2;
    solucion = eval(operacion);

    
    var i = document.createElement("i");
    
    if (respuesta_usuario.value == solucion) {
        i.className = "fa-regular fa-face-grin";
    } else {
        i.className = "fa-regular fa-face-frown";
    }

    
    msj_correccion.appendChild(i);

   
    if (operacion_actual == "+") {
        nuevaSuma();
    } else if (operacion_actual == "-") {
        nuevaResta();
    } else if (operacion_actual == "*") {
        nuevoProducto();
    } else if (operacion_actual == "/") {
        nuevaDivision();
    }

    
    respuesta_usuario.value = "";
}


respuesta_usuario.onkeydown = function(e) {
    var ev = document.all ? window.event : e;
    if (ev.keyCode == 13) {
        corregir();
    }
}



function activarBoton(idBoton) {
    document.getElementById("suma").className = "";
    document.getElementById("resta").className = "";
    document.getElementById("producto").className = "";
    document.getElementById("division").className = "";
    document.getElementById(idBoton).className = "activado";
}
