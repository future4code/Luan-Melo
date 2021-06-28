// EXERCÍCIO 01

function inverteArray(array) {
    let newArray = []
    const tam = array.length
    for (let i = 0; i < tam; i++) {
        newArray[tam - (i + 1)] = array[i]
    }
    return newArray
}
// console.log(inverteArray([0, 8, 23, 16, 10, 15, 41, 12, 13]))

// // EXERCÍCIO 02
// function retornaNumerosParesElevadosADois(array) {
//     const resultado = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             resultado.push(array[i] ** 2)
//         }
//     }
//     return resultado
// }
// retornaNumerosParesElevadosADois([1, 2, 3, 4, 5, 6])

// // EXERCÍCIO 03
// function retornaNumerosPares(array) {
//     const novaArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             novaArray.push(array[i])
//         }
//     }
//     return novaArray
// }

// // EXERCÍCIO 04
// function retornaMaiorNumero(array) {
//     let maior = 0
//     for (let i = 0; i < array.length; i++) {
//         let maiorNumero = array[i]
//         if (maiorNumero > maior) {
//             maior = maiorNumero
//         }
//     }
//     return maior
// }
// retornaMaiorNumero(array)

// // EXERCÍCIO 05
// function retornaQuantidadeElementos(array) {

// }

// // EXERCÍCIO 06
// function retornaExpressoesBooleanas() {

// }

// // EXERCÍCIO 07
// function retornaNNumerosPares(n) {

// }

// // EXERCÍCIO 08
// function checaTriangulo(a, b, c) {
//     // return 'Escaleno'
//     // return 'Equilátero'
//     // return 'Isósceles'
// }

// // EXERCÍCIO 09
// function comparaDoisNumeros(num1, num2) {
//     // Formato do objeto a ser retornado:
//     // {
//     //   maiorNumero: X,
//     //   maiorDivisivelPorMenor: Y,
//     //   diferenca: Z
//     // }
// }

// // EXERCÍCIO 10
// function segundoMaiorEMenor(array) {

// }

// // EXERCÍCIO 11
// function ordenaArray(array) {

// }

// // EXERCÍCIO 12
// function filmeFavorito() {

// }

// // EXERCÍCIO 13
// function imprimeChamada() {
//     // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
// }

// // EXERCÍCIO 14
// function criaRetangulo(lado1, lado2) {

// }

// // EXERCÍCIO 15
// function anonimizaPessoa(pessoa) {

// }

// // EXERCÍCIO 16A
// function maioresDe18(arrayDePessoas) {

// }

// // EXERCÍCIO 16B
// function menoresDe18(arrayDePessoas) {

// }

// // EXERCÍCIO 17A
// function multiplicaArrayPor2(array) {

// }

// // EXERCÍCIO 17B
// function multiplicaArrayPor2S(array) {

// }

// // EXERCÍCIO 17C
// function verificaParidade(array) {

// }

// // EXERCÍCIO 18A
// function retornaPessoasAutorizadas(pessoas) {

// }

// // EXERCÍCIO 18B
// function retornaPessoasNaoAutorizadas(pessoas) {

// }

// // EXERCÍCIO 19A
// function ordenaPorNome(consultasNome) {

// }

// // EXERCÍCIO 19B
// function ordenaPorData(consultasData) {

// }

// // EXERCÍCIO 20
// function calculaSaldo(contas) {

// }