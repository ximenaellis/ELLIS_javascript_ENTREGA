
// Fecha de hoy

const hoy = new Date();
const opciones = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const fechaDeHoy = document.getElementById("fecha_de_hoy");
const mostrarFecha = hoy.toLocaleDateString('es', opciones);

fechaDeHoy.innerText = mostrarFecha;


// Saludo con nombre del usuario

const saludo = document.getElementById("saludo");
const nombreGuardado = sessionStorage.getItem("nombre");
const saludoCompleto = (`¡Hola ${nombreGuardado}!`);

saludo.innerText = saludoCompleto;

// Resultado cómo te sientes hoy

const excelente = document.getElementById("excelente");
const bien = document.getElementById("bien");
const maso = document.getElementById("maso")
const mal = document.getElementById("mal");
const pesimo = document.getElementById("pesimo");
const furioso = document.getElementById("furioso");
const climaIntro = document.getElementById("clima_intro")

let recomendacion = document.getElementById("recomendacion");

excelente.addEventListener("click", fraseExcelente);
bien.addEventListener("click", fraseBien);
maso.addEventListener("click", fraseMaso);
mal.addEventListener("click", fraseMal);
pesimo.addEventListener("click", frasePesimo);
furioso.addEventListener("click", fraseFurioso);

function fraseExcelente () {
    recomendacion.innerText = '¡Hoy será un gran día entonces! Gabriel García Marquez decía... "No hay medicina que cure lo que cura la felicidad"';
}

function fraseBien () {
    recomendacion.innerText = '¡Qué alegría que estés bien! Hay una frase que dice: "La felicidad no es tu destino, es la actitud con la que viajas"';
}

function fraseMaso () {
    recomendacion.innerText = 'Verás que, como decía Thich Nhat Hanh, "El momento actual está lleno de alegría y felicidad. Si no estás atento, no lo ves"';
}

function fraseMal () {
    recomendacion.innerText = 'Siempre recuerda esta frase: "Los hombres olvidan siempre que la felicidad humana es una disposición de la mente y no una condición de las circunstancias", John Locke.';
}

function frasePesimo () {
    recomendacion.innerText = 'Hazle caso a Thomas Jefferson y "Cuando estés molesto cuenta hasta diez antes de hablar. Si estas muy molesto, cuenta hasta cien"';
}

function fraseFurioso () {
    recomendacion.innerText = '"Haz un alto, respira profundo, mientras mantengas la calma, mantienes el control."';
}
  

// Clima

let lon = -58.37723;
let lat = -34.61315;
let iconoClima = document.getElementById("icono_clima");
let temperatura = document.getElementById("temperatura");
let localizacion = document.getElementById("localizacion");
let resumenClima = document.getElementById("resumen");
const kelvin = 273.15;

const apiKey = "45312aebf123ba061ad40c7fccc54d5d";
const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
        localizacion.innerText = data.name + ", ";
        temperatura.innerText = Math.round(data.main.temp - kelvin) + "ºC";
        resumenClima.innerText = data.weather[0].description;

        console.log(resumenClima);
})

.catch(error => {
        console.error('Error fetching weather data:', error);
});

    

if (resumenClima, "clear sky") {
    iconoClima.innerText = "☀️";
    climaIntro.innerText = "¡Hoy es un gran día para disfrutar al aire libre!"
} else if (resumenClima, "few clouds") {
    iconoClima.innerText = "🌤️";
} else if (resumenClima, "scattered clouds") {
    iconoClima.innerText = "🌥️";
} else if (resumenClima, "broken clouds") {
    iconoClima.innerText = "☁️";
} else if (resumenClima, "shower rain") {
    iconoClima.innerText = "🌧️";
} else if (resumenClima, "rain") {
    iconoClima.innerText = "🌦️";
} else if (resumenClima, "thunderstorm") {
    iconoClima.innerText = "⛈️";
} else if (resumenClima, "snow") {
    iconoClima.innerText = "🌨️";
} else if (resumenClima, "mist") {
    iconoClima.innerText = "🌫️";
}

// Vasos de agua

let contador = 0;
const valor = document.getElementById("valor_contador");
const aumentar = document.getElementById("mas");
const disminuir = document.getElementById("menos");

function vasoDeAguaTomado(e) {
    e.preventDefault();
}

function aumentarValorContador() {
    contador++;
    actualizarValor();
}

function disminuirValorContador() {
    contador--;
    actualizarValor();
}

function actualizarValor() {
    valor.textContent = contador;
}


aumentar.addEventListener("click", aumentarValorContador);
disminuir.addEventListener("click", disminuirValorContador);




// Farmacia en local storage

class Remedio {
    constructor(nombre, mg, stock) {
        this.nombre = nombre.toLowerCase();
        this.mg = parseInt(mg);
        this.stock = parseInt(stock);
    }
}

let misRemedios = [];

const ingresaRemedio = document.getElementById("ingresa_remedio");
const nombreRemedio = document.getElementById("nombre_remedio");
const mgRemedio = document.getElementById("mg_remedio");
const stockRemedio = document.getElementById("stock_remedio");
const alertaRemedio = document.getElementById("ingresa_remedio")


ingresaRemedio.addEventListener("submit", remedioIngresado);

function remedioIngresado(e) {
    e.preventDefault();

    let remedio = new Remedio(
        nombreRemedio.value,
        mgRemedio.value,
        stockRemedio.value
    );

    if (nombreRemedio.value.trim() !== "" && mgRemedio.value.trim() !== "" && stockRemedio.value.trim() !== "") {

        let remedio = new Remedio(
            nombreRemedio.value,
            mgRemedio.value,
            stockRemedio.value
        );
    
        misRemedios.push(remedio);
        guardarEnLocalStorage();
        mostrarFarmacia();
        alertaRemedioIngresado();
        location.reload();


    } else {
        alert("Debes completar todos los datos del remedio.");
    }

}


mostrarFarmacia();

if (misRemedios.length === 0) {
    farmaciaVacia();
}

function guardarEnLocalStorage() {
    localStorage.setItem("farmacia", JSON.stringify(misRemedios));
}

function mostrarFarmacia() {
    const contenidoFarmacia = document.getElementById("contenido_farmacia");
    misRemedios = JSON.parse(localStorage.getItem("farmacia")) || [];

    contenidoFarmacia.innerHTML = ""; 

    misRemedios.forEach((remedio) => {
        let filaRemedio = document.createElement("tr");
        filaRemedio.innerHTML = `
            <td>${remedio.nombre}</td>
            <td>${remedio.mg}</td>
            <td>${remedio.stock}</td>
            <td>
                <button onclick="eliminarRemedio('${remedio.nombre}')">Eliminar</button>
            </td>
        `;
        contenidoFarmacia.appendChild(filaRemedio);
        
    });
}

function eliminarRemedio(nombreRemedio) {
    const index = misRemedios.findIndex(remedio => remedio.nombre === nombreRemedio);

    if (index !== -1) {
        misRemedios.splice(index, 1);

        guardarEnLocalStorage();
        mostrarFarmacia(misRemedios);
        alertaRemedioEliminado();
    }
}

function farmaciaVacia() {
    let farmaciaVacia = document.getElementById("titulo_tr");
    farmaciaVacia.innerHTML = "";
    farmaciaVacia.innerText = "- No hay remedios ingresados -";
}

function alertaRemedioIngresado() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Has ingresado un remedio!",
        showConfirmButton: false,
        timer: 3000
      });
}

function alertaRemedioEliminado() {
    Swal.fire({
        title: "¿Deseas eliminar este remedio?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Remedio eliminado!",
            icon: "success"
          });
        }
      });
}

const botonFarmacia = document.getElementById("vaciar_farmacia");

vaciarFarmacia();

function vaciarFarmacia() {

    botonFarmacia.addEventListener("click", function() {
        misRemedios.length = 0;
        guardarEnLocalStorage();
        mostrarFarmacia();
        location.reload();
    });
}

