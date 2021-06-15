//-----------------------------------------------------------------------------------
//                          Exercícios de interpretação de código
//-----------------------------------------------------------------------------------

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // true && false = false

// resultado = bool1 && bool2 && bool3 // true && false && true = false
// console.log("b. ", resultado)
//
// resultado = !resultado && (bool1 || bool2) // true
// console.log("c. ", resultado)
//
// console.log("d. ", typeof resultado) // boolean

//-----------------------------------------------------------------------------------
//                          Exercícios de interpretação de código
//-----------------------------------------------------------------------------------

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// const soma = primeiroNumero + segundoNumero
// console.log(soma)

//-----------------------------------------------------------------------------------
//                                  Solução
// converter as variáveis para tipo Number, utilizando da seguinte maneira
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite um numero!"))
// assim o prompt que é do tipo string, retornará o valor conforme digitado
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
//                            Exercícios de escrita de código
//-----------------------------------------------------------------------------------
//                                     Exercise I
//-----------------------------------------------------------------------------------
// const ageFirstUser = Number(prompt('write the first age: '))
// const ageSecondUser = Number(prompt('write the second age: '))

// console.log('is your age older than your friend?: ', ageFirstUser > ageSecondUser)
//-----------------------------------------------------------------------------------
//                                     Exercise II
//-----------------------------------------------------------------------------------
// const evenNumber = Number(prompt('write an even number'))
// const restDivision = (evenNumber % 2)
// console.log(restDivision)
//-----------------------------------------------------------------------------------
//                                    COMENTÁRIO
//      O resto da divisão de qualquer número parar por 2 me retornou o resto 0
//      O resto da divisão dos números ímpares por 2 me retornou o resto 1
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//                                     Exercise III
//-----------------------------------------------------------------------------------
// const birthDate = Number(prompt('enter the year of your birth'))
// console.log('user age in months', birthDate * 12, '\nuser age in days', birthDate * 365, '\nuser age in hours', birthDate * 8766)
//-----------------------------------------------------------------------------------
//                                     Exercise IIII
//-----------------------------------------------------------------------------------
// const firstNumber = Number(prompt('write the first number'))
// const secondNumber = Number(prompt('write the second number'))
// console.log('is the first number greater than the second?', firstNumber > secondNumber)
// console.log('is the first number equal to the second?', firstNumber == secondNumber)
// console.log('is the first number divisible by the second?', firstNumber % secondNumber == 0)
// console.log('is the second number divisible by the first?', secondNumber % firstNumber == 0)