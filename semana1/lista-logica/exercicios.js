// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A

function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(1, 2))
console.log(soma(4, 5))

// EXERCÍCIO 0B

function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')
    console.log(mensagem)
}
imprimeMensagem()


// // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// // EXERCÍCIO 01

function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const altura = Number(prompt('Altura: '))
    const largura = Number(prompt('Largura: '))
    console.log(altura * largura)
}
console.log(calculaAreaRetangulo())

// // EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui
    const anoAtual = Number(prompt('Ano Atual:'))
    const anoNascimento = Number(prompt('Ano de Nascimento: '))
    console.log(anoAtual - anoNascimento)

}

// imprimeIdade()
// // EXERCÍCIO 03
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
    return peso / (altura * altura)

}
console.log(calculaIMC(85, 1.8))

// // EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    const nome = prompt('Nome: ')
    const idade = Number(prompt('Idade: '))
    const email = prompt('Email: ')
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
        // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}
// imprimeInformacoesUsuario()
// // EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    const cor1 = prompt('Primeira cor: ')
    const cor2 = prompt('Segunda cor: ')
    const cor3 = prompt('Terceira cor: ')
    const array = [cor1, cor2, cor3]
    console.log(array)

}
imprimeTresCoresFavoritas()

// // EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
    return string.toUpperCase()

}
console.log(retornaStringEmMaiuscula('oi'))

// // EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    return custo / valorIngresso

}
console.log(calculaIngressosEspetaculo(3000, 100))

// // EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    return (string1.length == string2.length)
}

// // EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
    return array[0]
}

// // EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    return array[array.length - 1]
}

// // EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    const arr = array[0]
    array[0] = array[array.length - 1]
    array[array.length - 1] = arr
    return array

}

// console.log(trocaPrimeiroEUltimo([1, 2, 3]))

// // EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    return string1.toUpperCase() == string2.toUpperCase()

}

// // EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui
    const anoAtual = Number(prompt('Ano Atual: '))
    const anoNascimento = Number(prompt('Ano Nascimento: '))
    const anoEmissao = Number(prompt('Ano Emissão: '))
    const idadeResult = anoAtual - anoNascimento
    const tempoDeEmissao = anoAtual - anoEmissao
    const resultFinal = (idadeResult <= 20 && tempoDeEmissao >= 5) || (idadeResult > 20 && idadeResult <= 50 && tempoDeEmissao >= 10) || (idadeResult > 50 && tempoDeEmissao >= 15)
    console.log(resultFinal)

}
checaRenovacaoRG()
    // // EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
    const anoBi = ano % 400 === 0;
    const anoBiCalc = ano % 4 === 0 && !(ano % 100 === 0 && !anoBi);
    return anoBiCalc

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
    const maior = prompt('Tem mais de 18 anos?: ')
    const escolaridade = prompt('Completou o ensino médio? :')
    const disponibilidade = prompt('Você possuí disponibilidade? :')
    aptoLabenu = (maior.includes('sim') && escolaridade.includes('sim') && disponibilidade.includes('sim'))
    console.log(aptoLabenu)
}