// Definir usuarios registrados
const usuariosRegistrados = [
    { usuario: "usuario1", contraseña: "contraseña1" },
    { usuario: "usuario2", contraseña: "contraseña2" },
    { usuario: "usuario3", contraseña: "contraseña3" }
  ];
  
// Función para verificar el inicio de sesión
function iniciarSesion(usuario, contraseña) {
    for (let i = 0; i < usuariosRegistrados.length; i++) {
      if (usuariosRegistrados[i].usuario === usuario && usuariosRegistrados[i].contraseña === contraseña) {
        return true; // Inicio de sesión exitoso
      }
    }
    return false; // Identificaciones inválidas
  }

// Función para procesar el formulario de inicio de sesión
function loginSubmit(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    const usuarioIngresado = document.getElementById('usuario').value;
    const contraseñaIngresada = document.getElementById('contraseña').value;
  
    if (iniciarSesion(usuarioIngresado, contraseñaIngresada)) {
      document.getElementById('resultado').textContent = 'Inicio de sesión exitoso. ¡Bienvenido, ' + usuarioIngresado + '!';
      document.getElementById('cajero').style.display = 'block';
      document.getElementById('login').style.display = 'none';
    } else {
      document.getElementById('resultado').textContent = 'Credenciales inválidas. Inicio de sesión fallido.';
    }
  }

// Definir variable de saldo y cantidad inicial
let saldo = 1000;

// Función para retirar dinero
function retirarDinero(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  const cantidadRetiro = parseFloat(document.getElementById('cantidadRetiro').value);
  if (cantidadRetiro > 0) {
    if (cantidadRetiro <= saldo) {
      saldo -= cantidadRetiro;
      document.getElementById('resultadoOperacion').textContent = 'Retiraste: ' + cantidadRetiro;
      document.getElementById('saldo').textContent = 'Saldo restante: ' + saldo;
    } else {
      document.getElementById('resultadoOperacion').textContent = 'Fondos insuficientes';
    }
  } else {
    document.getElementById('resultadoOperacion').textContent = 'Cantidad inválida';
  }
}

// Función para depositar dinero
function depositarDinero(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  const cantidadDeposito = parseFloat(document.getElementById('cantidadDeposito').value);
  if (cantidadDeposito > 0) {
    saldo += cantidadDeposito;
    document.getElementById('resultadoOperacion').textContent = 'Depositaste: ' + cantidadDeposito;
    document.getElementById('saldo').textContent = 'Saldo actual: ' + saldo;
  } else {
    document.getElementById('resultadoOperacion').textContent = 'Cantidad inválida';
  }
}
