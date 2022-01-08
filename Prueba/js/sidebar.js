// Alterna el sidenav
window.addEventListener("DOMContentLoaded", (event) => {
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});

// Esta función cambia la clase del elemento #icono del html
// hace que cambie el icono del boton que despliega el sidenav
function cambiarIcono() {
  if (
    document.getElementById("icon").className ===
    "fa-solid fa-angle-left text-white"
  ) {
    document.getElementById("icon").className =
      "fa-solid fa-angle-right text-white";
  } else {
    document.getElementById("icon").className =
      "fa-solid fa-angle-left text-white";
  }
}
