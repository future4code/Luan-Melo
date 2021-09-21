const taskAdd = (array) => {
  const addTask = process.argv[2];
  array.push(addTask);
  return array;
};

const timeMessage = () => {
  let time = setTimeout(() => {
    console.log(taskAdd(["Lavar a louça"]));
  }, 1000);
  return () => {
    if (time) clearTimeout(time);
  };
};

console.log("Tarefa Adicionado com Sucesso");
timeMessage();
