document.getElementById('blason').addEventListener('click', function() {
    document.getElementById('blason-container').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';
});

document.querySelectorAll('.episodio-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var episodio = button.getAttribute('data-episodio');
        cambiarEpisodio(episodio);
    });
});

function cambiarEpisodio(numero) {
    document.getElementById('titulo-personaje').style.display = 'none';
    document.getElementById('contenido-episodio').style.display = 'block';
    document.getElementById('titulo-episodio').textContent = 'Episodio ' + numero;
    // Aquí puedes añadir la lógica para mostrar el contenido del episodio seleccionado
}
