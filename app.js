
//------------Funcões--------------

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    alert(`Sorteando ${quantidade} números entre ${deNumero} e ${ateNumero}...`);

    let numerosSorteados = gerarNumerosAleatorios(quantidade, deNumero, ateNumero);

    let resultado = document.getElementById('resultado');
    exibirTextoNaTela('resultado', `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`);

    alterarStatusBotao();

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
    limpaCampos();
    alterarStatusBotao();
    exibirTextoNaTela('resultado', '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>' );
}

function limpaCampos() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        document.getElementById('btn-reiniciar').removeAttribute('disabled');
    } else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
        document.getElementById('btn-reiniciar').setAttribute('disabled', true);
    }
}