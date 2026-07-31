


//------------Funcões--------------

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    alert(`Sorteando ${quantidade} números entre ${deNumero} e ${ateNumero}...`);

    let numerosSorteados = gerarNumerosAleatorios(quantidade, deNumero, ateNumero);

    let resultado = document.getElementById('resultado');
    exibirTextoNaTela('resultado', `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`);

    document.getElementById('btn-reiniciar').repla
}

function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}


function gerarNumerosAleatorios(quantidade, deNumero, ateNumero) {
    let numerosSorteados = [];
    let totalPossivel = ateNumero - deNumero + 1;

    if (quantidade > totalPossivel) {
        throw new Error("A quantidade solicitada é maior que o intervalo disponível.");
        exibirTextoNaTela('resultado', `<label class="texto__paragrafo">A quantidade solicitada é maior que o intervalo disponível</label>`);

    }

    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (ateNumero - deNumero + 1)) + deNumero;
        while (numerosSorteados.includes(numeroAleatorio)) {
            numeroAleatorio = Math.floor(Math.random() * (ateNumero - deNumero + 1)) + deNumero;
        }
        numerosSorteados.push(numeroAleatorio);
    }
    return numerosSorteados;
}

function reiniciar() {

}

function limpaCampos() {

}