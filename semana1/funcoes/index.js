//----------------------------------------------------------------------------------
//                         Exercícios de interpretação de código
//----------------------------------------------------------------------------------

// function minhaFuncao(variavel) {
//     return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
//----------------------------------------------------------------------------------
//A) O que vai ser impresso no console?
// Resultado = 10 e 50
//
//B) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a 
//função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// Resultado = ele iria executar a função, porém não iria retornar o resultado impreso
// no console
//----------------------------------------------------------------------------------
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
//     return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//----------------------------------------------------------------------------------
//A) Essa função, pede para o usuário inserir um texto, ele transforma todo o texto
//Em caixa baixa, e procura no texto a palavra cenoura, se encontrar retorna um true
//Se não, retorna um false

//B) I - Retornaria True, pois ele encontrou a palavra cenoura
// II - Retornaria True, pois ele iria transformar toda a frase em lowerCase e depois
// procurar pela palavra cenoura
// III - Retornaria True, pois ele encontra a palavra cenoura, mesmo que a palavra possua
// mais caracteres, ou esteja no plural
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//                          Exercícios de escrita de código
//----------------------------------------------------------------------------------
// Exercício Nr1
//----------------------------------------------------------------------------------
// function informacaoSobreMim() {
//     console.log('Eu sou Luan, tenho 22 anos, moro em Cruz Das Almas e sou estudante.')
// }
// informacaoSobreMim()
// function informacaoSobreOutraPessoa(nome, idade, cidade, profissao) {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, sou ${profissao}`)
// }

// console.log(informacaoSobreOutraPessoa("Luan", 22, "Cruz Das Almas", "Estudante"))
//----------------------------------------------------------------------------------
// Exercício Nr2
//----------------------------------------------------------------------------------
// const somaDoisNumeros = function(numeroUm, numeroDois) {
//     return numeroUm + numeroDois
// }
// console.log(somaDoisNumeros(10, 5))

// Receber dois números e retornar um boleano

// const recebeDoisNumeros = function(numeroUm, numeroDois) {
//     return numeroUm >= numeroDois
// }
// console.log(recebeDoisNumeros(3, 3))

// const numeroPar = function(numero) {
//     const par = (numero % 2 == 0)
//     return `O número ${numero} é par? ${par}`
// }
// console.log(numeroPar(5))

// const tamanhoDaMensagem = function(mensagem) {
//     return `A mensagem Inserida foi, ${mensagem.toUpperCase()} e o tamanho dela é de ${mensagem.length} caracteres`
// }
// console.log(tamanhoDaMensagem('Você é um problema sério, viu!'))

//----------------------------------------------------------------------------------
// Exercício Nr3
//----------------------------------------------------------------------------------
// let somarNumeros = (numero1, numero2) => {
//     return numero1 + numero2
// }

// let subtrairNumeors = (numero1, numero2) => {
//     return numero1 - numero2
// }

// let multiplicarNumeros = (numero1, numero2) => {
//     return numero1 * numero2
// }

// let dividirNumeros = (numero1, numero2) => {
//     return numero1 / numero2
// }

// const numerosInserido1 = Number(prompt('Digite o primeiro valor'))
// const numerosInserido2 = Number(prompt('Insira o segundo valor: '))

// console.log('Soma:', somarNumeros(numerosInserido1, numerosInserido2))
// console.log('Diferença:', subtrairNumeors(numerosInserido1, numerosInserido2))
// console.log('Multiplicação:', multiplicarNumeros(numerosInserido1, numerosInserido2))
// console.log('Divisão:', dividirNumeros(numerosInserido1, numerosInserido2))

//----------------------------------------------------------------------------------
//                                  DESAFIO
//----------------------------------------------------------------------------------

// let imprimirParamentro = (parametro) => {
//     console.log(parametro)
// }

// // imprimirParamentro('Luan é muito lindo')

// let recebeDoisValores = (valor1, valor2) => {
//     return valor1 + valor2
// }

// imprimirParamentro(recebeDoisValores(5, 10))

//----------------------------------------------------------------------------------
// Desafio Nr2
//----------------------------------------------------------------------------------

// function teoremaPit(catOposto, catAdjacente) {
//     let catetoA = catOposto
//     let catetoB = catAdjacente
//     let hipot = (catetoA * catetoA) + (catetoB * catetoB)
//     return Math.sqrt(hipot)
// }

// console.log(teoremaPit(15, 15))