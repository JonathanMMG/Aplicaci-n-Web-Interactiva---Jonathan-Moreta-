// Comparación de números
document.getElementById('comparar').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = 'Por favor, ingresa números válidos.';
        resultado.style.color = 'red';
    } else if (num1 > num2) {
        resultado.textContent = `El mayor es ${num1}.`;
        resultado.style.color = 'green';
    } else if (num1 < num2) {
        resultado.textContent = `El mayor es ${num2}.`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Ambos números son iguales.';
        resultado.style.color = 'blue';
    }
});

// Determinar el mes
document.getElementById('mostrarMes').addEventListener('click', () => {
    const mes = parseInt(document.getElementById('mes').value);
    let mensaje = '';
    let tipoAlerta = '';

    switch (mes) {
        case 1: mensaje = 'El mes seleccionado es Enero.'; tipoAlerta = 'success'; break;
        case 2: mensaje = 'El mes seleccionado es Febrero.'; tipoAlerta = 'success'; break;
        case 3: mensaje = 'El mes seleccionado es Marzo.'; tipoAlerta = 'success'; break;
        case 4: mensaje = 'El mes seleccionado es Abril.'; tipoAlerta = 'success'; break;
        case 5: mensaje = 'El mes seleccionado es Mayo.'; tipoAlerta = 'success'; break;
        case 6: mensaje = 'El mes seleccionado es Junio.'; tipoAlerta = 'success'; break;
        case 7: mensaje = 'El mes seleccionado es Julio.'; tipoAlerta = 'success'; break;
        case 8: mensaje = 'El mes seleccionado es Agosto.'; tipoAlerta = 'success'; break;
        case 9: mensaje = 'El mes seleccionado es Septiembre.'; tipoAlerta = 'success'; break;
        case 10: mensaje = 'El mes seleccionado es Octubre.'; tipoAlerta = 'success'; break;
        case 11: mensaje = 'El mes seleccionado es Noviembre.'; tipoAlerta = 'success'; break;
        case 12: mensaje = 'El mes seleccionado es Diciembre.'; tipoAlerta = 'success'; break;
        default: 
            mensaje = 'Número fuera de rango. Ingresa un valor entre 1 y 12.'; 
            tipoAlerta = 'error'; 
            break;
    }

    Swal.fire({
        title: tipoAlerta === 'success' ? '¡Éxito!' : '¡Error!',
        text: mensaje,
        icon: tipoAlerta,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: tipoAlerta === 'success' ? '#007bff' : '#d33'
    });
});




// Gestión de arrays
const nombres = [];
document.getElementById('agregar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value.trim();
    const listaNombres = document.getElementById('listaNombres');

    if (nombre) {
        nombres.push(nombre);
        listaNombres.innerHTML = nombres
            .map((n, index) => `<li>${index + 1}. ${n}</li>`)
            .join('');
        document.getElementById('nombre').value = '';
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
});

