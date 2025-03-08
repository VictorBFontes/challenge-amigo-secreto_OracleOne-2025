//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosLista = [];
let listaFinal = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');


function verificarAmigo() {
    let nomeAmigos = document.getElementById('amigoInput').value.trim();

    if (nomeAmigos === "") {
        alert('ERRO! Insira um nome para adicionar na lista.');
        console.log('verificação');

    } else if (amigosLista.includes(nomeAmigos)) {
       alert('Já tem esse nome na lista, por favor insira outro');
       document.getElementById('amigoInput').value = "";

    } else {
        amigosLista.push(nomeAmigos);
        resultado.innerHTML = "";
        listaFinal.innerHTML += `<li>${nomeAmigos}</li>`;
        document.getElementById('amigoInput').value = "";
        alert('Amigo inserido na lista com sucesso!');
        console.log(amigosLista);
    }
    
}



function sortearAmigo() {

    if (amigosLista.length === 0) {
        alert('A lista de amigos está vazia!');
        return;
    } else {
        let nomeIndice = parseInt(Math.random() * amigosLista.length);
        console.log(amigosLista[nomeIndice])
        resultado.innerHTML = `Parabéns! o amigo sorteado foi o(a) ${amigosLista[nomeIndice]}!!`

        listaFinal.innerHTML = "";
        amigosLista = [];
    }
}