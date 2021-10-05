Projeto não finalizado. Devido ao final de semana voltado a minha religião, não tive tempo para estudar e nem finalizar o projeto como queria. Desde então, fiz o que esteve ao meu alcance e ao meu entendimento.

router.post("/user", createUser);

Usuário pode criar um usuário novo sem precisar informar o id, pois será inserido automaticamente.
seu body é utilizado da seguinte forma

{
"name":"Pantera Negra",
"nickname": "pantera2",
"email": "pantera001@gmail.com"
}

router.post("/task", createTask);

Usuário pode criar uma tarefa passando algumas informações como o seu body informa a baixo.

{
"title": "Comprar xsdasd212",
"description": "Comprar pão.",
"limiteDate": "3/10/2303",
"id_user_creator": 1 -- id do usuário que criou a task
}

router.get("/task/:id", getTasksById);

É possível retornar um usuário com apenas o seu id, útil para pegar informações do usuário.

router.get("/task/:id", getTasksById);

É possível pegar informações da task através do id do usuário, e retornar todas as informações passadas através do JOIN

router.put("/user/edit/:id", userAlterById);

Com esse endpoint, é possível alterar o nome e o nickname de um usuário, passando seu id como parametro utilizando as seguintes informações

{
"name": "Xuxsa", -- novo nome
"nickname": "antsena" -- novo apelido
}
