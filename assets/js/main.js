const titulo =  document?.querySelector('#titulo');
const btn_mostrar = document?.querySelector("#btn_mostrar");
const mostrar_mensaje = (mensaje) =>{
    titulo.innerHTML = mensaje;
}
btn_mostrar.addEventListener(
    'click', mostrar_mensaje("Vamos a mimir amigos")
);

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

function despedida(nombre) {
    console.log(`Adios ${nombre}`);
}

const fiestaDelJair = (confirmacion = 1) =>{
    switch (confirmacion) {
        case 1:
            console.log("Hay que empedarse");
            break;
    
        case 2:
            console.log("Hay que empedarse mucho mas");
            break;
    
        default:
            console.log("Hay que empedarse mucho mas hasta perder la consciencia");
            break;
    }
}