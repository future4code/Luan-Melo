// process.argv[0] = //node
// process.argv[1] = //caminho para o arquivo sendo executado
// process.argv[2] = //primeiro argumento
// process.argv[3] = //segundo argumento

// const nameP = process.argv[2];
// const age = Number(process.argv[3]);

// console.log(`Olá, ${nameP}! Você tem ${age} anos.`);

const nameP = process.argv[2];
const age = Number(process.argv[3]);
const nextAge = age + 7;

const nameAndAge = (name, age) => {
  const nameP = name || "";
  const ageP = age || 0;
  let message;
  if (nameP === "") {
    message = `Você deve inserir um nome`;
  } else if (ageP === 0) {
    message = `Você deve inserir uma idade`;
  } else {
    message = `Olá, ${nameP}! Você tem ${age} anos. Em sete anos você terá ${nextAge}`;
  }
  return message;
};

console.log(nameAndAge(nameP, age));
