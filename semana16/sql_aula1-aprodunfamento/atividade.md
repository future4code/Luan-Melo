### Exercício 1

```sql
a) ALTER TABLE Actor DROP COLUMN salary; - altere a tabela Actor e derrube a coluna salário, então a coluna salário vai ser removida da tabela Actor.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); - altere a tabela Actor e troque o genêro por sexo do tipo VARCHAR(6) que recebe 6 caracteres de limite.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255) - ALtere a tabela Actor e troque o genêro pelo gênero do tipo VarCHAR(255) que recebe 255 caracteres.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100)

```

### Exercício 2

```sql
a) UPDATE Actor SET name = "Luan Melo", birth_date = CURDATE() WHERE id = "003";

b) UPDATE Actor SET name= UPPER(name) WHERE name = "Juliana Paes"
UPDATE Actor SET name= "Juliana Paes" WHERE name = "JULIANA PAES"

c) UPDATE Actor SET name = "Marcos Vinicius", salary = 300000, birth_date="2004-03-23", gender="male" WHERE id = 005

```

### Exercício 3
```sql
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro" 

b) DELETE FROM Actor WHERE gender="male" and salary>1000000;

```

### Exercício 4
```sql
a) SELECT MAX(salary) FROM Actor; 

b) SELECT gender FROM Actor WHERE gender="female";

c) SELECT * FROM Actor WHERE gender="female";

d) SELECT SUM(salary) FROM Actor;
```

### Exercício 5
```sql
a) SELECT COUNT(*), gender
FROM Actor
GROUP BY gender - me retorna a quantidade de cada gênero e o nome do gênero.

b) SELECT * FROM Actor ORDER BY salary;

c) SELECT id, name FROM Actor WHERE gender="male" ORDER BY name DESC;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

```

### Exercício 6

```sql
a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE evaluation evaluation FLOAT;

INSERT INTO Movie(id, name, synopsis, date_to_throw, evaluation) 
VALUES(30, "Harry Potter", "Ordem Da fênix", "2000-05-05", 8.5)

c) 

```