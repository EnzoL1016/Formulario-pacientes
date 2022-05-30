var buttonAdd = document.querySelector("#adicionar-paciente")

buttonAdd.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    var errores = validarPaciente(paciente); 
    if(errores.length > 0){
        exhibirMensajesErrores(errores);
        return;
    }
    adicionarPacienteEnLaTabla(paciente);     
    form.reset();
    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = ""; 
});

function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
     
}

function capturarDatosPaciente(form){
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente){
 
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
   
    //Asignando las clases padre e hijo
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente){
    var errores = [];
    if(paciente.nombre.length == 0){
        errores.push("El campo nombre no puede estar vacío");
    }
    if(paciente.peso.length == 0){
        errores.push("El campo peso no puede estar vacío");
    }
    if(paciente.altura.length == 0){
        errores.push("El campo altura no puede estar vacío");
    }
    if(paciente.gordura.length == 0){
        errores.push("El campo %grasa no puede estar vacío");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("El peso ingresado no es valido");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("La altura ingresada no es valida");
    }
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}