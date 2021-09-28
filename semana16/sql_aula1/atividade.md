### Exercício 1

a)

```sql
 id(varchar) - id: é o indentificador primário do usuário que utilizar o tipo varchar que pode conter letras ou números. Com um limite de 255 caracteres e o campo não pode ser nulo


 name(varchar) - name: é o nome do usuário e recebe o mesmo tipo do id, podendo conter letras e números com um limite de 255 caracteres e o campo não pode ser nulo

 salary(float) - é do tipo flutuante e recebe o salário informado, o seu tipo float recebe o número fracionado ex: 3.2, 4.50000, 45.000  o seu campo não pode ser nulo


 birth_date(date) - a data de nascimento do usuário, e o campo não pode ser nulo.


 gender(VARCHAR) - é o Gênero sexual do usuário, com limite de 6 caracteres e o campo não pode ser nulo

```

b)

```sql
    o comando SHOW DATABASES - como já diz o nome, serve para visualizar a base de dados, a resposta que eu obtive foi do meu schema com o banco de dados que estou utilizando.

    o comando SHOW TABLES - ele me retorna as tabelas existente no meu banco de dados.

```

c)

```sql
    DESCRIBE Actor - esse comando me retornou a estrutura da tabela Actor com os tipos de cada coluna.

```

### Exercício 2

a)

1. Feito Execute Sucesss:
   2.Error: Entrada duplicada '002' para a chave 'PRIMARY' - o Erro já diz tudo, que tentou duplicar uma chave primaria com mesmo valor.

3.C: Column count doesn't match value count at row 1 - O erro diz que a contagem de coluna não condiz com a quantidade de valores passado, ou seja, passou valores, mas está faltando os parâmetros que as recebem, no caso. A data de nascimento e o gênero não foram passados na linha 1.

3.D: Field 'name' doesn't have a default value - O erro diz que o campo nome não tem um valor padrão, ou seja, que o campo não pode ser nulo.

3.E: Incorrect date value: '1950' for column 'birth_date' at row 1 - O erro diz que o valor que foi passado é incorreto, ou seja, é necessário passar no formato de string "1998-07-10", para que o sql entenda, pois caso seja passado fora de string, ele vai entende somente os primeiros números antes do hifen.

```sql
Soluções:

C.
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);

D.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Luan Lindo",
  400000,
  "1949-04-18",
  "male"
);

E.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);

```

### Exercício 3

```sql
a) SELECT * FROM Actor WHERE gender ="female"

b) SELECT salary FROM Actor WHERE name ="Tony Ramos"

c) SELECT * FROM Actor WHERE gender ="invalid" - retorna apenas as colunas sem valores.

d) SELECT id, name, salary FROM Actor WHERE salary BETWEEN 0 and 500000;

e) SELECT id, nome from Actor WHERE id = "002" -   Unknown column 'nome' in 'field list' - foi passado um nome desconhecido na nossa lista de campo, o nome certo seria o mesmo que foi inserido na nossa tabela: name.

e a query correta ficaria

SELECT id, name from Actor WHERE id = "002"

```

### Exercício 4

```sql
a) seleciona todos os atores e atrizes com o * em Actor onde a letra inicial do nome seja A ou/or J dentro de parenteses para evitar que a lógica fique errada, e depois o operado and que quer que as duas condições sejam verdadeiras.

b) SELECT * FROM Actor
WHERE  name NOT LIKE "A%" AND NOT salary > 300000

c) SELECT * FROM Actor
WHERE  (name LIKE "&G%" OR name LIKE "%g%")

d) SELECT * FROM Actor
WHERE  (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 and  900000


```

### Exercício 5

```sql

a) QUERY:

    CREATE TABLE films(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis VARCHAR(255) NOT NULL,
    date_to_throw DATE NOT NULL,
	evaluation INT NOT NULL
);

b) QUERY:
    INSERT INTO films(id, name, synopsis, date_to_throw, evaluation)
    VALUES("001", "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7)

c) QUERY:
    INSERT INTO films(id, name, synopsis, date_to_throw, evaluation)
    VALUES("002", "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10)

d) QUERY:
    INSERT INTO films(id, name, synopsis, date_to_throw, evaluation)
    VALUES("003", "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
 8)

 e) QUERY:
    INSERT INTO films(id, name, synopsis, date_to_throw, evaluation)
    VALUES("004", "Tropa de elite",
    "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. ",
    "2007-10-05",
    4)

```

### Exercício 6

```sql
a) SELECT id, name, evaluation FROM films WHERE id = "002";

b) SELECT name, evaluation FROM films WHERE name = "Doce de mãe";

c) SELECT id, name, synopsis FROM films WHERE evaluation >= 7;


```

### Exercício 7

````sql
a) SELECT *  FROM films WHERE name LIKE("%vida%");

b) SELECT * FROM films WHERE name LIKE "%elite%" OR
    synopsis LIKE "%mulher";

c) SELECT * FROM films WHERE date_to_throw < "2021-09-27";

d) SELECT * FROM films WHERE date_to_throw < "2021-09-27"   AND (name LIKE "%elite%" OR
    synopsis LIKE "%mulher") AND evaluation >= 7

```
````
