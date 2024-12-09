// Obtener datos del formulario y redirigir a la página de visualización
document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const id = document.getElementById('id').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const nombres = document.getElementById('nombres').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();

    // Validar que todos los campos estén llenos
    if (!id || !cedula || !nombres || !fechaNacimiento || !ciudad) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear un objeto con los datos del usuario
    const usuario = {
        id,
        cedula,
        nombres,
        fechaNacimiento,
        ciudad
    };

    // Guardar los datos en localStorage para pasarlos a la página de visualización
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.push(usuario);
    localStorage.setItem('registros', JSON.stringify(registros));

    // Redirigir a la página de visualización
    window.location.href = 'visualizacion.html';
});
