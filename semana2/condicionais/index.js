// Exercício de interpretação de código

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//     console.log("Passou no teste.")
// } else {
//     console.log("Não passou no teste.")
// }
//a) Explique o que o código faz. Qual o teste que ele realiza?
// O código verifica se o resto da divisão do número inserido pelo usuário por 2,
// se o seu tipo e o resultado é igual a 0, se for ele passa no teste
// se não for, ele não passa teste

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
// todo número que divisível por 2 o resto seja 0

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// todo número que o resto da divisão por 2 seja diferente de 0


// ex: 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//     case "Laranja":
//         preco = 3.5
//         break;
//     case "Maçã":
//         preco = 2.25
//         break;
//     case "Uva":
//         preco = 0.30
//         break;
//     case "Pêra":
//         preco = 5.5
//         break; // BREAK PARA O ITEM c.
//     default:
//         preco = 5
//         break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
// para reduzir a quantidade de if e else encadiado. E retornar o preço de uma fruta
// escolhida pelo usuário

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// Será impreso "O preço da fruta Maça, é, R$ 2.25"

//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O valor da Pêra passaria a ser o valor padrão, ou seja, 5R$, pois ele pularia para o próximo bloco de condição sendo ele o Default

// Ex3:
// const numero = Number(prompt("Digite o primeiro número."))

// if (numero > 0) {
//     console.log("Esse número passou no teste")
//     let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) O que a primeira linha está fazendo?
// a variavel numero está recebendo um valor númerico inserido pelo usuário

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// caso o usuário digite o número 10, o retorno será que esse número passou no teste.
// caso o mesmo digite um valor que seja menor que zero, não será impreso nenhuma mensagem

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// ocorrerá um erro ao executar o código, pois a variavel mensagem, está dentro de um escopo, e o console.log, tenta acessá-lo fora dela.
// isso faz ocorrer um erro de que a variável não foi definida.

// Exercícios de escrita de código

//ex1:
// const idade = Number(prompt('Idade: '))

// if (idade >= 18) {
//     console.log('Você pode dirigir!')
// } else {
//     console.log('Você não pode dirigir!')
// }

//Ex2:
// console.log(`
//     [M] - matutino
//     [V] - Vespertino
//     [N] - Noturno

// `)

// const turno = prompt('Digite ').toLowerCase()

// if (turno === 'm') {
//     console.log('Bom Dia!')
// } else if (turno === 'v') {
//     console.log('Boa Tarde!')
// } else if (turno === 'n') {
//     console.log('Boa Noite!')
// }


// // ex3:

// const turnos = prompt('Digite ').toLowerCase()

// switch (turnos) {
//     case 'm':
//         console.log('Bom Dia!')
//         break
//     case 'v':
//         console.log('Boa Tarde!')
//         break
//     case 'n':
//         console.log('Boa Noite!')
//         break
//     default:
//         console.log('Olá, desejamos um ótimo dia para.')
// }

// ex4:

// const filmeGenero = prompt('escolha um filme')
// const valorIngresso = prompt('valor do ingresso')
// const cinema = {
//     filme: filmeGenero,
//     ingresso: valorIngresso,
//     assistir: false

// }

// const assistirFilme = prompt('você deseja assistir o filme? [S/n]').toLowerCase()
// if (assistirFilme === 's' && cinema.ingresso < 15) {
//     console.log(`foi escolhido pelo usuário o filme ${cinema.filme}, se divirtam.`)
// } else {
//     console.log('Escolha outro filme :(')
// }

// desafios

// Desafio 01:
// const filmeGenero = prompt('escolha um filme')
// const valorIngresso = prompt('valor do ingresso')
// const cinema = {
//     filme: filmeGenero,
//     ingresso: valorIngresso,
//     lanche: ['pipoca', 'chocolate', 'doces']

// }

// const assistirFilme = prompt('você deseja assistir o filme? [S/n]').toLowerCase()
// if (assistirFilme === 's' && cinema.ingresso < 15) {
//     const lancheCinema = prompt('qual lanche para acompanhar no filme?')
//     if (lancheCinema === cinema.lanche[0] || lancheCinema === cinema.lanche[1] || lancheCinema === cinema.lanche[2]) {
//         console.log(`foi escolhido pelo usuário o filme ${cinema.filme}, aproveite o seu lanche ${lancheCinema}.`)
//     } else {
//         console.log('Esse lanche não faz parte da nossa lista!')
//     }
// } else {
//     console.log('Escolha outro filme :(')
// }

// Desafio 02:

// const nomePessoa = prompt('Nome completo: ').toLowerCase()
// const tipoDeJogo = prompt('Tipo de jogo: [IN/DO]').toUpperCase()
// const etapaDoJogo = prompt('Etapa do jogo: [SF/DT/FI]').toUpperCase()
// const categorias = Number(prompt('Categoria [1,2,3,4]'))
// const valorIngresso = Number(prompt('Quantidade de ingressos'))

// const jogo = [
//     { categoria: 1320 },
//     { categoria: 880 },
//     { categoria: 550 },
//     { categoria: 220 },
// ]

// const nacional = () => {
//     if (tipoDeJogo === 'DO' && jogo[categorias]) {
//         return jogo[categorias - 1]
//     }
// }
// console.log(nacional())

// terminar depois