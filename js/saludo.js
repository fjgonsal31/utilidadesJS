let section = document.getElementById("saludo-container");
let h1 = document.getElementById("saludo");
let div = document.getElementById("name-input-container");
let input = document.getElementById("name-input");
let button = document.getElementById("submit-name");
let nombreGuardado = localStorage.getItem("nombre");
let date = new Date().getHours();
let hora = Number(date);
let saludo = "Bienvenido";

function mostrarNombre() {
    if (hora >= 6 && hora < 12) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora < 19) {
        saludo = "Buenos tardes";
    } else {
        saludo = "Buenos noches";
    }

    h1.textContent = `¡${saludo}, ${input.value.trim()}!`;
    div.style.display = "none";
}

function guardarNombre() {
    let name = input.value.trim();

    if (name.length > 1) {
        localStorage.setItem("nombre", name); // almacenar en inpeccionador/application/local storage
        mostrarNombre(name);
    }
}

button.addEventListener("click", guardarNombre);
input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        guardarNombre();
    }
});

if (localStorage.getItem("nombre")) {
    input.value = nombreGuardado;
    mostrarNombre();
}
