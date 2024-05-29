//seleccionar el formulario del DOM
const formulario = document.querySelector('form');


// ----------------------------------------------
// funcion para mostrar error
const mostrarError = (input,mensaje) =>{
    //acceder al div padre
    const divPadre = input.parentNode;
    //encuantra el elemento error-text
    const errorText = divPadre.querySelector('.error-text');
    //agrega la clase de error al elemento padre
    divPadre.classList.add('error');
    //agregamos mensaje de error
    errorText.innerText = mensaje;
    console.log(divPadre);

};

mostrarError(document.querySelector('#password'),'INGRESA ESTE CAMPO');
