// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo');
    let obtenerNuevoAmigo = nuevoAmigo.value.trim();

    listaAmigos.push(obtenerNuevoAmigo);

    let presentarAmigos = document.querySelector('#listaAmigos');
    let amigos = '';
    if (obtenerNuevoAmigo == "") {
        alert('Por favor ingrese un nombre :)');
        return;
    } else {
        for (let i = 0; i < listaAmigos.length; i++) {
            amigos += `${listaAmigos[i]}<br>`;
        }
        nuevoAmigo.value = "";
        presentarAmigos.innerHTML = amigos;
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
    }
}

function sortearAmigo() {
    let eliminarPresentarAmigos = document.querySelector('#listaAmigos');
    if (listaAmigos.length == 1 || listaAmigos == 0) {
        alert("Por favor agregue amigos :)");
        return;
    } else{
        eliminarPresentarAmigos.innerHTML = "";

        let resultado = document.getElementById('resultado');
        let posicionListaAleatioria = Math.floor(Math.random()* listaAmigos.length);
        let amigoElegido = `El amigo secreto sorteado es: ${listaAmigos[posicionListaAleatioria]}`;
        resultado.innerHTML = amigoElegido;
        listaAmigos.length = 0;
    }
}