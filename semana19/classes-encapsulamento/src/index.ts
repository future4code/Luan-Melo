import { bank, user } from "./UserAccount";

console.log("Hello, world!");

// 1 - A:
// Para que serve o construtor dentro de uma classe:
// R = podem ser usados para suportar a inicialização de valores internos da classe durante a declaração de objetos.
// como fazemos para chamá-lo?
// R = constructor(argumentos) { ... }

//1 - b

// a mensagem Chamando o construtor da classe UserAccount vou impressa apenas 1x
// console.log(:user.getName());
console.log("SETVALUE", bank.setValue(10), "VALUE", bank.getValue());

//1 - c
//  Como conseguimos ter acesso às propriedades privadas de uma classe?
// utilizando os métodos públicos, getters e setters.
