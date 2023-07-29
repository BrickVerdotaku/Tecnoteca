const account = document.getElementById("account-link");
const loginF = document.getElementById("login-form");
const regisF = document.getElementById("register-form");
const Carrito = document.getElementById("Carrito");

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
  loginF.style.display = "none";
  regisF.style.display = "none";
  account.style.display = "block";
  Carrito.style.display = "block";
}

// Oculta el contenido protegido y muestra el formulario de inicio de sesión
function hideContent() {
  loginF.style.display = "block";
  regisF.style.display = "block";
  account.style.display = "none";
  Carrito.style.display = "none";
}

// Almacena el estado de la sesión en sessionStorage
function storeSession(isLoggedIn) {
  sessionStorage.setItem("session", isLoggedIn);
}

// Verificar el estado de la sesión al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  checkSession();
});
