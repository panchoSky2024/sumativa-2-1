document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("formRegistro").addEventListener("submit", function(event) {
        // Evita que el formulario se envíe automáticamente
        event.preventDefault();

        // Obtiene los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;

        // Verificar si el correo ya fue registrado
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExistente = usuarios.find(usuario => usuario.correo === correo);

        if (usuarioExistente) {
            mostrarMensaje("¡El correo ya está registrado!", "alert-danger");
        } else {
            // Registrar el nuevo usuario
            const nuevoUsuario = { nombre, correo, contrasena };
            usuarios.push(nuevoUsuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            mostrarMensaje("¡Registro exitoso!", "alert-success");
        }
    });

    // Función para mostrar un mensaje al usuario
    function mostrarMensaje(mensaje, tipo) {
        const mensajeElemento = document.getElementById("mensajeRegistro");
        mensajeElemento.textContent = mensaje;
        mensajeElemento.className = `alert ${tipo}`;
        mensajeElemento.style.display = "block";
    }
});
