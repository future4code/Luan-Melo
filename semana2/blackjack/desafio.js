console.log('Boas vindas ao jogo de Blackjack!')

if (confirm('Quer iniciar uma nova rodada: ?')) {
    let arrayJogador = []
    let arraDoisJogador = []
    let arrayComputador = []
    arrayJogador.push(comprarCarta(), comprarCarta())
    arrayComputador.push(comprarCarta(), comprarCarta())
    const usuario = arrayJogador.map(({ valor, texto }) => {
        return {
            valor: Number(valor),
            mensagem: texto
        }
    })
    const computador = arrayComputador.map(({ valor, texto }) => {
        return {
            valor: Number(valor),
            mensagem: texto
        }
    })
    let textoUsuario = usuario[0].mensagem + " " + usuario[1].mensagem
    let resultadoUsuario = usuario[0].valor + usuario[1].valor
    let textoComputador = computador[0].mensagem + " " + computador[1].mensagem
    let resultadoComputador = computador[0].valor + computador[1].valor

    let confirmar = () => {
        confirm(`Suas cartas são ${textoUsuario}. A carta revelada do computador é ${computador[0].mensagem}.`)

        if ('Deseja comprar mais uma carta?`') {
            //
        }
    }
    confirmar()
}