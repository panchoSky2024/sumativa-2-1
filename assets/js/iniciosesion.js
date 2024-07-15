document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formInicioSesion').addEventListener('submit', (event) => {
        // Evita el envío del formulario por defecto
        event.preventDefault(); 

        // Obtiene los datos del formulario
        const correo = document.getElementById('correo_login').value;
        const contrasena = document.getElementById('contrasena_login').value;

        // Verifica las credenciales
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo && usuario.contrasena === contrasena);

        if (usuarioEncontrado) {
            // Inicio de sesión exitoso
            alert(`¡Bienvenido, ${usuarioEncontrado.nombre}! Has iniciado sesión correctamente.`);
            window.location.href = 'index.html'; // Redirecciona a la página de inicio
        } else {
            // Error al iniciar sesión
            mostrarMensaje("Correo o contraseña incorrectos", "alert-danger");
        }
    });

    // Función para mostrar un mensaje al usuario
    function mostrarMensaje(mensaje, tipo) {
        const mensajeElemento = document.getElementById("errorInicioSesion");
        mensajeElemento.textContent = mensaje;
        mensajeElemento.className = `alert ${tipo}`;
        mensajeElemento.style.display = "block";
    }
});
