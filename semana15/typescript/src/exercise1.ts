//a - retorna um erro, avisando que o tipo 'número' não pode ser atribuído ao tipo 'string'.
let minhaString: string;
// minhaString = 5

//b - para uma variável aceitar outros tipos, é necessário utilizar o | conhecido como union type, ficando 
// let meunumero: number | string; 


let meuNumero: number;
meuNumero = 5

//c Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.


type personThree = {
    nome: string,
    idade: number,
    corFavorita: string
}

// const luan: personThree = {
//     nome: "Luan",
//     idade: 23,
//     corFavorita:"Azul Bebê"
// }

// const joao: personThree ={ 
//     nome: "João",
//     idade: 27,
//     corFavorita: "vermelho"
// }

// const marina: personThree = {
//     nome: "Marina",
//     idade: 31,
//     corFavorita: "rosa"
// }

// console.log(luan, joao, marina)


//D - Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.
enum people {
    NOME="Luan",
    CORFAVORITA = "azul bebê"
}

const luan: personThree = {
    nome: people.NOME,
    idade: 23,
    corFavorita: people.CORFAVORITA
}

console.log(luan)