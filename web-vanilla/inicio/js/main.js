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