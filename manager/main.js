$(document).ready(() => {
    $('#boton_mostrar_saludo').click(() => {
        $.ajax({
            type: 'POST',
            url: 'control/control-index.php',
            data: {
                'saludo': 'Hola mundo!'
            },
            success: resultado => {
                console.log(resultado);
                $('#mostrar_saludo').text(resultado);
            }
        });
    });
});