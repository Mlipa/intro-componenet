const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresion = {
    nombre : /^[a-zA-Z\s]{1,40}$/,
    apellido : /^[a-zA-Z\s]{1,40}$/,
    correo : /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]$/,
    clave : /^.{4,16}$/
}

const validarformulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if (expresion.nombre.test(e.target.value)){
                document.getElementById('grupo__nombre').classList.remove('grupo__formulario-incorrecto');
                document.getElementById('grupo__nombre').classList.add('grupo__formulario-correcto');
                document.querySelector('#grupo__nombre .mensaje-error').classList.remove('mensaje-error-activo');
                
            }else {
                document.getElementById('grupo__nombre').classList.add('grupo__formulario-incorrecto');
                document.getElementById('grupo__nombre').classList.remove('grupo__formulario-correcto');
                document.querySelector('#grupo__nombre .mensaje-error').classList.add('mensaje-error-activo');
            }
        break;
        case "apellido":
            if (expresion.apellido.test(e.target.value)){
                document.getElementById('grupo__apellido').classList.remove('grupo__formulario-incorrecto');
                document.getElementById('grupo__apellido').classList.add('grupo__formulario-correcto');
                document.querySelector('#grupo__apellido .mensaje-error').classList.remove('mensaje-error-activo');
            }else {
                document.getElementById('grupo__apellido').classList.add('grupo__formulario-incorrecto');
                document.getElementById('grupo__apellido').classList.remove('grupo__formulario-correcto');
                document.querySelector('#grupo__apellido .mensaje-error').classList.add('mensaje-error-activo');
            }
        break;
        case "correo":
            if (expresion.correo.test(e.target.value)){
                document.getElementById('grupo__correo').classList.remove('grupo__formulario-incorrecto');
                document.getElementById('grupo__correo').classList.add('grupo__formulario-correcto');
                document.querySelector('#grupo__correo .mensaje-error').classList.remove('mensaje-error-activo');
            }else {
                document.getElementById('grupo__correo').classList.add('grupo__formulario-incorrecto');
                document.getElementById('grupo__correo').classList.remove('grupo__formulario-correcto');
                document.querySelector('#grupo__correo .mensaje-error').classList.add('mensaje-error-activo');
            }
        break;
        case "clave":
            if (expresion.clave.test(e.target.value)){
                document.getElementById('grupo__clave').classList.remove('grupo__formulario-incorrecto');
                document.getElementById('grupo__clave').classList.add('grupo__formulario-correcto');
                document.querySelector('#grupo__clave .mensaje-error').classList.remove('mensaje-error-activo');
            }else {
                document.getElementById('grupo__clave').classList.add('grupo__formulario-incorrecto');
                document.getElementById('grupo__clave').classList.remove('grupo__formulario-correcto');
                document.querySelector('#grupo__clave .mensaje-error').classList.add('mensaje-error-activo');
            }
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarformulario);
    input.addEventListener('blur', validarformulario);
});


