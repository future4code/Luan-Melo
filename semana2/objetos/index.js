// // Atividade de interpretação
// //Primeiro:

// const filme = {
//     nome: "Auto da Compadecida",
//     ano: 2000,
//     elenco: [
//         "Matheus Nachtergaele",
//         "Selton Mello",
//         "Denise Fraga",
//         "Virginia Cavendish",
//     ],
//     transmissoesHoje: [
//         { canal: "Telecine", horario: "21h" },
//         { canal: "Canal Brasil", horario: "19h" },
//         { canal: "Globo", horario: "14h" },
//     ],
// };

// // console.log(filme.elenco[0]);
// // console.log(filme.elenco[filme.elenco.length - 1]);
// // console.log(filme.transmissoesHoje[2]);
// // A) - O que vai ser impresso no console?
// // O primeiro Elemento da array elenco, que é Matheus Nachte.. e o último elemento,
// // da  array elenco que é Virginia Cavend...
// // e por último será impreso o índice 2 que da array objeto transmissão printando no console, Globo e Horário

// const cachorro = {
//     nome: "Juca",
//     idade: 3,
//     raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba" }

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o") }

// // console.log(cachorro)
// // console.log(gato)
// // console.log(tartaruga)

// //A) O  que vai ser impresso no console?
// // Juca, Juba e Juco
// //B) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// // Copia uma array ou um objeto

// // function minhaFuncao(objeto, propriedade) {
// //     return objeto[propriedade]
// // }

// // const pessoa = {
// //     nome: "Caio",
// //     idade: 23,
// //     backender: false
// // }

// // console.log(minhaFuncao(pessoa, "backender"))
// // console.log(minhaFuncao(pessoa, "altura"))
// //A) O que vai ser impresso no console?
// // false e undefined
// //B) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// // False e Undefined -- a função tem um retorno de um objeto e faz uma pesquisa direto atráves do
// // ['propriedade']. Sendo assim, o fácil acesso direito a uma das propriedades do objeto.
// // o false foi encontrado pois existe a propriedade backender no objeto e o undefined.
// // foi causado porque não existe no nosso objeto.


// //Exercício de escrita de código
// // Ex1:

// function nomeApelido(objeto) {
//     const pessoaNova = {...objeto,
//         nome: 'Luan',
//         apelidos: ['Luanzinho, Luanzão, Lua']

//     }
//     console.log(`Eu sou ${pessoaNova.nome}, mas pode me chamar de : ${pessoaNova.apelidos}`)
// }

// const pessoa = {
//     nome: "Amanda",
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }
// nomeApelido(pessoa)

// // Ex2:

// const pessoaInformacao = {
//     nome: 'Luan',
//     idade: 22,
//     profissao: 'Desenvolvedor FullStack'
// }

// const pessoaOutraInformacao = {
//     nome: 'Chijo',
//     idade: 27,
//     profissao: 'Desenvolvedora Front-End'
// }

// function recebeObjetos(paramObject) {
//     return [paramObject.nome, paramObject.nome.length, paramObject.idade, paramObject.profissao, paramObject.profissao.length]
// }

// console.log(recebeObjetos(pessoaInformacao))
// console.log(recebeObjetos(pessoaOutraInformacao))

// let array = []
// const frutas = [
//     { nome: 'maça', disponibilidade: true },
//     { nome: 'uva', disponibilidade: true },
//     { nome: 'manga', disponibilidade: true }

// ]

// function carrinhoFrutas(objeto) {
//     //array = {...objeto }
//     return {...objeto }
// }
// array = carrinhoFrutas(frutas)
// console.log(array)

// // Desafios:

// let dados = {
//     nome: prompt('Escreva seu nome:'),
//     idade: Number(prompt('Digite sua idade: ')),
//     profissao: prompt('Sua profissão: '),

// }

// function dadosDoUsuario() {
//     const salveDados = {...dados }
//     console.log(`${salveDados.nome} tem ${salveDados.idade} anos e sua profissão é ${salveDados.profissao}`)
//     console.log(salveDados)
// }
// // dadosDoUsuario()

const filme1 = {
    nome: 'Velozes e furiosos',
    lancamento: 2002,

}
const filme2 = {
    nome: 'Harry Potter',
    lancamento: 2003,

}

function validarData() {

    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.lancamento <= filme2.lancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.lancamento == filme2.lancamento}`)
}
validarData()