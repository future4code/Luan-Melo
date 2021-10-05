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

IMAGEM: estrutura do banco de dados
https://i.imgur.com/Eka17rp.jpeg

QUERY Utilizadas:
```
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `nickname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`users_tasks` (
  `id` INT NOT NULL,
  `id_users` INT NOT NULL,
  `id_tasks` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_staks_1_idx` (`id_users` ASC) VISIBLE,
  INDEX `fk_users_staks_2_idx` (`id_tasks` ASC) VISIBLE,
  CONSTRAINT `fk_users_staks_1`
    FOREIGN KEY (`id_users`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_staks_2`
    FOREIGN KEY (`id_tasks`)
    REFERENCES `mydb`.`tasks` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB


CREATE TABLE IF NOT EXISTS `mydb`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `limiteDate` DATE NOT NULL,
  `id_user_creator` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_creator_1_idx` (`id_user_creator` ASC) VISIBLE,
  CONSTRAINT `user_id_creator_1`
    FOREIGN KEY (`id_user_creator`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
```
