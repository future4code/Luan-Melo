console.log('Boas vindas ao jogo de Blackjack!')

if (confirm('Quer iniciar uma nova rodada: ?')) {
    const arrayJogador = []
    const arrayComputador = []
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
    console.log(`Usuário - cartas: ${textoUsuario} - pontuação ${resultadoUsuario}`)
    console.log(`Computador - cartas: ${textoComputador} - pontuação ${resultadoComputador}`)
    if (resultadoUsuario > resultadoComputador || resultadoUsuario === 21) {
        console.log('O jogador ganhou!')

    } else if (resultadoComputador > resultadoUsuario || resultadoComputador === 21) {
        console.log('O Computador ganhou!')
    } else {
        console.log('deu Empate!!!')
    }

}