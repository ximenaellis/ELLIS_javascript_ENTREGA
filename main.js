

// Login

const botonDeIngreso = document.getElementById("boton_ingreso");
const nombreUsuario = document.getElementById("input_ingresado");

function nombreUsuarioIngresado() {
    
    if (nombreUsuario.value !== "") {
        sessionStorage.setItem("nombre", nombreUsuario.value);
        window.location.href = './login.html';
    } else {
        alert("Por favor, ingresa tu nombre antes de hacer clic en el botón.");
    }
}

botonDeIngreso.addEventListener("click", nombreUsuarioIngresado);







// const listado = document.getElementById("listado");

// const pedirDatos = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();

//   data.forEach((post) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//         <h4>${post.title}</h4>
//         <p>${post.body}</p>
//     `;
//     listado.append(li);
//   });
// };

// pedirDatos();
