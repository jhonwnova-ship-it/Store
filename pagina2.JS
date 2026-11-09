function mostrarNombre() {
    const nombre = sessionStorage.getItem("nombre");
    const ciudad = sessionStorage.getItem("ciudad");
    const edad = sessionStorage.getItem("edad");
    if (nombre===null){
        document.getElementById("saludo").textContent = "No hay nombre guardado.";
    }else{
document.getElementById("saludo").textContent = "Hola, " + nombre + " de " + ciudad + " tiene " + edad + " años."; 
    }
}
function borrar() {
    sessionStorage.removeItem("nombre");
    sessionStorage.removeItem("ciudad");
    sessionStorage.removeItem("edad");
    mostrarNombre();
} 
function borrarTodo() {
    sessionStorage.clear();
    mostrarNombre();
    
}
document.addEventListener("DOMContentLoaded", mostrarNombre);
btnborrartodo.addEventListener("click", borrarTodo);
