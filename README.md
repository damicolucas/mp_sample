# Ambiente

Estamos utilizando do ReactJS para a integração com o Mercado Pago
para inicializar o projeto, favor executar 

`npm install`

e logo após 

`npm start`

## Problemas

- Para poder acessar configurações como por exemplo a `bricks` precisamos acessar por meio do `[[Prototype]]` do obj e a mesma coisa acontece para acessar o objeto para o `bricksBuilder`
- Quando chamamos o `bricksBuilder` passando o `.create` ou outros métodos recebemos o seguinte erro 

      ``Uncaught (in promise) TypeError: attempted to get private field on non-instance``
      
- Também gostariamos de saber uma maneira de estilizar o input dentro do `iframe` caso optemos por utilizar o método `core`

