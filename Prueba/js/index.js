// Esta función permite iniciar sesión
function login() {
  let userIngresado, passIngresada, userPermitido, passPermitida;

  // Usuario y contraseña permitidos
  userPermitido = "prueba";
  passPermitida = 12345;

  // Se obtienen los datos ingresados
  userIngresado = document.getElementById("user").value;
  passIngresada = document.getElementById("password").value;

  // Compara los datos ingresado con los permitidos
  // Si se cumple, abre la pagina: mapaConPuntos.html
  // Si no se cumple, muestra un alert indicando el error
  if (userIngresado == userPermitido && passIngresada == passPermitida) {
    window.location = "mapaConPuntos.html";
  } else {
    if (userIngresado == "" && passIngresada == "") {
      alert("Complete los campos");
    } else {
      alert("Ingresó un dato incorrecto");
    }
  }
}
