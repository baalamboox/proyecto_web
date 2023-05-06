const titulo =  document?.querySelector('#titulo');
const btn_mostrar = document?.querySelector("#btn_mostrar");
const mostrar_mensaje = (mensaje) =>{
    titulo.innerHTML = mensaje;
}
btn_mostrar.addEventListener(
    'click', mostrar_mensaje("Vamos a mimir amigos")
);