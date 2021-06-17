//----------------------------------------------------------------------------------
//                                     Exercício
//                         Exercícios de interpretação de código
//----------------------------------------------------------------------------------

// let array
// console.log('a. ', array)

// array vazia vai retornar um undefined

// array = null
// console.log('b. ', array)

// array com valor nulo vai retornar um null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// o console vai retornar o tamanho da array que é 11

// let i = 0
// console.log('d. ', array[i])

// vai retornar o valor da array no índice 0 que é o valor 3

// array[i + 1] = 19
// console.log('e. ', array)

// i que é 0 passa a ser 1 que é a segunda posição do ínce que é o valor 4 que passa
// a ser 19

// const valor = array[i + 6]
// console.log('f. ', valor)

// o índce i que é 0 + 6 passa a ser 9
//----------------------------------------------------------------------------------
//                                     Exercício II
//                         Exercícios de interpretação de código
//----------------------------------------------------------------------------------

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// vai transformar todos os caracteres em maiusculo e trocar toda letra A por I, e no final
// retornar o tamanho da frase
// Subi num ônibus em Marrocos
// SUBI NUM ÔNIBUS EM MIRROCOS

//----------------------------------------------------------------------------------
//                                     Exercício II
//                         Exercícios de escrita de código
//----------------------------------------------------------------------------------
//
// const nome = prompt('Digite o seu nome: ')
// const email = prompt('Digite o seu e-mail: ')

// console.log(`o email ${email} do usúario ${nome} foi cadastrado com sucesso!`)

//----------------------------------------------------------------------------------
//                                     Exercício II
//                         Exercícios de escrita de código
//----------------------------------------------------------------------------------

// const array = ['Macarrão', 'Feijão', 'Frango', 'Lasanha', 'Purê']
// console.log(array)
// console.log(`Essas são as minhas comidas preferidas
// ${array[0]}
// ${array[1]}
// ${array[2]}
// ${array[3]}
// ${array[4]}`)
// const comida = Number(prompt('De 1 a 5 qual a sua comida favorita: ?'))
// console.log('Minha comida favorita é', array[comida - 1])
// array.splice(1, 1, array[comida])
// console.log('ERROR', array)

//----------------------------------------------------------------------------------
//                                     Exercício III
//                         Exercícios de escrita de código
//----------------------------------------------------------------------------------
// let listaDeTarefas = []
// const atividadeI = prompt('Atividade 1:')
// const atividadeII = prompt('Atividade 2:')
// const atividadeIII = prompt('Atividade 3:')
// listaDeTarefas = [atividadeI, atividadeII, atividadeIII]
// console.log(listaDeTarefas)
// let indice = Number(prompt('Digite o índice uma tarefa de 0 a 2'))
// listaDeTarefas.splice((indice - 1), 1)
// console.log('Atualizada:', listaDeTarefas)

//----------------------------------------------------------------------------------
//                                     DESAFIO
// Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
//----------------------------------------------------------------------------------

// const frase = prompt('Digite uma frase: ')
// console.log(frase.trim().split(""))

const array = ['Luan', 'Rafael', 'Cleiton']
console.log(array)