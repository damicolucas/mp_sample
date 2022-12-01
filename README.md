## Problemas

O problema em questão está relacionado aos testes unitários que estão falhando, ao replicar nesse projeto de amostra vi que ocorre o warning mas não chega a quebrar o teste como no nosso projeto principal.

O erro é o seguinte:

```
(node:28065) UnhandledPromiseRejectionWarning: TypeError: window.MercadoPago is not a constructor
(Use `node --trace-warnings ...` to show where the warning was created)
(node:28065) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:28065) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

para rodar o projeto executar o seguinte: 

`npm install`

e logo após 

`npm start`

para executar os testes 

`npm test`


