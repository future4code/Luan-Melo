// Exercícios de interpretação de código

//Ex1:

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]

// const novoArrayA = usuarios.map((item, index, array) => {
//     console.log(item, index, array)
// })

// O que vai ser impresso no console?
// Retorna 3 arrays, mostrando os items, índice e a array

//Ex2:
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//     return item.nome
// })

// console.log(novoArrayB)
//a) O que vai ser impresso no console?
// vai ser impreso no console, uma array com os nomes[Amanda Rangel, Laís Petra, Letícia Chijo]

//Ex3:
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

//O que vai ser impresso no console? 
// Será impreso somente os apelidos diferentes de "Chijo"

//Exercícios de escrita de código

//Ex1:
//A)
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const retornarPets = pets.map((item) => {
    return item.nome
})

// console.log(retornarRaca)
//B)

const retornarRaca = pets.filter((item) => {
    return item.raca === 'Salsicha'
})

// C
const retornarMensagemPet = pets.filter(({ raca }) => {
    return raca === 'Poodle'
})

const retornarArrayPat = retornarMensagemPet.map(({ nome }) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nome}`
})

//Ex2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//A )
const filtarNome = produtos.map((item) => {
    return item.nome
})

// B)
const filtrarNomePreco = produtos.map(({ nome, preco }) => {
        return {
            nome: nome,
            preco: (preco - preco * 0.5).toFixed(2).replace('.', ',')
        }
    })
    //C)
const bebidas = produtos.filter((bebida) => {
    return bebida.categoria === 'Bebidas'
})

//D)

const palavraYpe = produtos.filter((item) => {
    return item.nome.includes('Ypê')
})

//E)
const arrayDeFrases = palavraYpe.map(({ nome, preco }) => {
    return `Compre ${nome} por ${preco}`
})