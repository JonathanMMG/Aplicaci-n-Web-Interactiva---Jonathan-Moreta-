// Cargar datos desde localStorage y mostrarlos en la tabla
document.addEventListener('DOMContentLoaded', () => {
    const registros = JSON.parse(localStorage.getItem('registros')) || [];
    const tablaCuerpo = document.querySelector('#tablaUsuarios tbody');

    if (registros.length === 0) {
        tablaCuerpo.innerHTML = '<tr><td colspan="5" style="text-align: center;">No hay registros disponibles.</td></tr>';
        return;
    }

    registros.forEach((usuario) => {
        const fila = `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.cedula}</td>
                <td>${usuario.nombres}</td>
                <td>${usuario.fechaNacimiento}</td>
                <td>${usuario.ciudad}</td>
            </tr>
        `;
        tablaCuerpo.innerHTML += fila;
    });

    // Funcionalidad del botón regresar
    document.getElementById('regresar').addEventListener('click', () => {
        window.location.href = 'registro.html';
    });
});
