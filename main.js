var texto = document.getElementById("testimonio");
var boton = document.getElementById("button");
var categoriaCajonPublicar = document.getElementById("categoriasCajon");
var categoriaFinalCajon = categoriaCajonPublicar.value;
var teclaEnter = 13;
var resultado = document.getElementById("publicacionDeTestimonio");
boton.addEventListener("click", paraPublicarClick);
boton.addEventListener("keydown", paraPublicarTeclado);



function paraPublicarTeclado(teclaOprimida) {
    if(teclaOprimida.keyCode == teclaEnter) {
        resultado.textContent = texto.value;
    }
}
function paraPublicarClick() {
    resultado.textContent = texto.value;
} 