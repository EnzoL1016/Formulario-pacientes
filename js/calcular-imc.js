var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length;i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);
    
    if (!alturaEsValida) {
        console.log("Altura incorrecta.");
        tdImc.textContent = "Altura Incorrecta"
        alturaEsValida = false; 
        paciente.classList.add("paciente-incorrecto")
    }
    if(!pesoEsValido){
        console.log("Peso incorrecto.");
        tdImc.textContent = "Peso Incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto")
    }

    if(pesoEsValido && alturaEsValida){
        tdImc.textContent = calcularImc(peso,altura);      
    }
}

function calcularImc(peso,altura){
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function validarPeso(peso){
    if (peso >= 0 && peso < 1000) {
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura <= 2 && altura >= 0){
        return true;
    }else{
        return false;
    }
}

