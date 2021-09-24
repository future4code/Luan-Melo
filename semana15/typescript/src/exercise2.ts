type Statistic = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]): Statistic {
  const numerosOrdenados = numeros.sort((a: number, b: number) => a - b);
  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: Statistic = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };
  return estatisticas;
}

console.log(obterEstatisticas([1, 2, 9, 3, 6]));

//A) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// entrada, é um array do tipo number, e sua saída é um objeto com 3 propriedades do tipo Number.

//B) Que outras variáveis compõem essa função? Explicite a tipagem de todas elas
// as varíaveis são que compõem essa função é const e let e seus tipos são numbers.

//C)Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type Dados = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => Statistic;
};

