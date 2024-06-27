document.getElementById('cambiarBtn').addEventListener('click', function() {
    // Obtener los valores de título y descripción
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;

    // Modificar atributos data de los componentes
    document.getElementById('liveAlertBtn').setAttribute('data-bs-message', titulo);
    document.getElementById('popover').setAttribute('data-bs-content', descripcion);
    document.getElementById('toast-button').setAttribute('data-bs-message', titulo);

    // Mostrar los cambios en consola para verificar
    console.log("Titulo actualizado para alert, popover y toast:", titulo);
    console.log("Descripcion actualizada para popover:", descripcion);
});

