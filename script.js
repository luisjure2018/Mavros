@font-face {
    font-family: 'HouseOfTheDragon';
    src: url('font/HouseOfTheDragonDeco_PERSONAL_USE_ONLY.otf') format('opentype');
}

header h1 {
    text-align: center;
    font-family: 'HouseOfTheDragon', serif;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

#blason-container {
    position: relative;
    width: 300px;  /* Ajusta según sea necesario para que sea cuadrado */
    height: 300px; /* Ajusta según sea necesario para que sea cuadrado */
    display: flex;
    justify-content: center;
    align-items: center;
}

#blason-izq, #blason-der {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    cursor: pointer;
}

#blason-izq {
    left: 0;
    transform-origin: right center;
}

#blason-der {
    right: 0;
    transform-origin: left center;
}

#contenido {
    background-image: url('img/fondo0.jpg');
    background-size: cover;
    background-position: center;
    padding: 20px;
    width: 60%;
    height: 60%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: none;
    overflow-y: auto;
}

.perfil {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.perfil img {
    width: 150px;
    height: auto;
    margin-right: 20px;
}

.descripcion {
    flex: 1;
    background: rgba(255, 255, 255, 0.6);  /* Fondo blanco con transparencia */
    padding: 10px;
    border-radius: 5px;
}

.botones-episodios {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.episodio-btn {
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    color: white;
    border: none;
    margin: 10px;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

#contenido-episodio {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.6);  /* Fondo blanco con transparencia */
    padding: 10px;
    border-radius: 5px;
}

#titulo-episodio {
    text-align: center;
    margin-bottom: 20px;
}

@keyframes slideLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%) scale(0.5); }
}

@keyframes slideRight {
    0% { transform: translateX(0); }
    100% { transform: translateX(100%) scale(0.5); }
}

.animate-left {
    animation: slideLeft 1s forwards;
}

.animate-right {
    animation: slideRight 1s forwards;
}
