// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value;
    
    if(nuevoAmigo != ''){
        amigos.push(nuevoAmigo);

        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';

        for (let i = 0; i < amigos.length; i++) {
            lista.innerHTML += `<li>${amigos[i]}</li>`;
        }
        let vacio = document.getElementById('amigo');
        vacio.value = '';
    }
    else{
        alert("Escriba un valor");
    }
}

function sortearAmigo(){
    let elegido = document.getElementById('resultado');

    let tamano = amigos.length;
    console.log (tamano);
    let sorteo = Math.floor(Math.random() * tamano);

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    elegido.innerHTML = `El amigo secreto es ${amigos[sorteo]}`;
}

