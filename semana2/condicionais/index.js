const nomePessoa = prompt('Nome completo: ')
const tipoDeJogo = prompt('Tipo de jogo: [IN/DO]').toUpperCase()
const etapaDoJogo = prompt('Etapa do jogo: [SF/DT/FI]').toUpperCase()
const categorias = Number(prompt('Categoria [1,2,3,4]'))
const quantidadeDeIngressos = Number(prompt('Quantidade de ingressos'))

const jogo = [{
    etapa: {
        SF: [
            { cat: 1320 },
            { cat: 880 },
            { cat: 550 },
            { cat: 220 },
        ],
        DT: [
            { cat: 660 },
            { cat: 440 },
            { cat: 330 },
            { cat: 170 },
        ],
        FI: [
            { cat: 1980 },
            { cat: 1320 },
            { cat: 880 },
            { cat: 330 },
        ],
    },
    tipoDoJogo: '',
    converte: '',
    valorTotal: '',
    valorIngresso: ''
}]

const tabelaEtapas = () => {
    if (etapaDoJogo === 'SF') {
        return jogo[0].etapa.SF[categorias - 1].cat
    } else if (etapaDoJogo === 'DT') {
        return jogo[0].etapa.DT[categorias - 1].cat
    } else if (etapaDoJogo === 'FI') {
        return jogo[0].etapa.FI[categorias - 1].cat
    }
}

const converterString = () => {
    switch (tipoDeJogo) {
        case 'DO':
            jogo[0].tipoDoJogo = 'nacional'
            jogo[0].valorTotal = `R$ ${(tabelaEtapas() * quantidadeDeIngressos).toFixed(2).replace('.', ',')}`
            jogo[0].valorIngresso = `R$ ${(tabelaEtapas())}`
            break
        case 'IN':
            jogo[0].tipoDoJogo = 'internacional'
            jogo[0].valorIngresso = `U$ ${(tabelaEtapas() / 4.96)}`
            jogo[0].valorTotal = `U$ ${(tabelaEtapas() / 4.96).toFixed(2).replace('.', ',')}`
            break
        default:
    }
    switch (etapaDoJogo) {
        case 'SF':
            jogo[0].converte = 'semi final'
            break
        case 'DT':
            jogo[0].converte = 'terceiro lugar'
            break
        case 'FI':
            jogo[0].converte = 'final'
            break
        default:
    }
}
converterString()

const saidaJogo = () => {
    console.log(`
        ---Dados da compra---
        Nome do cliente: ${nomePessoa}
        Tipo do Jogo: ${jogo[0].tipoDoJogo}
        Etapa do jogo: ${jogo[0].converte}
        Categoria: ${categorias}
        Quantidade de Ingressos: ${quantidadeDeIngressos} ingressos
        ---Valores---
        Valor do ingresso: ${jogo[0].valorIngresso}
        Valor Total: ${jogo[0].valorTotal}
    `)
}
saidaJogo()