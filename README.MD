# REGEX

## Para rodar a aplicação

- navegue até a raiz do projeto e digite o comando
- npm install
- nodemon app
- é possível alterar a porta em __app.js__

## __Sobre o projeto__

- Neste projeto você encontrará exemplos do uso de REGEX.

## O QUE É E PRA QUE SERVE UMA REGEX?

- Reguex é um tipo de linguagem informal que serve pra identificar padrões de caracteres dentro de um texto, pode identificar trechos de texto específico, datas em formulários, e-mails, validações etc...

## EXEMPLOS

- __\d__ Representa dígitos numericos

- __{n}__ Permite que uma cadeia de dígitos seja repetida n vezes. ex: {2} duas vezes, {3} tres vezes.

- __?__ Verifica se o caracter anterior ao (?) pode ou não existir, tornando o mesmo opcional ou não.

- __\\.__ Para escapar caracteres especiais é necessário colocar uma barra invertida

- __[]__ Utilizado para representar a entrada e um único caracter. Ex: __[abc]__ só será permitido a entrada de um destes caracteres digitados uma única vez. (a ou b ou c).

- __+__ Permite repetições de caracteres, com a condição de existir pelo menos 1 vez. Ex: [abcdefghijklmnopqrstuvxz]+

- __[a-z]__ O hífen Cria um intervalo entre a letra A e Z podendo assim definir a entrade de qualquer dígito existente entre eles. obs [a-ZA-Z] permitirá letras maiúsculas.

- __\\w__ Representa todas as letras, incluindo dígitos e caracteres especiais

- __*__ Aceita qualquer número de caracteres ou nenhum podendo verificar zero ou mais vezes.

- __()__ Parênteses são responsáves por agrupar expressões

- __' '__ O caracter de espaço pode ser representado literalmente

- __(){n}__ Permite repetir grupos varias vezes: ex: (/d){2}

- __|__ Representa OU / OR em um padrão
