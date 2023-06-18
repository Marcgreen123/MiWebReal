// Menu fijo con efecto Scroll
var botonScrollAbajo = document.getElementById("go-down-button")
botonScrollAbajo.addEventListener("click", scrollDown)
var header = document.querySelector("header")
window.addEventListener("scroll", ModificarMeuScroll)



// scroll down menu

function ModificarMeuScroll(){
    header.classList.toggle("abajo", window.scrollY>0)
}

//Scroll down boton
function scrollDown(){
    var currentPosition = window.pageYOffset; // Posición actual del scroll
    var targetPosition = 808; // Posición a la que deseas desplazarte
    var distance = targetPosition - currentPosition; // Distancia que se debe recorrer
    var duration = 1000; // Duración de la animación en milisegundos
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null){
            startTime = currentTime;
        } 
        var elapsedTime = currentTime - startTime;
        var newPosition = easeInOutCubic(elapsedTime, currentPosition, distance, duration);
        window.scrollTo(0, newPosition);
        if (elapsedTime < duration) {
            window.requestAnimationFrame(animation);
        }
    }

    // Función de easing para suavizar la animación
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    
    window.requestAnimationFrame(animation);
}


//Generar codigo para que aparezcan los elementos con una animacion al scrollear


ScrollReveal().reveal('.animate', {
    duration: 600, // Duración de la animación en milisegundos
    distance: '20px', // Distancia desde la que se revela el elemento
    origin: 'bottom', // Origen de la animación (puedes usar: 'top', 'right', 'bottom', 'left')
    easing: 'ease-out', // Efecto de aceleración
    interval: 200 // Intervalo de tiempo entre cada elemento
});

ScrollReveal().reveal('.animate2', {
    duration: 1000, // Duración de la animación en milisegundos
    distance: '20px', // Distancia desde la que se revela el elemento
    origin: 'left', // Origen de la animación (puedes usar: 'top', 'right', 'bottom', 'left')
    easing: 'ease-out', // Efecto de aceleración
    interval: 400 // Intervalo de tiempo entre cada elemento
});

ScrollReveal().reveal('.animate3', {
    duration: 1000, // Duración de la animación en milisegundos
    distance: '20px', // Distancia desde la que se revela el elemento
    origin: 'right', // Origen de la animación (puedes usar: 'top', 'right', 'bottom', 'left')
    easing: 'ease-out', // Efecto de aceleración
    interval: 400 // Intervalo de tiempo entre cada elemento
});




/*
// Llamada a la API de YouTube
function fetchYouTubeVideos() {
    // Cambia "TU_API_KEY" por tu propia clave de API de YouTube
    const apiKey = "AIzaSyBPC6e8CXIK9-JVSBEmcVKGta5M9DcKsGM";
    const channelId = "UC6MXPpOvdKJ1Zyzaf_MIP0Q";
    const maxResults = 2;


    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const videosContainer = document.getElementById("videos-container");

            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;
                const videoThumbnail = item.snippet.thumbnails.default.url;
        
                // Crear elementos HTML para mostrar los videos
                const videoElement = document.createElement("div");
                videoElement.className = "video";
        
                const thumbnailElement = document.createElement("img");
                thumbnailElement.className = "thumbnail";
                thumbnailElement.src = videoThumbnail;
        
                const titleElement = document.createElement("p");
                titleElement.className = "title";
                titleElement.innerText = videoTitle;
        
                // Agregar elementos al contenedor
                videoElement.appendChild(thumbnailElement);
                videoElement.appendChild(titleElement);
                videosContainer.appendChild(videoElement);
            });
        })
    .catch(error => {
        console.error("Ha ocurrido un error al cargar los videos de YouTube:", error);
    });
}
  // Cargar los videos al cargar la página
window.onload = fetchYouTubeVideos;
*/