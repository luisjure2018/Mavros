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

document.getElementById('return-btn').addEventListener('click', function() {
    document.getElementById('contenido').style.backgroundImage = "url('img/fondo0.jpg')";
    document.getElementById('titulo-personaje').style.display = 'block';
    document.getElementById('descripcion').innerHTML = `
        <p>
            <!-- Aquí va la breve descripción del personaje. -->
        </p>
    `;
});

// Cambia el contenido del cuadro de texto según el episodio seleccionado
function cambiarEpisodio(numero) {
    document.getElementById('contenido').style.backgroundImage = `url('img/fondo${numero}.jpg')`;
    document.getElementById('titulo-personaje').style.display = 'none';
    var contenido = obtenerContenidoEpisodio(numero);
    document.getElementById('descripcion').innerHTML = contenido;
}

// Contenido de cada episodio
function obtenerContenidoEpisodio(numero) {
    switch(numero) {
        case '1':
            return '<p>Contenido del Episodio 1: Un Encargo Imprevisto...</p>';
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
