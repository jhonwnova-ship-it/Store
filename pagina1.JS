const botonGuardar = document.getElementById("btnguardar");
function guardar(){
    const nombre = document.getElementById("nombre").value;
    const ciudad= document.getElementById("ciudad").value;
    const edad = document.getElementById("edad").value;

    if (nombre === "" || ciudad === "" || edad === "") {
        alert("Por favor, complete todos los campos antes de guardar.");
        return;
    }
    else{
        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("ciudad", ciudad);
        sessionStorage.setItem("edad", edad);
        window.location.href = "pagina2.html";
    }
    
}
botonGuardar.addEventListener("click", guardar);

