// Menu fijo con efecto Scroll

var header = document.querySelector("header")
window.addEventListener("scroll", ModificarMeuScroll)


function ModificarMeuScroll(){
    header.classList.toggle("abajo", window.scrollY>0)
}