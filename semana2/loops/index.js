//Exercícios de interpretação de código 

// let valor = 0
// for (let i = 0; i < 5; i++) {
//     valor += i
// }
// console.log(valor)

// uma contagem, até 5, e incrementando o valor de i na variável i, que retornará o valor 10


// EX2:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//         console.log(numero)
//     }
// }
//O que vai ser impresso no console?
//A) os valores da lista maiores do quê 18, que são, [19, 21, 23, 25, 27, 30]
//B) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Sim, ele é o suficiente, utilizando o indexOf(num), ele retornaria o índice de cada elemento dentro da array

//Ex3
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while (quantidadeAtual < quantidadeTotal) {
//     let linha = ""
//     for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//         linha += "*"
//     }
//     console.log(linha)
//     quantidadeAtual++
// }

// retornaria 4 linhas, cada uma delas representaria um valor em asteriscos, sendo assim, a quarta linha com o retorno de quatro asteriscos

//Exercícios de escrita de código

//EX1:

// function nomePets() {
//     let array = []
//     let bichos = Number(prompt('Quantos bichos de estimação, você possuí?'))
//     if (bichos <= 0) {
//         console.log('ERROR:')
//     } else {
//         while (array.length !== bichos) {
//             let nomeDoPet = prompt('Nome do pet:')
//             array.push(nomeDoPet)
//         }
//     }
//     console.log(array)
// }
// nomePets()

//EX2:
//A)
const array_original = [10, 5, 6, 16, 29, 40]

// const imprimirValores = () => {

//     for (let i = 0; i < array_original.length; i++) {
//         console.log(array_original[i])
//     }
// }
// imprimirValores()
//B)

// const imprimeValorDivididoPorDez = () => {
//     for (num of array_original) {
//         let valor = num / 10
//         console.log(valor)
//     }
// }
// imprimeValorDivididoPorDez()

// C)
// const novaArray = (array) => {
//     let arr = []
//     for (let i = 0; i < array_original.length; i++) {
//         if (array_original[i] % 2 === 0) {
//             let arrayNova = array[i]
//             arr.push(arrayNova)
//         }
//     }
//     return arr
// }
// console.log('NovaARRAY:', novaArray(array_original))
//
//D)

// const array_string = ['Luan', 'Marcos', 'Vinicius', 'Lucas', 'Tiago']
// const novaArrayStrings = (arrayString) => {
//     const lista = []
//     for (let i = 0; i < arrayString.length; i++) {
//         lista.push(`o elemento do índice ${arrayString.indexOf(arrayString[i])} é ${arrayString[i]}`)
//     }
//     return lista
// }

// console.log(novaArrayStrings(array_string))
//E)
// const maiorEMenorNumero = (arrayDeNumeros) => {
//     let maiorNumero = 0
//     let menorNumero = 0
//     for (let i = 0; i < arrayDeNumeros.length - 1; i++) {
//         const valorMaximo = arrayDeNumeros[i]
//         if (i === 0) {
//             maiorNumero = menorNumero = valorMaximo
//         }
//         if (valorMaximo > maiorNumero) {
//             maiorNumero = valorMaximo
//         }
//         if (valorMaximo < menorNumero) {
//             menorNumero = valorMaximo
//         }
//     }
//     console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
// }

// maiorEMenorNumero([80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55])


// desafio

const comidas = ['Arroz', 'Feijão', 'Frango']
const arrayComidas = comidas.map((item) => {
    return item
});

console.log