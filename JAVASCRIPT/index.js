// Obtén los elementos del formulario y el área de contenido
const headerContent = document.getElementById("header-navbar");
const logo = document.getElementById("img-menu");
const loginForm = document.getElementById("container");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const contentContainer = document.getElementById("content");
const logoutButton = document.getElementById("logout-btn");
// const CarritO = document.getElementById("CarritO");

// Agrega un controlador de eventos para el envío del formulario
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Realiza la verificación de las credenciales (puedes modificar esto según tus necesidades)
  if (
    username === "username" ||
    (username === "Username" && password === "password")
  ) {
    // Mostrar el contenido protegido y almacenar el estado de inicio de sesión
    showContent();
    storeSession(true);
  } else {
    alert("Credenciales incorrectas. Inténtalo de nuevo.");
  }
});

// Agrega un controlador de eventos para el botón de cierre de sesión
logoutButton.addEventListener("click", function () {
  // Ocultar el contenido protegido y almacenar el estado de inicio de sesión
  hideContent();
  storeSession(false);
});

// Verifica el estado de la sesión almacenado y muestra u oculta el contenido protegido
function checkSession() {
  const session = sessionStorage.getItem("session");

  if (session === "true") {
    showContent();
  } else {
    hideContent();
  }
}

// Muestra el contenido protegido y oculta el formulario de inicio de sesión
function showContent() {
  logo.style.display = "none";
  headerContent.style.display = "block";
  loginForm.style.display = "none";
  CarritO.style.display = "grid";
}

// Oculta el contenido protegido y muestra el formulario de inicio de sesión
function hideContent() {
  logo.style.display = "block";
  headerContent.style.display = "none";
  loginForm.style.display = "flex";
  CarritO.style.display = "none";
}

// Almacena el estado de la sesión en sessionStorage
function storeSession(isLoggedIn) {
  sessionStorage.setItem("session", isLoggedIn);
}

// Verificar el estado de la sesión al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  checkSession();
});
