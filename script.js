document.getElementById('blason-izq').addEventListener('click', iniciarAnimacion);
document.getElementById('blason-der').addEventListener('click', iniciarAnimacion);

function iniciarAnimacion() {
    document.getElementById('blason-izq').classList.add('animate-left');
    document.getElementById('blason-der').classList.add('animate-right');

    setTimeout(function() {
        document.getElementById('blason-container').style.display = 'none';
        document.getElementById('contenido').style.display = 'block';
    }, 1000);
}

document.querySelectorAll('.episodio-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var episodio = button.getAttribute('data-episodio');
        cambiarEpisodio(episodio);
    });
});

function cambiarEpisodio(numero) {
    document.getElementById('contenido').style.backgroundImage = `url('img/fondo${numero}.jpg')`;
    document.getElementById('titulo-personaje').style.display = 'none';
    document.getElementById('contenido-episodio').style.display = 'block';
    document.getElementById('titulo-episodio').textContent = 'Episodio ' + numero;
    var contenido = obtenerContenidoEpisodio(numero);
    document.getElementById('texto-episodio').innerHTML = contenido;
}

function obtenerContenidoEpisodio(numero) {
    switch(numero) {
        case '1':
            return '<p>Contenido del Episodio 1...</p>';
        case '2':
            return '<p>Contenido del Episodio 2...</p>';
        case '3':
            return '<p>Contenido del Episodio 3...</p>';
        case '4':
            return '<p>Contenido del Episodio 4...</p>';
        case '5':
            return '<p>Contenido del Episodio 5...</p>';
        case '6':
            return '<p>Contenido del Episodio 6...</p>';
        case '7':
            return '<p>Contenido del Episodio 7...</p>';
        default:
            return '<p>Contenido no disponible.</p>';
    }
}

