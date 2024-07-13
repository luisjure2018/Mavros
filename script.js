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
            return `
                <p style="text-align: justify;">
                    El sol de la tarde se filtraba a través de las altas ventanas del salón en Lanza del Sol, llenando el aire con un brillo dorado. Aderyn y Mavros Blackmont, de visita en la fortaleza de la Casa Martell, disfrutaban de la hospitalidad de sus anfitriones y aprovechaban para entrenar en el arte de la espada. Aderyn, tres años mayor que su hermano, movía su espada de madera con una destreza que evidenciaba su experiencia. Mavros, aunque más joven, mostraba una tenacidad y un ímpetu que lo impulsaban a seguir el ritmo de su hermano.
                </p>
                <p style="text-align: justify;">
                    De repente, un sirviente entró en la sala, interrumpiendo el entrenamiento. Se inclinó profundamente y entregó una carta sellada con el emblema de la Casa Blackmont. Aderyn detuvo su ataque y tomó la carta, sus cejas frunciéndose al reconocer el sello. Mavros, siempre curioso, se acercó para mirar por encima del hombro de su hermano.
                </p>
                <p style="text-align: justify;">
                    "Es de nuestro padre," dijo Aderyn, rompiendo el sello con cuidado. "Tiene instrucciones para ambos."
                </p>
                <p style="text-align: justify;">
                    Aderyn desplegó la carta y comenzó a leer en voz alta. "Aderyn, debes permanecer en Lanza del Sol. Es vital que fortalezcas nuestros lazos con la Casa Martell y perfecciones tus habilidades como escudero aquí."
                </p>
                <p style="text-align: justify;">
                    Mavros asintió, sin sorprenderse. Sabía que su hermano mayor estaba destinado a grandes cosas en Dorne. Sin embargo, la sorpresa llegó cuando Aderyn continuó leyendo.
                </p>
                <p style="text-align: justify;">
                    "Mavros," continuó, "tú debes dirigirte a Essos. Tienes tres misiones que cumplir. Primero, entregarás un paquete a un viejo conocido mío en Tyrosh. Segundo, debes negociar mejores términos para un préstamo con el Banco de Hierro de Braavos. Y tercero..." Aderyn hizo una pausa, frunciendo el ceño como si estuviera leyendo algo desconcertante. "Debes averiguar la receta de un postre famoso en Essos."
                </p>
                <p style="text-align: justify;">
                    Mavros parpadeó, sorprendido. "¿La receta de un postre? ¿Está bromeando?"
                </p>
                <p style="text-align: justify;">
                    Aderyn mantuvo una expresión seria, ocultando su traviesa satisfacción. "Eso es lo que dice. Padre siempre tiene sus razones."
                </p>
                <p style="text-align: justify;">
                    Mavros rascó su barbilla, tratando de entender la lógica detrás de estas misiones. "Essos... nunca pensé que viajaría tan lejos tan pronto. Pero, ¿un postre? ¿Qué tipo de misión es esa?"
                </p>
                <p style="text-align: justify;">
                    Aderyn enrolló la carta y la guardó con cuidado. "Quizás es una prueba de tu capacidad para adaptarte y aprender. Essos es un lugar lleno de desafíos y oportunidades. Debes estar alerta en todo momento."
                </p>
                <p style="text-align: justify;">
                    Mavros asintió, su expresión endureciéndose con determinación. "No te preocupes por mí. Cumpliré con estas misiones y regresaré más fuerte. Y quién sabe, tal vez incluso traiga de vuelta un delicioso postre."
                </p>
                <p style="text-align: justify;">
                    Aderyn sonrió ligeramente y puso una mano en el hombro de su hermano menor. "Sé que lo harás. Y recuerda, siempre puedes confiar en tu ingenio y tu fuerza. La Casa Blackmont se enorgullece de ti."
                </p>
                <p style="text-align: justify;">
                    Con una última mirada a su hermano, Mavros se dirigió hacia sus aposentos para prepararse para el viaje. Sabía que su vida estaba a punto de cambiar drásticamente, pero la sangre de los Blackmont corría por sus venas, y estaba listo para enfrentar cualquier desafío que Essos le presentara.
                </p>
            `;
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
        case '8':
            return '<p>Contenido del Episodio 8...</p>';
        case '9':
            return '<p>Contenido del Episodio 9...</p>';
        default:
            return '<p>Contenido no disponible.</p>';
    }
}
