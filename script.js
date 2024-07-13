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
   
