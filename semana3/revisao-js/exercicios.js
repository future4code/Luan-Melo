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
function retornaNumerosParesElevadosADois(array) {
    const resultado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultado.push(array[i] ** 2)
        }
    }
    return resultado
}
// retornaNumerosParesElevadosADois([1, 2, 3, 4, 5, 6])

// // EXERCÍCIO 03
function retornaNumerosPares(array) {
    const novaArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            novaArray.push(array[i])
        }
    }
    return novaArray
}

// // EXERCÍCIO 04
function retornaMaiorNumero(array) {
    let maior = 0
    for (let i = 0; i < array.length; i++) {
        let maiorNumero = array[i]
        if (maiorNumero > maior) {
            maior = maiorNumero
        }
    }
    return maior
}
// retornaMaiorNumero(array)

// // EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    return array.length
}

// // EXERCÍCIO 06
function retornaExpressoesBooleanas() {
    return [false, false, true, true, true]
}

// console.log(retornaExpressoesBooleanas())
// // EXERCÍCIO 07
function retornaNNumerosPares(n) {
    const arrayPares = []
    for (let i = 0; i < n * 2; i++) {
        if (i % 2 === 0) {
            arrayPares.push(i)
        }
    }
    return arrayPares
}

// // EXERCÍCIO 08
function checaTriangulo(a, b, c) {
    // return 'Escaleno'
    // return 'Equilátero'
    // return 'Isósceles'
    if (a === b && a === c && b === c) {
        return 'Equilátero'
    } else if (a !== b && c !== a) {
        return 'Escaleno'
    } else {
        return 'Isósceles'
    }
}
// console.log(checaTriangulo(4, 2, 4))

// // EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
    // Formato do objeto a ser retornado:
    // {
    //   maiorNumero: X,
    //   maiorDivisivelPorMenor: Y,
    //   diferenca: Z
    // }
    let maior = 0
    let menor = 0
    let divisivel = false

    if (num1 > num2) {
        maior = num1
        menor = num2
    } else {
        maior = num2
        menor = num1
    }
    if (maior % menor === 0) {
        divisivel = true
    }
    let diferencaDeNumeros = maior - menor
    return {
        maiorNumero: maior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: diferencaDeNumeros
    }
}

// // EXERCÍCIO 10
function segundoMaiorEMenor(array) {
    const novaArray = []
    let maiorValor
    let menorValor
    let segundoMaiorValor
    let segundoMenorValor
    let guardaPosicaoMaior
    let guardaPosicaoMenor
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            maiorValor = menorValor = array[i]
            guardaPosicaoMaior = guardaPosicaoMenor = i
        }
        for (let k = 0; k < array.length; k++) {
            if (array[k] > maiorValor) {
                maiorValor = array[k]
                guardaPosicaoMaior = k
            }
            if (array[k] < menorValor) {
                menorValor = array[k]
                guardaPosicaoMenor = k
            }
        }
    }
    let firstRun = true
    for (let i = 0; i < array.length; i++) {
        if (i != guardaPosicaoMaior && i != guardaPosicaoMenor) {
            if (firstRun) {
                segundoMaiorValor = segundoMenorValor = array[i]
                firstRun = false
            }
            for (let k = 0; k < array.length; k++) {
                if (array[k] > segundoMaiorValor && k !== guardaPosicaoMaior) {
                    segundoMaiorValor = array[k]
                }
                if (array[k] < segundoMenorValor && k !== guardaPosicaoMenor) {
                    segundoMenorValor = array[k]
                }
            }
        }
    }

    if (array.length <= 2) {
        novaArray.push(menorValor)
        novaArray.push(maiorValor)
    } else {
        novaArray.push(segundoMaiorValor)
        novaArray.push(segundoMenorValor)
    }
    return novaArray
}
console.log(segundoMaiorEMenor([1]))


// // EXERCÍCIO 11
function ordenaArray(array) {
    return array.sort((a, b) => a - b)
}
// console.log(ordenaArray([36, 12, 56, 7, 3]))

// // EXERCÍCIO 12

// function filmeFavorito() {
//     return {
//         nome: 'O Diabo Veste Prada',
//         ano: 2006,
//         diretor: 'David Frankel',
//         atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']

//     }
// }

// // EXERCÍCIO 13
const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
}

function imprimeChamada() {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
        // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}
// console.log(imprimeChamada())
// // EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
    return {
        largura: lado1,
        altura: lado2,
        perimetro: (2 * (lado1 + lado2)),
        area: (lado1 * lado2)
    }
}

const pessoa = {
        nome: "Astrodev",
        idade: 25,
        email: "astrodev@labenu.com.br",
        endereco: "Rua do Futuro, 4"
    }
    // // EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
    return {...pessoa,
        nome: 'ANÔNIMO',
        idade: pessoa.idade,
        email: pessoa.email,
        endereco: pessoa.endereco
    }
}
// anonimizaPessoa(pessoa)



// // EXERCÍCIO 16A
const array = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]

function maioresDe18(arrayDePessoas) {
    const maiorDeIdade = arrayDePessoas.filter((item) => {
        return item.idade >= 18
    })
    const resultadoDaIdade = maiorDeIdade.map(({ nome, idade }) => {
        return { nome, idade }
    })
    return resultadoDaIdade
}

// // EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
    const menorDeIdade = arrayDePessoas.filter((item) => {
        return item.idade < 18
    })
    const resultadoDaIdade = menorDeIdade.map(({ nome, idade }) => {
        return { nome, idade }
    })
    return resultadoDaIdade
}

// // EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
    let novaArray = []
    for (let item of array) {
        novaArray.push(item * 2)
    }
    return novaArray
}

// // EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
    let novaArray = []
    for (let item of array) {
        let salvarValor = item * 2
        novaArray.push(salvarValor)
    }
    return `${novaArray}`
}

// // EXERCÍCIO 17C
function verificaParidade(array) {

}


const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8 },
        { nome: "João", idade: 20, altura: 1.3 },
        { nome: "Pedro", idade: 15, altura: 1.9 },
        { nome: "Luciano", idade: 22, altura: 1.8 },
        { nome: "Artur", idade: 10, altura: 1.2 },
        { nome: "Soter", idade: 70, altura: 1.9 }
    ]
    // // EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
    const montanhaRussaDoTerror = pessoas.filter((item) => {
        return (item.altura > 1.5 && item.idade > 14 && item.idade < 60)
    })
    const montanhaRussaAutorizados = montanhaRussaDoTerror.map((nome) => {
        return nome
    })
    return montanhaRussaAutorizados
}

// // EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
    const montanhaRussaDoTerrorDois = pessoas.filter((item) => {
        return (item.altura < 1.5 || item.idade <= 14 || item.idade >= 60)
    })
    const montanhaRussaNaoAutorizados = montanhaRussaDoTerrorDois.map((nome) => {
        return nome
    })
    return montanhaRussaNaoAutorizados
}
const consultas = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

// // EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
    // const ordernarPorNome = consultasNome.map(({ nome, dataDaConsulta }) => {
    //     return { nome, dataDaConsulta }
    // }).sort()
    // return ordernarPorNome
}


// // EXERCÍCIO 19B
// function ordenaPorData(consultasData) {

// }

// // EXERCÍCIO 20
// function calculaSaldo(contas) {

// }