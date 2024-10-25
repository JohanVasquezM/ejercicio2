function calcularN() {
    var parcial1 = document.getElementById('parcial1').value;
    var parcial2 = document.getElementById('parcial2').value;
    var parcial3 = document.getElementById('parcial3').value;

    parcial1 = parseFloat(parcial1);
    parcial2 = parseFloat(parcial2);
    parcial3 = parseFloat(parcial3);

    var esValido = true;
    
    if (isNaN(parcial1) || parcial1 < 0 || parcial1 > 30) {
        document.getElementById('parcial1').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('parcial1').classList.remove('is-invalid');
    }

    if (isNaN(parcial2) || parcial2 < 0 || parcial2 > 30) {
        document.getElementById('parcial2').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('parcial2').classList.remove('is-invalid');
    }

    if (isNaN(parcial3) || parcial3 < 0 || parcial3 > 40) {
        document.getElementById('parcial3').classList.add('is-invalid');
        esValido = false;
    } else {
        document.getElementById('parcial3').classList.remove('is-invalid');
    }

    if (esValido) {
        var notaFinal = parcial1 + parcial2 + parcial3;

        document.getElementById('resultado').value = notaFinal.toFixed(2) + '%';
        
        var mensaje;
        if (notaFinal < 60) {
            mensaje = 'Reprobado';
        } else if (notaFinal < 80) {
            mensaje = 'Bueno';
        } else if (notaFinal < 90) {
            mensaje = 'Muy Bueno';
        } else {
            mensaje = 'Sobresaliente';
        }

        document.getElementById('mensaje').value = mensaje;
    } else {
        document.getElementById('resultado').value = ''; 
        document.getElementById('mensaje').value = '';
    }
}

function limpiar() {
    document.getElementById('parcial1').value = '';
    document.getElementById('parcial2').value = '';
    document.getElementById('parcial3').value = '';
    document.getElementById('resultado').value = '';
    document.getElementById('mensaje').value = '';
    document.getElementById('parcial1').classList.remove('is-invalid');
    document.getElementById('parcial2').classList.remove('is-invalid');
    document.getElementById('parcial3').classList.remove('is-invalid');
}
